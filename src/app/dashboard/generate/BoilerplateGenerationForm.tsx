"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
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
import { sendGenerationEmail } from "@/lib/email/mailer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormFieldNames, questions } from "./questions";

const formSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: "Title must be at least 2 characters.",
    })
    .refine((value) => !value.includes(" "), {
      message: "Title must be one word, no spaces.",
    }),
  typescript: z.string(),
  eslint: z.string(),
  tailwind: z.string(),
  srcDirectory: z.string(),
  appRouter: z.string(),
  customImportAlias: z.string(),
  preferredPackageManager: z.string(),
  componentLibrary: z.string(),
  orm: z.string(),
  database: z.string(),
  databaseProvider: z.string(),
  authenticationPackage: z.string(),
  authProvider: z.string(),
  tRPC: z.string(),
  Stripe: z.string(),
  Resend: z.string(),
});

export default function BoilerplateGenerationForm() {
  useEffect(() => {
    setShowPopup(false);
  }, []);
  const session = useSession();
  const [showPopup, setShowPopup] = useState(false);
  const [command, setCommand] = useState("");
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      typescript: "Yes",
      eslint: "Yes",
      tailwind: "Yes",
      srcDirectory: "Yes",
      appRouter: "Yes",
      customImportAlias: "No",
      preferredPackageManager: "NPM",
      componentLibrary: "Shadcn UI (with next-themes)",
      orm: "Drizzle",
      database: "Postgres",
      databaseProvider: "",
      authenticationPackage: "NextAuth",
      authProvider: "Discord",
      tRPC: "No",
      Stripe: "No",
      Resend: "No",
    },
  });

  // Handle the values from the form submission
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("Form submitted!");
    if (!session?.data?.user?.id) {
      console.error("Something wrong with session or user object");
      return;
    }
    // Create the CLI string to generate the boilerplate
    // Use the buildCommand function to generate the CLI command
    const kirimaseCommand = buildKirimaseCommand(values);
    const createNextAppCommand = buildCreateNextAppCommand(values);
    const fullCommand = `${createNextAppCommand}`; /* && cd ${values.title} && ${kirimaseCommand}`; */

    setCommand(fullCommand);
    setShowPopup(true);
    sendGenerationEmail(session?.data?.user?.username || "", fullCommand);
  };

  const buildKirimaseCommand = (values: z.infer<typeof formSchema>) => {
    let cliCommand = "npx kirimase init";

    // Handle src folder option
    cliCommand += ` -sf ${values.srcDirectory ? "yes" : "no"}`;

    // Handle package manager option
    cliCommand += ` -pm ${values.preferredPackageManager.toLowerCase()}`;

    // ORM
    cliCommand += ` -o ${values.orm.toLowerCase()}`;

    // Component library
    if (values.componentLibrary === "Shadcn UI (with next-themes)") {
      cliCommand += ` -cl shadcn-ui`;
    }
    // Database
    cliCommand += ` -db ${values.database.toLowerCase()}`;

    // Database provider, only if ORM is Drizzle
    if (values.orm === "Drizzle" && values.databaseProvider) {
      cliCommand += ` -dbp ${values.databaseProvider.toLowerCase()}`;
    }
    // Authentication and providers
    cliCommand += ` -a ${values.authenticationPackage
      .toLowerCase()
      .replace(/ /g, "-")}`;
    if (values.authenticationPackage === "NextAuth") {
      cliCommand += ` -ap ${values.authProvider
        .toLowerCase()
        .replace(/ /g, "-")}`;
    }

    // Miscellaneous packages
    let miscPackages = [];
    if (values.tRPC === "Yes") miscPackages.push("trpc");
    if (values.Stripe === "Yes") miscPackages.push("stripe");
    if (values.Resend === "Yes") miscPackages.push("resend");
    if (miscPackages.length > 0) {
      cliCommand += ` -mp ${miscPackages.join(" ")}`;
    }

    // // Include example, dynamically based on form value
    // cliCommand += ` -ie ${values.includeExample ? "yes" : "no"}`;

    return cliCommand;
  };

  const buildCreateNextAppCommand = (values: z.infer<typeof formSchema>) => {
    let cliCommand = `npx create-next-app ${values.title}`;

    // TypeScript
    if (values.typescript === "Yes") {
      cliCommand += " --typescript";
    }

    // Tailwind CSS
    if (values.tailwind === "Yes") {
      cliCommand += " --tailwind";
    }

    // ESLint
    if (values.eslint === "Yes") {
      cliCommand += " --eslint";
    }

    // App Router
    if (values.appRouter === "Yes") {
      cliCommand += " --app";
    }

    // src directory
    if (values.srcDirectory === "Yes") {
      cliCommand += " --src-dir";
    }

    // Preferred Package Manager
    if (values.preferredPackageManager) {
      const packageManager = values.preferredPackageManager.toLowerCase();
      if (packageManager === "npm") {
        cliCommand += " --use-npm";
      } else if (packageManager === "pnpm") {
        cliCommand += " --use-pnpm";
      } else if (packageManager === "yarn") {
        cliCommand += " --use-yarn";
      } else if (packageManager === "bun") {
        cliCommand += " --use-bun";
      }
    }

    return cliCommand;
  };

  return (
    <Form {...form}>
      {showPopup && (
        <Dialog defaultOpen>
          {/* <DialogTrigger asChild>
        <Button
          variant="outline"
          className="w-full bg-muted text-muted-foreground dark:bg-secondary dark:text-secondary-foreground"
        >
          Copy Command
        </Button>
      </DialogTrigger> */}
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Copy This Command</DialogTitle>
              <DialogDescription>
                Run this command in your terminal to get started.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="rounded-md bg-muted p-4 dark:bg-card dark:text-card-foreground">
                <code className="font-mono">{command}</code>
              </div>
              <div className="flex justify-end">
                <Button
                  onClick={handleCopy}
                  className={`w-full px-4 py-2 text-sm flex items-center gap-2 ${
                    copied
                      ? "bg-green-500 text-green-50 hover:bg-green-600"
                      : "bg-muted hover:bg-accent hover:text-accent-foreground dark:bg-secondary dark:text-secondary-foreground"
                  }`}
                >
                  {copied ? (
                    <>
                      <CheckIcon className="h-4 w-4" />
                      Copied
                    </>
                  ) : (
                    <>
                      <ClipboardIcon className="h-4 w-4" />
                      Copy Command
                    </>
                  )}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                What is your project&apos;s title? (No spaces)
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {questions.map((q) => (
          <FormField
            key={q.formFieldName}
            control={form.control}
            name={q.formFieldName as FormFieldNames}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{q.formLabel}</FormLabel>
                <FormControl>
                  <Select
                    value={field.value}
                    onValueChange={(value) =>
                      form.setValue(q.formFieldName as FormFieldNames, value)
                    }
                  >
                    <SelectTrigger>
                      <span>{field.value}</span>
                    </SelectTrigger>
                    <SelectContent>
                      {q.options.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <Button className={buttonVariants()} type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}

function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function ClipboardIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  );
}
