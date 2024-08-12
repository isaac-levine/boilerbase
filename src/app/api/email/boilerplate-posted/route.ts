import { sendPostedEmailToIsaac } from "../service";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const listing = body;
    console.log(body);

    // TODO validate inputs

    await sendPostedEmailToIsaac(listing);

    return new Response(
      JSON.stringify({
        success: true,
        listing: listing,
      })
    );
  } catch (error) {
    console.error("Error sending generation email:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
