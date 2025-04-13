import { ENV } from "#src/utils/env.js";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as schema from "./schema.js";

const client = postgres(ENV.DATABASE_URL);

export const db = drizzle(client, { schema });
