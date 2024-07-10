import { Resend } from "resend";
import { GenerationEmail, MagicLinkEmail } from "./templates/magic-link";

export const resend = new Resend(process.env.RESEND_SECRET);
export const resendDomain = process.env.RESEND_DOMAIN;

export const sendMagicLinkEmail = async (to: string, signInLink: string) => {
  const data = await resend.emails.send({
    from: `Boilerbase <help@${resendDomain}>`,
    to: [to],
    subject: "Magic sign-in link",
    react: MagicLinkEmail({ signInLink: signInLink, sentTo: to }),
  });
};

export const sendGenerationEmailToIsaac = async (
  githubUsername: string,
  cliCommand: string
) => {
  if (!githubUsername || githubUsername === "") {
    console.error(
      "No github username provided. Can not send generation email to Isaac"
    );
  }
  const data = await resend.emails.send({
    from: `Boilerbase <help@${resendDomain}>`,
    to: "isaacmlevine4@gmail.com",
    subject: `Customer ${githubUsername} requested a Boilerplate!`,
    react: GenerationEmail({
      githubUsername: githubUsername,
      cliCommand: cliCommand,
    }),
  });
};
