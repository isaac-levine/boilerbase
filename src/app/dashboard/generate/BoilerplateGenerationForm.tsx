"use client";
import { Button, buttonVariants } from "@/components/ui/button";
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
import { sendMagicLinkEmail } from "@/lib/email/mailer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
  const session = useSession();
  const [databaseType, setDatabaseType] = useState("Postgres");
  const [authenticationPackage, setAuthenticationPackage] =
    useState("NextAuth");
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
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form submitted!");
    if (!session?.data?.user?.id) {
      console.error("Something wrong with session or user object");
      return;
    }
    // Create the CLI string to generate the boilerplate
    // Use the buildCommand function to generate the CLI command
    const kirimaseCommand = buildKirimaseCommand(values);
    const createNextAppCommand = buildCreateNextAppCommand(values);
    const fullCommand = `${createNextAppCommand} && cd ${values.title} && ${kirimaseCommand}`;
    // console.log(fullCommand);

    // sendGenerationEmailToIsaac(
    //   session?.data?.user?.username || "",
    //   fullCommand
    // );
    sendMagicLinkEmail("isaacmlevine4@gmail.com", "testLink");
  }

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

    // Custom Import Alias
    // Note: The form schema indicates presence of a customImportAlias field but does not specify its usage in the CLI command.
    // Assuming "No" means no custom alias is set, thus no corresponding CLI option is added.

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
        <FormField
          control={form.control}
          name="typescript"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Would you like to use TypeScript?</FormLabel>
              <FormControl>
                <Select
                  value={field.value}
                  onValueChange={(value) => form.setValue("typescript", value)}
                >
                  <SelectTrigger>
                    <span>{field.value}</span>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Yes">Yes</SelectItem>
                    <SelectItem value="No">No</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="eslint"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Would you like to use ESLint?</FormLabel>
              <FormControl>
                <Select
                  value={field.value}
                  onValueChange={(value) => form.setValue("eslint", value)}
                >
                  <SelectTrigger>
                    <span>{field.value}</span>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Yes">Yes</SelectItem>
                    <SelectItem value="No">No</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tailwind"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Would you like to use Tailwind CSS?</FormLabel>
              <FormControl>
                <Select
                  value={field.value}
                  onValueChange={(value) => form.setValue("tailwind", value)}
                >
                  <SelectTrigger>
                    <span>{field.value}</span>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Yes">Yes</SelectItem>
                    <SelectItem value="No">No</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="srcDirectory"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Would you like to use <b>src/</b> directory?
              </FormLabel>
              <FormControl>
                <Select
                  value={field.value}
                  onValueChange={(value) =>
                    form.setValue("srcDirectory", value)
                  }
                >
                  <SelectTrigger>
                    <span>{field.value}</span>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Yes">Yes</SelectItem>
                    <SelectItem value="No">No</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="appRouter"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Would you like to use App Router?</FormLabel>
              <FormControl>
                <Select
                  value={field.value}
                  onValueChange={(value) => form.setValue("appRouter", value)}
                >
                  <SelectTrigger>
                    <span>{field.value}</span>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Yes">Yes</SelectItem>
                    <SelectItem value="No">No</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="customImportAlias"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Would you like to use a custom import alias? (Other than @/*?)
              </FormLabel>
              <FormControl>
                <Select
                  value={field.value}
                  onValueChange={(value) =>
                    form.setValue("customImportAlias", value)
                  }
                >
                  <SelectTrigger>
                    <span>{field.value}</span>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Yes">Yes</SelectItem>
                    <SelectItem value="No">No</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="preferredPackageManager"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Please pick your preferred package manager</FormLabel>
              <FormControl>
                <Select
                  value={field.value}
                  onValueChange={(value) =>
                    form.setValue("preferredPackageManager", value)
                  }
                >
                  <SelectTrigger>
                    <span>{field.value}</span>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="NPM">NPM</SelectItem>
                    <SelectItem value="Yarn">Yarn</SelectItem>
                    <SelectItem value="PNPM">PNPM</SelectItem>
                    <SelectItem value="Bun">Bun</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="componentLibrary"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select a component library to use</FormLabel>
              <FormControl>
                <Select
                  value={field.value}
                  onValueChange={(value) =>
                    form.setValue("componentLibrary", value)
                  }
                >
                  <SelectTrigger>
                    <span>{field.value}</span>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Shadcn UI (with next-themes)">
                      ShadCN UI (with next-themes)
                    </SelectItem>
                    <SelectItem value="None">None</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="orm"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select an ORM to use</FormLabel>
              <FormControl>
                <Select
                  value={field.value}
                  onValueChange={(value) => form.setValue("orm", value)}
                >
                  <SelectTrigger>
                    <span>{field.value}</span>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Drizzle">Drizzle</SelectItem>
                    <SelectItem value="Prisma">Prisma</SelectItem>
                    <SelectItem value="None">None</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="database"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select your database type</FormLabel>
              <FormControl>
                <Select
                  value={field.value}
                  onValueChange={(value) => {
                    form.setValue("database", value);
                    setDatabaseType(value);
                    form.setValue("databaseProvider", "");
                  }}
                >
                  <SelectTrigger>
                    <span>{field.value}</span>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Postgres">Postgres</SelectItem>
                    <SelectItem value="MySQL">MySQL</SelectItem>
                    <SelectItem value="SQLite">SQLite</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="databaseProvider"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select your database provider</FormLabel>
              <FormControl>
                <Select
                  value={field.value}
                  onValueChange={(value) =>
                    form.setValue("databaseProvider", value)
                  }
                >
                  <SelectTrigger>
                    <span>{field.value}</span>
                  </SelectTrigger>
                  <SelectContent>
                    {databaseType === "Postgres" && (
                      <>
                        <SelectItem value="Postgres.js">Postgres.js</SelectItem>
                        <SelectItem value="node-postgres">
                          node-postgres
                        </SelectItem>
                        <SelectItem value="Neon">Neon</SelectItem>
                        <SelectItem value="Vercel Postgres">
                          Vercel Postgres
                        </SelectItem>
                        <SelectItem value="Supabase">Supabase</SelectItem>
                      </>
                    )}
                    {databaseType === "MySQL" && (
                      <>
                        <SelectItem value="PlanetScale">PlanetScale</SelectItem>
                        <SelectItem value="MySQL 2">MySQL 2</SelectItem>
                      </>
                    )}
                    {databaseType === "SQLite" && (
                      <>
                        <SelectItem value="better-sqlite3">
                          better-sqlite3
                        </SelectItem>
                        <SelectItem value="turso">turso</SelectItem>
                      </>
                    )}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="authenticationPackage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select an authentication package to use</FormLabel>
              <FormControl>
                <Select
                  value={field.value}
                  onValueChange={(value) => {
                    form.setValue("authenticationPackage", value);
                    setAuthenticationPackage(value);
                  }}
                >
                  <SelectTrigger>
                    <span>{field.value}</span>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="NextAuth">NextAuth</SelectItem>
                    <SelectItem value="Clerk">Clerk</SelectItem>
                    <SelectItem value="Lucia">Lucia</SelectItem>
                    <SelectItem value="Kinde">Kinde</SelectItem>
                    <SelectItem value="None">None</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {authenticationPackage === "NextAuth" && (
          <FormField
            control={form.control}
            name="authProvider"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select an authentication provider to use</FormLabel>
                <FormControl>
                  <Select
                    value={field.value}
                    onValueChange={(value) => {
                      form.setValue("authProvider", value);
                    }}
                  >
                    <SelectTrigger>
                      <span>{field.value}</span>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Discord">Discord</SelectItem>
                      <SelectItem value="GitHub">GitHub</SelectItem>
                      <SelectItem value="Google">Google</SelectItem>
                      <SelectItem value="Apple">Apple</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <FormField
          control={form.control}
          name="tRPC"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Do you want to add tRPC?</FormLabel>
              <FormControl>
                <Select
                  value={field.value}
                  onValueChange={(value) => {
                    form.setValue("tRPC", value);
                  }}
                >
                  <SelectTrigger>
                    <span>{field.value}</span>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Yes">Yes</SelectItem>
                    <SelectItem value="No">No</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="Stripe"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Do you want to add Stripe?</FormLabel>
              <FormControl>
                <Select
                  value={field.value}
                  onValueChange={(value) => {
                    form.setValue("Stripe", value);
                  }}
                >
                  <SelectTrigger>
                    <span>{field.value}</span>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Yes">Yes</SelectItem>
                    <SelectItem value="No">No</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="Resend"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Do you want to add Resend?</FormLabel>
              <FormControl>
                <Select
                  value={field.value}
                  onValueChange={(value) => {
                    form.setValue("Resend", value);
                  }}
                >
                  <SelectTrigger>
                    <span>{field.value}</span>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Yes">Yes</SelectItem>
                    <SelectItem value="No">No</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
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
