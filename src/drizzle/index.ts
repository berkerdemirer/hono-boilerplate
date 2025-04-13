import { ENV } from "#src/utils/env.js";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const client = postgres(ENV.DATABASE_URL);

const db = drizzle(client);

export { db };
