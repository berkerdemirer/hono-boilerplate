import { getUsers } from "#src/controllers/users.js";
import { protect } from "#src/middlewares/auth.js";
import { Hono } from "hono";

const user = new Hono();

user.get("/", protect, getUsers);

export { user };
