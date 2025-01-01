"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Listing } from "@prisma/client";
import { format } from "date-fns";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function ListingDetails() {
  const pathname = usePathname();
  const id = pathname.split("/").pop();
  const [listing, setListing] = useState<Listing | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchListing = async () => {
      if (!id) return;
      try {
        const response = await fetch(`/api/listings/${id}`);
        if (!response.ok) throw new Error("Failed to fetch listing data");
        const data = await response.json();
        setListing(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchListing();
  }, [id]);

  if (loading) {
    return <Skeleton className="w-full max-w-2xl h-96" />;
  }

  if (error) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Error</CardTitle>
          <CardDescription>{error}</CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <>
      <BreadcrumbItem>
        <BreadcrumbLink href="/dashboard/boilerplates">
          All Boilerplates
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>{listing?.title}</BreadcrumbPage>
      </BreadcrumbItem>

      <MaxWidthWrapper>
        <div className="py-4 sm:py-10">
          <div className="max-w-2xl mx-auto shadow-md">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl sm:text-4xl font-bold mb-4">
                  {listing?.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {listing?.imageUrl && (
                  <Image
                    src={listing.imageUrl}
                    alt={listing.title}
                    width={500}
                    height={300}
                    className="rounded mb-4"
                  />
                )}
                <p className="text-md sm:text-xl mb-4">
                  {listing?.description}
                </p>

                <div className="space-y-2">
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Created:{" "}
                    <span>{format(listing?.createdAt || "", "PPP")}</span>
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Last Updated:{" "}
                    <span>{format(listing?.updatedAt || "", "PPP")}</span>
                  </p>
                </div>

                {listing?.gitHubLink && (
                  <div className="mb-4 mt-4">
                    <h2 className="text-2xl font-semibold mb-2">
                      GitHub Link:
                    </h2>
                    <a
                      href={listing.gitHubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                    >
                      {listing.gitHubLink}
                    </a>
                  </div>
                )}

                {listing?.previewLink && (
                  <div className="mb-4 mt-4">
                    <h2 className="text-2xl font-semibold mb-2">
                      Preview Link:
                    </h2>
                    <a
                      href={listing.previewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                    >
                      {listing.previewLink}
                    </a>
                  </div>
                )}

                <div className="mb-4 mt-4">
                  <h2 className="text-2xl font-semibold mb-2">Tags:</h2>
                  {listing?.tags.length || 0 > 0 ? (
                    <div className="flex flex-wrap">
                      {listing?.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="border-foreground/20 border-[1px] dark:bg-foreground/30 rounded-full px-3 py-1 text-sm font-semibold text-foreground mr-2 mb-2"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p>No tags yet.</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
