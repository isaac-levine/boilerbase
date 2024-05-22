"use client";
import { useSession } from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { cn } from "@/lib/utils";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  description: z.string().min(1, {
    message: "Description must be at least 10 characters.",
  }),
  price: z.number().min(0, {
    message: "Price must be a positive number.",
  }),
});
export default function SellAnItemForm({ dark = true }: { dark?: boolean }) {
  const session = useSession();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      price: 0,
    },
  });

  // Handle the values from the form submission
  async function onSubmit(values: z.infer<typeof formSchema>) {
    values.price = Number(values.price);
    const listing = {
      userId: session?.data?.user.id,
      title: values.title,
      description: values.description,
      price: values.price,
    };

    try {
      const response = await fetch("/api/listings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(listing),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Listing created:", data);
        // Reset form fields or display a success message
        alert("Listing created! Title: " + data.title);
      } else {
        const errorData = await response.json();
        console.error("Error creating listing:", errorData);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>
                This is the public display name of your boilerplate.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>
                A short description of your project, core features, and use
                cases.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  {...field}
                  onChange={(e) => {
                    form.setValue("price", parseFloat(e.target.value));
                  }}
                />
              </FormControl>
              <FormDescription>
                How much does your boilerplate cost in USD?
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className={buttonVariants()} type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}
