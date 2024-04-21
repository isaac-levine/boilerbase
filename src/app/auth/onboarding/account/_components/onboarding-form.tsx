"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { completeOnboarding } from "../_actions/complete-onboarding-action";
import { User } from "@prisma/client";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import Link from "next/link";

let roles = [
  { label: "User", value: "USER" },
  { label: "Seller", value: "SELLER" },
];

const onboardingSchema = z.object({
  name: z.string().min(2).max(64),
  last_name: z.string().min(2).max(64),
  role: z
    .string({
      required_error: "Please select a role.",
    })
    .default("USER"),
});

export function OnboardingForm({ user }: { user: User }) {
  if (user.role === "ADMIN") {
    roles.push({ label: "Admin", value: "ADMIN" });
  }

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof onboardingSchema>>({
    //@ts-ignore
    resolver: zodResolver(onboardingSchema),
    defaultValues: {
      name: "" + user.name,
      last_name: "" + user.last_name,
      role: user.role,
    },
  });

  async function onSubmit(values: z.infer<typeof onboardingSchema>) {
    setLoading(true);
    await completeOnboarding(values.name, values.last_name, values.role);
    toast({
      title: "Updated",
      description: "You have successfully changed your personal information",
      variant: "default",
    });
    router.push("/");
    setLoading(false);
  }

  return (
    <div className="flex flex-col m-auto select-none ">
      <div className="flex flex-col pb-8">
        <p className=" text-lg font-medium text-left">
          {"Tell us about yourself"}
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="last_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem className="pb-10">
                <FormLabel>Role</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {user.role === "ADMIN" && (
                      <SelectItem value="ADMIN">Admin</SelectItem>
                    )}
                    <SelectItem value="USER">User</SelectItem>
                    <SelectItem value="SELLER">Seller</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
                <FormDescription>
                  {"Your role will determine your permissions."}
                </FormDescription>
              </FormItem>
            )}
          />

          <Button
            loading={loading}
            className="w-full "
            type="submit"
            variant={"secondary"}
          >
            Continue
          </Button>
        </form>
      </Form>
    </div>
  );
}
