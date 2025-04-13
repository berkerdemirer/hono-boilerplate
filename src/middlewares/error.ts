import type { ErrorHandler, NotFoundHandler } from "hono";
import type { ContentfulStatusCode, StatusCode } from "hono/utils/http-status";

import { ENV } from "#src/utils/env.js";

// Error Handler
export const errorHandler: ErrorHandler = (err, c) => {
  const currentStatus =
    "status" in err ? err.status : c.newResponse(null).status;

  const statusCode =
    currentStatus !== 200 ? (currentStatus as StatusCode) : 500;
  const env = ENV.NODE_ENV;

  return c.json(
    {
      message: err.message || "Internal Server Error",
      stack: env === "development" ? err.stack : null,
      success: false,
    },
    statusCode as ContentfulStatusCode,
  );
};

// Not Found Handler
export const notFound: NotFoundHandler = (c) => {
  return c.json(
    {
      message: `Not Found - [${c.req.method}]:[${c.req.url}]`,
      success: false,
    },
    404, // Explicitly set 404 status
  );
};
