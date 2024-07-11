import { sendGenerationEmailToIsaac } from "@/lib/email/mailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { githubUsername, cliCommand } = body;
    console.log(body);

    if (!githubUsername) {
      return new Response(
        JSON.stringify({ error: "Missing GitHub username" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    if (!githubUsername || !cliCommand) {
      return new Response(JSON.stringify({ error: "Invalid input" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    await sendGenerationEmailToIsaac(githubUsername, cliCommand);

    return new Response(
      JSON.stringify({
        success: true,
        githubUsername: githubUsername,
        cliCommand: cliCommand,
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
