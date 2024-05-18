import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, description, price } = req.body;

    // Input validation
    if (!name || !description || !price) {
      return res
        .status(400)
        .json({ message: "Missing either name, description, or pice." });
    }

    try {
    const newListing = await prisma.listing.create({
        name = name,
        description = description,
        price = price,
        });
    

    res.json(newListing);
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
