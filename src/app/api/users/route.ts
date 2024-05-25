import { authOptions } from "@/lib/auth/options";
import { prisma } from "@/lib/prisma";
import { NextApiRequest } from "next";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req: any) {
const session = await getServerSession(authOptions);

if (!session) {
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
