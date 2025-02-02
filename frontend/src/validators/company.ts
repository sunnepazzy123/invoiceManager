import { z } from "zod";

export const companySchema = z.object({
  name: z
    .string()
    .min(2, "Name should be at least 2 character")
    .max(25, "Name should not exceed 25 characters"),

  nip: z
    .string()
    .min(7, "NIP should be at least 7 character")
    .max(25, "NIP should not exceed 15 characters"),

  phone: z
    .string()
    .min(7, "phone should be at least 7 character")
    .max(25, "phone should not exceed 15 characters")
    .refine((value) => !isNaN(Number(value)), {
      message: "Phone must be a valid number",
    }),
    // .transform((value) => Number(value)), // Parse the string to a number

  email: z
    .string()
    .min(4, "Email should be at least 4 character")
    .max(255, "Email should not exceed 255 characters"),

  address: z
    .string()
    .min(4, "Address should be at least 4 character")
    .max(255, "Address should not exceed 255 characters"),
});
