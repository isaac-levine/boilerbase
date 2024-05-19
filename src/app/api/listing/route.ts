import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userId, title, description, price } = body;

    if (!userId || !title || !description || typeof price !== "number") {
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

// Get limit number of listings
export async function GET(request: Request) {
  try {
    const limit = parseInt(
      new URL(request.url).searchParams.get("limit") || "10"
    );
    console.log("Getting listings with limit:", limit);
    const listings = await prisma.listing.findMany({
      take: limit,
    });

    return new Response(JSON.stringify(listings), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error getting listings:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
