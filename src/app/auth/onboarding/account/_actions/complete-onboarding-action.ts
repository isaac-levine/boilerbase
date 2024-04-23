"use server";

import { authOptions } from "@/lib/auth/options";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";

export async function completeOnboarding(
  updatedName: string,
  updatedLastName: string,
  updatedRole: string
) {
  const session = await getServerSession(authOptions);

  //check if updatedRole match enum
  if (updatedRole !== "USER" && updatedRole !== "SELLER" && updatedRole !== "ADMIN") {
    return;
  }


  if (!session) {
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
      role: count == 1 ? "ADMIN" : updatedRole,
    },
  });

  return true;
}
