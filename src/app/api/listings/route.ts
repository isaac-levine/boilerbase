// app/listings/route.ts

import { prisma } from "@/lib/prisma"; // Adjust the import path as needed
import { Like, Review } from "@prisma/client";

// Add a new listing
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userId, title, description, price, tags } = body;

    if (
      !userId ||
      !title ||
      !description ||
      typeof price !== "number" ||
      !Array.isArray(tags) ||
      tags.length === 0
    ) {
      return new Response(JSON.stringify({ error: "Invalid input" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const listing = await prisma.listing.create({
      data: {
        userId,
        title,
        description,
        price,
        tags,
      },
    });

    return new Response(JSON.stringify(listing), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error creating listing:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

// Get a limited number of listings, optionally filtered by tag
export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const limit = parseInt(url.searchParams.get("limit") || "10");
    const tag = url.searchParams.get("tag") || "";

    console.log("Getting listings with limit:", limit, "and tag:", tag);

    const query: any = {
      take: limit,
      where: {
        approved: true,
      },
      include: {
        likes: true,
      },
    };

    if (tag) {
      query.where.tags = {
        has: tag,
      };
    }

    const listings = await prisma.listing.findMany(query);

    return new Response(JSON.stringify(listings), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error getting listings:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
