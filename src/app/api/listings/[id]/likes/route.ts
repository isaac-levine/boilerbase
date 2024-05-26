import { prisma } from "../../../../../lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth/options";

// Add a like to this listing
export async function POST(request: Request) {
  try {
    // Get the session from the request
    const session = await getServerSession(authOptions);

    // Ensure the user is authenticated
    if (!session || !session.user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    const userId = session.user.id;

    // Get the listing ID from the URL of format listings/{listingId}/likes
    const url = new URL(request.url);
    const urlParts = url.pathname.split("/");
    const listingId = urlParts[urlParts.length - 2];

    if (!listingId) {
      return new Response(
        JSON.stringify({ error: "Listing ID not provided" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Create a new like for the listing
    const listing = await prisma.listing.update({
      where: { id: listingId },
      data: {
        likes: {
          create: {
            userId,
          },
        },
      },
    });

    return new Response(JSON.stringify(listing), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error adding like to listing:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
