import { getUsers } from "#src/controllers/users.js";
import { protect } from "#src/middlewares/auth.js";
import { Hono } from "hono";
import { describeRoute } from "hono-openapi";
import { resolver } from "hono-openapi/zod";
import { z } from "zod";
const user = new Hono();

const usersResponseSchema = z.object({
  users: z.array(
    z.object({
      createdAt: z.string(),
      email: z.string(),
      id: z.string(),
      name: z.string(),
      updatedAt: z.string(),
    }),
  ),
});

user.get(
  "/",
  describeRoute({
    description: "Get all users",
    responses: {
      200: {
        content: {
          "application/json": { schema: resolver(usersResponseSchema) },
        },
        description: "Successful response",
      },
    },
  }),
  protect,
  getUsers,
);

export { user };
