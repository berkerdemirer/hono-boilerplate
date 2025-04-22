import type { Context, Next } from "hono";

import { auth } from "#src/utils/auth.ts";

// Middleware to protect routes from unauthorized access
export const protect = async (c: Context, next: Next) => {
  const session = await auth.api.getSession({ headers: c.req.raw.headers });

  // If no valid session or user is found, return an unauthorized response
  if (!session?.user) {
    return c.json(
      {
        error: "No valid session found",
        message: "Unauthorized",
        success: false,
      },
      401,
    );
  }

  console.log(session.user);
  // Optionally set the user and session on the context variables
  c.set("user", session.user);
  c.set("session", session.session);

  // Continue to the next middleware/handler
  await next();
};
