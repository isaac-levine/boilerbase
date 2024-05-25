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
import { FormEvent, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { toast } from "@/components/ui/use-toast";

export default function Component() {
  const session = useSession();
  const user = session?.data?.user;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setFirstName(user?.name ?? "");
    setLastName(user?.last_name ?? "");
    setEmail(user?.email ?? "");
  }, [user?.name, user?.last_name, user?.email]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    // console.log(
    //   "Form submitted. Email: ",
    //   email,
    //   "Name: ",
    //   firstName,
    //   "Last Name: ",
    //   lastName
    // );

    const update = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        firstName,
        lastName,
      }),
    });

    const result = await update.json();

    if (result.success) {
      toast({
        title: "Successfully updated your account",
        description: "Your account details have been updated successfully",
      });
    } else {
      toast({
        title: "Failed to update your account",
        description: "Please try again later",
        variant: "destructive",
      });
    }

    // post the form data to the api

    // handle success response status

    // handle failure response status
  };

  return (
    <MaxWidthWrapper>
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
              <Input
                id="firstName"
                required
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                required
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              required
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <Button className="w-full dark:text-foreground" type="submit">
            Save Changes
          </Button>
        </form>
      </div>
    </MaxWidthWrapper>
  );
}
