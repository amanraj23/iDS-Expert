import { z } from "zod";

export const applicationRequestSchema = z.object({
  applicantName: z.string().trim().min(2).max(120),
  phone: z.string().trim().regex(/^[0-9+\-\s]{8,18}$/),
  email: z.string().trim().email().optional().or(z.literal("")),
  city: z.string().trim().min(2).max(80),
  applicationName: z.string().trim().min(2).max(160),
  dateOfBirth: z.string().optional().or(z.literal("")),
  qualification: z.string().trim().max(120).optional().or(z.literal("")),
  preferredContactMethod: z.enum(["WhatsApp", "Phone", "Email"]),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
  consent: z.literal(true)
});

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  phone: z.string().trim().regex(/^[0-9+\-\s]{8,18}$/),
  email: z.string().trim().email().optional().or(z.literal("")),
  subject: z.string().trim().min(2).max(160),
  message: z.string().trim().min(2).max(1000)
});
