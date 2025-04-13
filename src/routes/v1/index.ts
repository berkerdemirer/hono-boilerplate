import { Hono } from "hono";

import { user } from "./user.js";

const v1 = new Hono();

v1.get("/health", (c) => {
  return c.json({
    status: "ok",
    timestamp: new Date().toISOString(),
  });
});

v1.route("/users", user);

export { v1 };
