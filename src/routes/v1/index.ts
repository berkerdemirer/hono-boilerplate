import { Scalar } from "@scalar/hono-api-reference";
import { Hono } from "hono";
import { openAPISpecs } from "hono-openapi";

import { user } from "./user.js";

const v1 = new Hono();

v1.get("/health", (c) => {
  return c.json({
    status: "ok",
    timestamp: new Date().toISOString(),
  });
});

v1.get(
  "/openapi",
  openAPISpecs(v1, {
    documentation: {
      info: {
        description: "Boilerplate API",
        title: "Hono API",
        version: "1.0.0",
      },
      servers: [{ description: "Local Server", url: "http://localhost:3000" }],
    },
  }),
);

v1.get(
  "/docs",
  Scalar({
    theme: "saturn",
    url: "/api/v1/openapi",
  }),
);

v1.route("/users", user);

export { v1 };
