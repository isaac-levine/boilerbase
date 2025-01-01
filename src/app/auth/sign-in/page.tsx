// page.tsx (Server Component)
import { Metadata } from "next";
import SignInForm from "./SignInForm";

export const metadata: Metadata = {
  title: "Sign In",
};

export default function SignInPage() {
  return <SignInForm />;
}
