import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./options";

export async function getSignedInUser() {
  const session = await getServerSession(authOptions);

  console.log(session);

  if (!session || !session.user) {
    redirect("/auth/sign-in");
  }

  if (session.user.onboarded == false) {
    redirect("/auth/onboarding/account");
  }

  return session;
}
