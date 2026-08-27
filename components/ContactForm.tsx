"use client";

import { startTransition, useActionState, useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight } from "lucide-react";
import { useForm } from "react-hook-form";

import { submitContact, type ContactFormState } from "@/app/actions/contact";
import Field from "@/components/ui/Field";
import { ENQUIRY_TYPES } from "@/lib/contact";
import { contactFormSchema } from "@/lib/contact-schema";
import { Textarea } from "@/components/ui/Textarea";
import Label from "@/components/ui/Label";
import { Select, Option } from "@/components/ui/Select";
import { Spinner } from "@/components/ui/spinner";
import { cn } from "@/lib/utils";

const initialState: ContactFormState = { status: "idle", message: "" };

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContact,
    initialState,
  );
  const [startedAt] = useState(() => Date.now().toString());
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactFormSchema),
  });

  useEffect(() => {
    if (state.status === "success") {
      reset();
    }
  }, [reset, state.status]);

  const onSubmit = handleSubmit((values, event) => {
    if (!(event?.target instanceof HTMLFormElement)) return;

    const formData = new FormData(event.target);
    formData.set("name", values.name);
    formData.set("email", values.email);
    formData.set("company", values.company);
    formData.set("enquiryType", values.enquiryType);
    formData.set("message", values.message);
    startTransition(() => formAction(formData));
  });

  return (
    <form onSubmit={onSubmit} className="max-w-2xl space-y-5">
      <div
        aria-hidden="true"
        className="absolute -left-[9999px] h-px w-px overflow-hidden"
      >
        <label htmlFor="companyWebsite">Company website</label>
        <input
          id="companyWebsite"
          name="companyWebsite"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <input name="startedAt" type="hidden" value={startedAt} readOnly />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">NAME</Label>
          <Field
            id="name"
            type="text"
            minLength={2}
            maxLength={80}
            autoComplete="name"
            placeholder="Your name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            required
            {...register("name")}
            disabled={isPending}
          />
          {errors.name ? (
            <FormError id="name-error" message={errors.message?.message} />
          ) : null}
        </div>

        <div>
          <Label htmlFor="email">EMAIL</Label>
          <Field
            id="email"
            type="email"
            maxLength={254}
            autoComplete="email"
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            required
            {...register("email")}
            disabled={isPending}
          />
          {errors.email ? (
            <FormError id="email-error" message={errors.message?.message} />
          ) : null}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="company">
            COMPANY / ORGANISATION{" "}
            <span className="text-muted-foreground">(OPTIONAL)</span>
          </Label>
          <Field
            id="company"
            type="text"
            maxLength={100}
            autoComplete="organization"
            placeholder="Company name"
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? "company-error" : undefined}
            {...register("company")}
            disabled={isPending}
          />
          {errors.company ? (
            <FormError id="company-error" message={errors.message?.message} />
          ) : null}
        </div>

        <div>
          <Label htmlFor="enquiryType">ENQUIRY TYPE</Label>
          <Select
            id="enquiryType"
            defaultValue=""
            aria-invalid={Boolean(errors.enquiryType)}
            aria-describedby={
              errors.enquiryType ? "enquiry-type-error" : undefined
            }
            required
            {...register("enquiryType")}
            disabled={isPending}
          >
            <Option value="" disabled>
              Choose one
            </Option>
            {Object.entries(ENQUIRY_TYPES).map(([value, label]) => (
              <Option key={value} value={value}>
                {label}
              </Option>
            ))}
          </Select>
          {errors.enquiryType ? (
            <FormError
              id="enquiry-type-error"
              message={errors.message?.message}
            />
          ) : null}
        </div>
      </div>

      <div>
        <Label htmlFor="message">MESSAGE</Label>
        <Textarea
          className="min-h-40 resize-y`"
          id="message"
          minLength={20}
          maxLength={3_000}
          placeholder="Tell me a little about what you’re working on…"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          required
          {...register("message")}
          disabled={isPending}
        />
        {errors.message ? (
          <FormError id="message-error" message={errors.message.message} />
        ) : null}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={isPending}
          className={cn(
            "group flex items-center justify-between gap-8 border border-primary bg-primary px-6 py-4 text-primary-foreground transition-colors",
            isPending
              ? "disabled:cursor-not-allowed disabled:opacity-60"
              : "hover:bg-transparent hover:text-foreground",
          )}
        >
          <span className="font-mono text-sm">
            {isPending ? "SENDING…" : "SEND MESSAGE"}
          </span>
          {isPending ? (
            <Spinner className="h-4 w-4" />
          ) : (
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          )}
        </button>

        <p
          aria-live="polite"
          className={`font-mono text-xs ${
            state.status === "error" ? "text-destructive" : "text-primary"
          }`}
          role="status"
        >
          {state.message}
        </p>
      </div>
    </form>
  );
}

function FormError({ id, message }: { id: string; message?: string }) {
  return (
    <p id={id} className="mt-2 font-mono text-xs text-destructive">
      {message}
    </p>
  );
}
