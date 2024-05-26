import { prisma } from "../../../../lib/prisma";

// Get a single listing by ID
export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const id = url.pathname.split("/").pop();
    console.log("Getting listing with ID:", id);
    const listing = await prisma.listing.findUnique({
      where: { id: id },
      include: {
        reviews: true,
        likes: true,
      },
    });

    if (!listing) {
      return new Response(JSON.stringify({ error: "Listing not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(listing), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error getting listing:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
