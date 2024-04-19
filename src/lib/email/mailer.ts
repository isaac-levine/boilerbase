import { Resend } from "resend";
import { MagicLinkEmail } from "./templates/magic-link";

export const resend = new Resend(process.env.RESEND_SECRET);
export const resendDomain = process.env.RESEND_DOMAIN;

export async function sendMagicLinkEmail(to: string, signInLink: string) {
  const data = await resend.emails.send({
    from: `BoilerBase <onboarding@${resendDomain}>`,
    to: [to],
    subject: "Magic sign-in link",
    react: MagicLinkEmail({ signInLink: signInLink, sentTo: to }),
  });
}
