import { BoilerplatePostedEmail } from "@/lib/email/templates/BoilerplatePostedEmail";
import { GenerationEmail } from "@/lib/email/templates/GenerationEmail";
import { MagicLinkEmail } from "@/lib/email/templates/MagicLinkEmail";
import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_SECRET);
export const resendDomain = process.env.RESEND_DOMAIN;

export async function sendMagicLinkEmail(to: string, signInLink: string) {
  const data = await resend.emails.send({
    from: `Boilerbase <help@${resendDomain}>`,
    to: [to],
    subject: "Magic sign-in link",
    react: MagicLinkEmail({ signInLink: signInLink, sentTo: to }),
  });
}

export const sendGenerationEmailToIsaac = async (
  githubUsername: string,
  cliCommand: string
) => {
  if (!githubUsername || githubUsername === "") {
    console.error(
      "No github username provided. Can not perform sendGenerationEmailToIsaac"
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

export const sendPostedEmailToIsaac = async (listing: any) => {
  if (!listing || !listing.title) {
    console.error(
      "No listing provided. Can not perform sendPostedEmailToIsaac"
    );
  }
  const data = await resend.emails.send({
    from: `Boilerbase <help@${resendDomain}>`,
    to: "isaacmlevine4@gmail.com",
    subject: `User ${listing.userId} posted a Boilerplate for review!`,
    react: BoilerplatePostedEmail({
      userId: listing.userId,
      title: listing.title,
      description: listing.description,
      tags: listing.tags,
      previewLink: listing.previewLink,
      gitHubLink: listing.gitHubLink,
    }),
  });
};
