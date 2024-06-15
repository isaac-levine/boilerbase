"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FormEvent, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { toast } from "@/components/ui/use-toast";

export default function AccountSettingsForm() {
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
    const update = await fetch("/api/users", {
      method: "PUT",
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
        title: "All Set!",
        description: "Your account details have been updated successfully",
      });
    } else {
      toast({
        title: "Failed to update your account",
        description: "Please try again later",
        variant: "destructive",
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Account Settings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mx-auto max-w-[600px] space-y-6 py-10 container">
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
      </CardContent>
    </Card>
  );
}
