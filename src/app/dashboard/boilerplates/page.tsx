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
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";

export const metadata: Metadata = {
  title: `Dashboard  • Boilerbase`,
};

export default function Page() {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard/boilerplates">
              Boilerplates
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
