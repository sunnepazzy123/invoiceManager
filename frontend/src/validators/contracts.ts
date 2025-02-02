import { z } from "zod";

export const contractCreateSchema = z.object({
  dailyHours: z
    .number()
    .min(8, "Daily Hours should be at least 8")
    .max(10, "Daily Hours should not exceed 10"),

  duration: z.number().min(3, "Duration should be at least 3"),

  wagesPerHour: z.number().min(3, "Wages PerHour should be at least 3"),


  clientCompanyNip: z
    .string()
    .min(7, "clientCompanyNip should be at least 7 character")
    .max(25, "clientCompanyNip should not exceed 15 characters"),

  companyNip: z
    .string()
    .min(7, "companyNip should be at least 7 character")
    .max(25, "companyNip should not exceed 15 characters"),

  type: z.string(),

  signature: z
    .string()
    .min(4, "signature should be at least 4 character")
    .max(255, "signature should not exceed 255 characters"),
});
