import { authOptions } from "@/lib/auth/options";
import { prisma } from "@/lib/prisma";
import { createCustomerIfNull } from "@/lib/stripe";
import { NextApiRequest } from "next";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

// Add new user
export async function POST(req: any) {
  console.log("Adding new user: ", req.body);
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json({
      message: "Unauthorized",
      success: false,
    });
  }

  const { email, firstName, lastName } = await req.json();
  const name = firstName;
  const last_name = lastName;

  console.log("Updating user settings:", {
    email,
    firstName,
    lastName,
  });

  const result = await prisma.user.update({
    where: {
      id: session.user.id,
    },
    data: {
      email,
      name,
      last_name,
    },
  });

  if (result) {
    return NextResponse.json({
      message: "Success",
      success: true,
    });
  }

  return NextResponse.json({
    message: "Failed to update user settings",
    success: false,
  });
}

// Update user settings
export async function PUT(req: any) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    return NextResponse.json({
      message: "Unauthorized",
      success: false,
    });
  }

  const { email, firstName, lastName } = await req.json();
  const name = firstName;
  const last_name = lastName;

  console.log("Updating user settings:", {
    email,
    firstName,
    lastName,
  });

  const result = await prisma.user.update({
    where: {
      id: session.user.id,
    },
    data: {
      email,
      name,
      last_name,
    },
  });

  if (result) {
    return NextResponse.json({
      message: "Success",
      success: true,
    });
  }

  return NextResponse.json({
    message: "Failed to update user settings",
    success: false,
  });
}
