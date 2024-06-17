"use server";

import { authOptions } from "@/lib/auth/options";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";

export async function completeOnboarding(
  updatedName: string,
  updatedLastName: string
) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return;
  }

  const count = await prisma.user.count();

  await prisma.user.update({
    where: {
      id: session?.user.id,
    },
    data: {
      name: updatedName,
      last_name: updatedLastName,
      onboarded: true,
    },
  });

  return true;
}
