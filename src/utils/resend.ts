import { emailConfig } from "#src/config/email.js";
import { ENV } from "#src/utils/env.js";
import { Resend } from "resend";

export async function sendEmail({
  subject,
  template,
  to,
}: {
  subject: string;
  template: string;
  to: string;
}) {
  const resend = new Resend(ENV.RESEND_API_KEY);

  try {
    const { data } = await resend.emails.send({
      from: emailConfig.from,
      html: template,
      subject: subject,
      to: to,
    });

    return data;
  } catch (error) {
    console.error("error", error);
    throw error;
  }
}
