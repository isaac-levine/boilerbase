"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User } from "@prisma/client";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { completeOnboarding } from "../_actions/complete-onboarding-action";

import { useRouter } from "next/navigation";
import { useState } from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";

const onboardingSchema = z.object({
  first_name: z.string().min(2).max(64),
  last_name: z.string().min(2).max(64),
});

export function OnboardingForm({ user }: { user: User }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof onboardingSchema>>({
    //@ts-ignore
    resolver: zodResolver(onboardingSchema),
    defaultValues: {
      first_name: "" + user.first_name,
      last_name: "" + user.last_name,
      // role: user.role,
    },
  });

  async function onSubmit(values: z.infer<typeof onboardingSchema>) {
    setLoading(true);
    await completeOnboarding(values.first_name, values.last_name);
    toast({
      title: "Updated",
      description: "You have successfully changed your personal information",
      variant: "default",
    });
    router.push("/");
    setLoading(false);
  }

  return (
    <div className="flex flex-col m-auto select-none text-foreground ">
      <div className="flex flex-col pb-8">
        <p className=" text-lg font-medium text-left">
          {"Tell us about yourself"}
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="first_name"
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
          <Button>Continue</Button>
        </form>
      </Form>
    </div>
  );
}
