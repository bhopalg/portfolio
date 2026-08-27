import { z } from "zod";

import { ENQUIRY_TYPE_VALUES } from "@/lib/contact";

const URL_PATTERN = /https?:\/\/|www\./gi;

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Enter a name between 2 and 80 characters.")
    .max(80, "Enter a name between 2 and 80 characters."),
  email: z
    .email("Enter a valid email address.")
    .trim()
    .max(254, "Enter a valid email address.")
    .transform((value) => value.toLowerCase()),
  company: z
    .string()
    .trim()
    .max(100, "Company or organisation must be 100 characters or fewer."),
  enquiryType: z.enum(ENQUIRY_TYPE_VALUES, {
    error: "Choose an enquiry type.",
  }),
  message: z
    .string()
    .trim()
    .min(20, "Your message must be between 20 and 3,000 characters.")
    .max(3_000, "Your message must be between 20 and 3,000 characters.")
    .refine((value) => (value.match(URL_PATTERN) ?? []).length <= 2, {
      message: "Please include no more than two links.",
    }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
