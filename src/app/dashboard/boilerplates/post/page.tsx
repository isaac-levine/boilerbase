// page.tsx (Server Component)
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { Metadata } from "next";
import AuthCheck from "./AuthCheck";

export const metadata: Metadata = {
  title: `Post • Boilerbase`,
};

export default function Page() {
  return (
    <MaxWidthWrapper>
      <AuthCheck />
    </MaxWidthWrapper>
  );
}
