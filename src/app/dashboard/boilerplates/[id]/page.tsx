import { Metadata } from "next";
import { Breadcrumb, BreadcrumbList } from "@/components/ui/breadcrumb";
import ListingDetails from "./ListingDetails";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const response = await fetch(
    `${process.env.SITE_URL}/api/listings/${params.id}`
  );
  const listing = await response.json();
  return { title: listing.title };
}

export default function Page() {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <ListingDetails />
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
}
