import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createListing(data: {
  userId: string;
  title: string;
  description: string;
  price: number;
}) {
  const { userId, title, description, price } = data;

  if (!userId || !title || !description || typeof price !== "number") {
    throw new Error("Invalid input");
  }

  const listing = await prisma.listing.create({
    data: {
      userId,
      title,
      description,
      price,
    },
  });

  return listing;
}
