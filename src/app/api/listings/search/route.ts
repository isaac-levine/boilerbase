import { prisma } from "../../../../lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// Search listings by a search string in title and description
export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const searchString = url.searchParams.get("q") || "";

    // Build the Prisma query object
    const query = {
      where: {
        approved: true,
        OR: [
          {
            title: {
              contains: searchString,
              mode: "insensitive" as const,
            },
          },
          {
            description: {
              contains: searchString,
              mode: "insensitive" as const,
            },
          },
        ],
      },
    };

    console.log("Searching listings with query:", query);

    const listings = await prisma.listing.findMany(query);

    return new NextResponse(JSON.stringify(listings), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error searching listings:", error);
    return new NextResponse(
      JSON.stringify({ error: "Internal Server Error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
