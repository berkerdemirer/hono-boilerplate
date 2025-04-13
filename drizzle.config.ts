import { ENV } from "#src/utils/env.js";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dbCredentials: {
    url: ENV.DATABASE_URL,
  },
  dialect: "postgresql",
  out: "./drizzle/migrations",
  schema: "./drizzle/schema.ts",
});
