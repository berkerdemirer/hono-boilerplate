import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  BETTER_AUTH_SECRET: z.string(),
  CLIENT_URL: z.string(),
  DATABASE_URL: z.string(),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  NODE_ENV: z.enum(["development", "production"]).default("development"),
  POLAR_ACCESS_TOKEN: z.string(),
  POLAR_WEBHOOK_SECRET: z.string().optional(),
  PORT: z.number().default(3000),
  RESEND_API_KEY: z.string(),
});

export const ENV = envSchema.parse(process.env);
