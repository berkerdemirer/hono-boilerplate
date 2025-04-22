import { errorHandler, notFound } from "#src/middlewares/error.js";
import { v1 } from "#src/routes/v1/index.js";
import { auth } from "#src/utils/auth.ts";
import { ENV } from "#src/utils/env.js";
import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { compress } from "hono/compress";
import { cors } from "hono/cors";
import { csrf } from "hono/csrf";
import { languageDetector } from "hono/language";
import { logger } from "hono/logger";
import { prettyJSON } from "hono/pretty-json";
import { requestId } from "hono/request-id";
import { secureHeaders } from "hono/secure-headers";

const app = new Hono<{
  Variables: {
    session: null | typeof auth.$Infer.Session.session;
    user: null | typeof auth.$Infer.Session.user;
  };
}>();

app.use(prettyJSON());
app.use(csrf({ origin: ENV.CLIENT_URL }));
app.use(compress());
app.use(logger());
app.use(secureHeaders());
app.use("*", requestId());
app.use(
  languageDetector({
    fallbackLanguage: "en",
    supportedLanguages: ["en", "et", "tr"],
  }),
);
app.use(
  "*",
  cors({
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["POST", "GET", "OPTIONS"],
    credentials: true,
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
    origin: ENV.CLIENT_URL,
  }),
);

app.on(["POST", "GET"], "/api/auth/*", (c) => {
  return auth.handler(c.req.raw);
});

app.route("/api/v1", v1);
app.onError(errorHandler);
app.notFound(notFound);

serve(
  {
    fetch: app.fetch,
    port: ENV.PORT,
  },
  (info) => {
    console.log(
      `Server is running on http://localhost:${info.port.toString()}`,
    );
  },
);
