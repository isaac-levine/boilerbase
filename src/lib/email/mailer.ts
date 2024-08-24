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
    const response = await fetch("/api/email/generation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Sent boilerplate generation email!");
    } else {
      const errorData = await response.json();
      console.error("Error creating boilerplate generation email", errorData);
    }
  } catch (error) {
    console.error("Error sending boilerplate generation email", error);
  }
};

export const sendBoilerplatePostedEmail = async (listing: any) => {
  try {
    // TODO validate inputs
    const response = await fetch("/api/email/boilerplate-posted", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(listing),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Sent boilerplate posted email!");
    } else {
      const errorData = await response.json();
      console.error("Error creating boilerplate posted email", errorData);
    }
  } catch (error) {
    console.error("Error sending boilerplate posted email", error);
  }
};
