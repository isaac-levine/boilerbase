// page.tsx (Server Component)
import { Metadata } from "next";
import ListingsComponent from "./ListingsComponent";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function Page() {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard/boilerplates">
              All Boilerplates
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
        </BreadcrumbList>
      </Breadcrumb>

      <MaxWidthWrapper>
        <ListingsComponent />
      </MaxWidthWrapper>
    </>
  );
}
