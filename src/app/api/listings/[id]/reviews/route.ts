import { prisma } from "../../../../../lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth/options";

// Add a review to a listing's reviews
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

    // Get the listing ID from the URL of format listings/{listingId}/reviews
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

    const body = await request.json();
    const { review } = body;

    if (!review) {
      return new Response(
        JSON.stringify({ error: "Review content is required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    console.log("Adding review to listing with ID:", listingId);

    // Create a new review and associate it with the listing
    const newReview = await prisma.review.create({
      data: {
        content: review,
        userId: userId,
        listingId: listingId,
      },
    });

    return new Response(JSON.stringify(newReview), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error adding review to listing:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
