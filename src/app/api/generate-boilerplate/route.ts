export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { projectTitle, githubUsername, cliCommand } = body;
    console.log(body);

    if (!githubUsername || !cliCommand || !projectTitle) {
      return new Response(
        JSON.stringify({
          error: "Invalid input. Missing either title, username, command.",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // TODO: add service function here that sends SQS queue message or triggers lambda, etc.

    return new Response(
      JSON.stringify({
        success: true,
        projectTitle: projectTitle,
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
