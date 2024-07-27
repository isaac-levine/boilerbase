"use client";

export const sendGenerationEmail = async (
  githubUsername: string,
  cliCommand: string
) => {
  try {
    const requestBody = {
      githubUsername: githubUsername,
      cliCommand: cliCommand,
    };
    const response = await fetch("/api/boilerplate/send-generation-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Sent boilerpalte generation email!");
      // Reset form fields or display a success message
      // toast({
      //   title: "Thank you!",
      //   description:
      //     "You should get added to a repository on GitHub containing your boilerplate shortly!",
      // });
    } else {
      const errorData = await response.json();
      console.error("Error creating boilerplate generation email", errorData);
    }
  } catch (error) {
    console.error("Error sending boilerplate generation email", error);
  }
};
