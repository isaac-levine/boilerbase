"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { FormEvent, useState } from "react";
import { useSession } from "next-auth/react";

export default function Component() {
  const session = useSession();
  const user = session?.data?.user;

  const [firstName, setFirstName] = useState(user?.name);
  const [lastName, setLastName] = useState(user?.last_name);
  const [email, setEmail] = useState(user?.email);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    console.log(
      "Form submitted. Email: ",
      email,
      "Name: ",
      firstName,
      "Last Name: ",
      lastName
    );

    // post the form data to the api

    // handle success response status

    // handle failure response status
  };

  return (
    <div className="mx-auto max-w-[600px] space-y-6 py-10">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Account Settings</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Manage your account details.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input defaultValue="John" id="firstName" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input defaultValue="Doe" id="lastName" required />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            defaultValue="john@example.com"
            id="email"
            required
            type="email"
          />
        </div>
        <Button className="w-full" type="submit">
          Save Changes
        </Button>
      </form>
    </div>
  );
}
