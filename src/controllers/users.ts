import type { Context } from "hono";

import { db } from "#src/db/index.js";

export const getUsers = async (c: Context) => {
  const users = await db.query.user.findMany();
  return c.json(users);
};
