import { ENV } from "#src/utils/env.ts";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dbCredentials: {
    url: ENV.DATABASE_URL,
  },
  dialect: "postgresql",
  out: "./src/db/migrations",
  schema: "./src/db/schema.ts",
});
