import { db } from "#src/db/index.js";
import {
  account,
  product,
  session,
  user,
  verification,
} from "#src/db/schema.js";
import { resetPasswordEmail } from "#src/templates/mail.js";
import { verifyEmail, welcomeEmail } from "#src/templates/mail.js";
import { ENV } from "#src/utils/env.js";
import { sendEmail } from "#src/utils/resend.js";
import { polar } from "@polar-sh/better-auth";
import { Polar } from "@polar-sh/sdk";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { openAPI } from "better-auth/plugins";

const polarClient = new Polar({
  accessToken: ENV.POLAR_ACCESS_TOKEN,
  server: "sandbox",
});

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      account,
      product,
      session,
      user,
      verification,
    },
  }),
  databaseHooks: {
    user: {
      create: {
        after: async (user) => {
          await sendEmail({
            subject: "Welcome to MyApp",
            template: welcomeEmail({
              username: user.name || user.email,
            }),
            to: user.email,
          });
        },
      },
    },
  },
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    async sendResetPassword({ url, user }) {
      await sendEmail({
        subject: "Reset your password",
        template: resetPasswordEmail({
          resetLink: url,
          username: user.email,
        }),
        to: user.email,
      });
    },
  },
  emailVerification: {
    sendVerificationEmail: async ({ url, user }) => {
      await sendEmail({
        subject: "Verify your email",
        template: verifyEmail({
          url: url,
          username: user.email,
        }),
        to: user.email,
      });
    },
  },
  plugins: [
    openAPI(),
    polar({
      checkout: {
        enabled: true,
        products: async () => {
          const allProducts = await db.select().from(product);
          return allProducts.map(({ productId, slug }) => ({
            productId,
            slug,
          }));
        },
        successUrl: "/success?checkout_id={CHECKOUT_ID}",
      },
      client: polarClient,
      createCustomerOnSignUp: true,
    }),
  ],
  rateLimit: {
    enabled: true,
    max: 100,
    window: 10,
  },
  socialProviders: {
    google: {
      clientId: ENV.GOOGLE_CLIENT_ID,
      clientSecret: ENV.GOOGLE_CLIENT_SECRET,
    },
  },
  trustedOrigins: [ENV.CLIENT_URL],
  user: {
    deleteUser: {
      enabled: true,
    },
  },
});
