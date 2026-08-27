"use server";

import { createHash } from "node:crypto";
import { headers } from "next/headers";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { Resend } from "resend";

import { ENQUIRY_TYPES } from "@/lib/contact";
import { contactFormSchema } from "@/lib/contact-schema";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

const SUCCESS_MESSAGE = "Thanks — your message is on its way.";

let ipRateLimit: Ratelimit | undefined;
let emailRateLimit: Ratelimit | undefined;
let redis: Redis | undefined;

function getRedis() {
  redis ??= Redis.fromEnv();
  return redis;
}

function getIpRateLimit() {
  ipRateLimit ??= new Ratelimit({
    redis: getRedis(),
    limiter: Ratelimit.slidingWindow(3, "1 h"),
    prefix: "portfolio:contact:ip",
    enableProtection: true,
  });

  return ipRateLimit;
}

function getEmailRateLimit() {
  emailRateLimit ??= new Ratelimit({
    redis: getRedis(),
    limiter: Ratelimit.slidingWindow(2, "24 h"),
    prefix: "portfolio:contact:email",
  });

  return emailRateLimit;
}

function readField(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[character] ?? character,
  );
}

function error(message: string): ContactFormState {
  return { status: "error", message };
}

export async function submitContact(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const honeypot = readField(formData, "companyWebsite");
  const startedAt = Number(readField(formData, "startedAt"));

  // Return a normal-looking success response so bots do not learn what caught them.
  if (honeypot || !startedAt || Date.now() - startedAt < 1_500) {
    return { status: "success", message: SUCCESS_MESSAGE };
  }

  const validation = contactFormSchema.safeParse({
    name: readField(formData, "name"),
    email: readField(formData, "email"),
    company: readField(formData, "company"),
    enquiryType: readField(formData, "enquiryType"),
    message: readField(formData, "message"),
  });

  if (!validation.success) {
    return error(
      validation.error.issues[0]?.message ?? "Check the form and try again.",
    );
  }

  const { name, email, company, enquiryType, message } = validation.data;

  const resendApiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!resendApiKey || !to || !from) {
    console.error("Contact form environment variables are not configured.");
    return error(
      "The contact form is temporarily unavailable. Please try again later.",
    );
  }

  try {
    const requestHeaders = await headers();
    const forwardedFor = requestHeaders.get("x-forwarded-for");
    const ip =
      forwardedFor?.split(",")[0]?.trim() ||
      requestHeaders.get("x-real-ip") ||
      "unknown";
    const userAgent = requestHeaders.get("user-agent") ?? "unknown";
    const ipIdentifier = createHash("sha256").update(ip).digest("hex");
    const emailIdentifier = createHash("sha256").update(email).digest("hex");

    const [ipLimit, recipientLimit] = await Promise.all([
      getIpRateLimit().limit(ipIdentifier, { ip, userAgent }),
      getEmailRateLimit().limit(emailIdentifier),
    ]);

    if (!ipLimit.success || !recipientLimit.success) {
      return error("Too many messages have been sent. Please try again later.");
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(company);
    const enquiryLabel = ENQUIRY_TYPES[enquiryType];
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");
    const idempotencyKey = `contact-${createHash("sha256")
      .update(`${ipIdentifier}:${email}:${enquiryType}:${message}`)
      .digest("hex")}`;

    const companyLine = company ? `\nCompany: ${company}` : "";
    const companyHtml = company
      ? `<p><strong>Company:</strong> ${safeCompany}</p>`
      : "";

    const { error: sendError } = await new Resend(resendApiKey).batch.send(
      [
        {
          from,
          to,
          replyTo: email,
          subject: `[${enquiryLabel}] Enquiry from ${name.replace(/[\r\n]/g, " ")}`,
          text: `Name: ${name}\nEmail: ${email}${companyLine}\nType: ${enquiryLabel}\n\n${message}`,
          html: `<p><strong>Name:</strong> ${safeName}</p><p><strong>Email:</strong> ${safeEmail}</p>${companyHtml}<p><strong>Type:</strong> ${enquiryLabel}</p><p>${safeMessage}</p>`,
        },
        {
          from,
          to: email,
          replyTo: to,
          subject: "Thanks for getting in touch",
          text: `Hi ${name},\n\nThanks for your ${enquiryLabel.toLowerCase()} enquiry. I've received your message and will get back to you as soon as I can.\n\nGurpreet Bhopal`,
          html: `<p>Hi ${safeName},</p><p>Thanks for your ${enquiryLabel.toLowerCase()} enquiry. I’ve received your message and will get back to you as soon as I can.</p><p>Gurpreet Bhopal</p>`,
        },
      ],
      { idempotencyKey },
    );

    if (sendError) {
      console.error("Resend rejected a contact form email:", sendError.message);
      return error("Your message could not be sent. Please try again later.");
    }

    return { status: "success", message: SUCCESS_MESSAGE };
  } catch (submissionError) {
    console.error("Contact form submission failed:", submissionError);
    return error(
      "The contact form is temporarily unavailable. Please try again later.",
    );
  }
}
