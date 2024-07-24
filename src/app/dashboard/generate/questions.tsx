export type FormFieldNames =
  | "title"
  | "typescript"
  | "eslint"
  | "tailwind"
  | "srcDirectory"
  | "appRouter"
  | "customImportAlias"
  | "preferredPackageManager"
  | "componentLibrary"
  | "orm"
  | "database"
  | "Resend";

export const questions = [
  {
    formFieldName: "typescript",
    formLabel: "Would you like to use TypeScript?",
    options: ["Yes", "No"],
  },
  {
    formFieldName: "eslint",
    formLabel: "Would you like to use ESLint?",
    options: ["Yes", "No"],
  },
  {
    formFieldName: "tailwind",
    formLabel: "Would you like to use Tailwind CSS?",
    options: ["Yes", "No"],
  },
  {
    formFieldName: "srcDirectory",
    formLabel: "Would you like to use src directory?",
    options: ["Yes", "No"],
  },
  {
    formFieldName: "appRouter",
    formLabel: "Would you like to use App Router?",
    options: ["Yes", "No"],
  },
  {
    formFieldName: "customImportAlias",
    formLabel: "Would you like to use a custom import alias? (Other than @/*?)",
    options: ["Yes", "No"],
  },
  {
    formFieldName: "preferredPackageManager",
    formLabel: "Which package manager would you like to use?",
    options: ["NPM", "Yarn", "PMPM", "Bun"],
  },
];
