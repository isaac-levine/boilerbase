"use client";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { sendBoilerplatePostedEmail } from "@/lib/email/mailer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  techStack: z.string().nonempty({
    message: "Tech stack is required.",
  }),
  price: z.number().min(0, {
    message: "Price must be a positive number.",
  }),
  previewLink: z.string().optional(),
  gitHubLink: z.string().optional(),
});
export default function PostBoilerplateForm() {
  const session = useSession();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      techStack: "",
      price: 0, // 0 means free
      previewLink: "",
      gitHubLink: "",
    },
  });

  // Handle the values from the form submission
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // values.price = Number(values.price);

    if (!session?.data?.user?.id) {
      console.error("Something wrong with session or user object");
      return;
    }

    // Create a new listing object
    const listing = {
      userId: session?.data?.user.id,
      title: values.title,
      description: values.description,
      tags: [values.techStack],
      price: values.price,
      previewLink: values.previewLink,
      gitHubLink: values.gitHubLink,
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
        form.reset();
        toast({
          title: "Thank you!",
          description:
            "We will review your listing and publish it within the next few days.",
        });
        sendBoilerplatePostedEmail(listing);
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
        {/* <FormField
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
        /> */}
        <FormField
          control={form.control}
          name="techStack"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tech Stack</FormLabel>
              <FormControl>
                <Select
                  value={field.value}
                  onValueChange={(value) => form.setValue("techStack", value)}
                >
                  <SelectTrigger>
                    <span>{field.value || "Select a tech stack"}</span>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="React">React</SelectItem>
                    <SelectItem value="Vue">Vue</SelectItem>
                    <SelectItem value="Angular">Angular</SelectItem>
                    <SelectItem value="Svelte">Svelte</SelectItem>
                    <SelectItem value="Spring Boot">Spring Boot</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormDescription>
                Choose the primary tech stack for your boilerplate.
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
                  step="0.01"
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
        <FormField
          control={form.control}
          name="previewLink"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preview Link</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>Optional</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="gitHubLink"
          render={({ field }) => (
            <FormItem>
              <FormLabel>GitHub Link</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>Optional</FormDescription>
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
