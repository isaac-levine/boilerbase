import { Listing } from "@prisma/client";

// We are not using this library client function right now
// Instead, we are just calling the API route directly from the frontend
// Which is fine for now, but may want to extract that logic into a client library function (like this one below) later

export const addListing = async ({ listing }: { listing: any }) => {
  try {
    const response = await fetch("/api/listing", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(listing),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Listing created:", data);
    } else {
      const errorData = await response.json();
      console.error("Error creating listing:", errorData);
    }
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};
