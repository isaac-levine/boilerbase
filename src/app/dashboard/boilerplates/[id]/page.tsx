"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Listing } from "@prisma/client";
import { format } from "date-fns";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Component() {
  const pathname = usePathname();
  const id = pathname.split("/").pop(); // Extract the listing ID from the URL
  const [listing, setListing] = useState<Listing | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const response = await fetch(`/api/listings/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch listing data");
        }
        const data = await response.json();
        setListing(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchListing();
    }
  }, [id]);

  if (loading) {
    return (
      <MaxWidthWrapper>
        <div className="flex justify-center items-center min-h-screen">
          <Skeleton className="w-full max-w-2xl h-96" />
        </div>
      </MaxWidthWrapper>
    );
  }

  if (error) {
    return (
      <MaxWidthWrapper>
        <div className="flex justify-center items-center min-h-screen">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Error</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{error}</CardDescription>
            </CardContent>
          </Card>
        </div>
      </MaxWidthWrapper>
    );
  }

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
          <BreadcrumbItem>
            <BreadcrumbPage>{listing?.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <MaxWidthWrapper>
        <title>{`${listing?.title} • BoilerBase`}</title>

        <div className="py-4 sm:py-10">
          <div className="max-w-2xl mx-auto shadow-md">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl sm:text-4xl font-bold mb-4">
                  {listing?.title}
                </CardTitle>
                {/* <CardDescription className="text-md sm:text-lg font-semibold mb-4">
                Price: ${listing?.price.toFixed(2)}
              </CardDescription> */}
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
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Created:{" "}
                  <span>{format(listing?.createdAt || "", "PPP")}</span>
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Last Updated:{" "}
                  <span>{format(listing?.updatedAt || "", "PPP")}</span>
                </p>

                <div className="mb-4 mt-4">
                  {listing?.gitHubLink && (
                    <>
                      <h2 className="text-2xl font-semibold mb-2">
                        GitHub Link:
                      </h2>
                      <a
                        href={listing?.gitHubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary"
                      >
                        {listing?.gitHubLink}
                      </a>
                    </>
                  )}
                </div>

                <div className="mb-4 mt-4">
                  {listing?.previewLink && (
                    <>
                      <h2 className="text-2xl font-semibold mb-2">
                        Preview Link:
                      </h2>
                      <a
                        href={listing?.previewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary"
                      >
                        {listing?.previewLink}
                      </a>
                    </>
                  )}
                </div>

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
                {/* <div className="mb-4">
                <h2 className="text-2xl font-semibold mb-2">Reviews:</h2>
                {listing?.reviews.length || 0 > 0 ? (
                  <ul className="list-disc pl-5">
                    {listing?.reviews.map((review, index) => (
                      <li key={index} className="mb-2">
                        {review}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No reviews yet.</p>
                )}
              </div> */}
              </CardContent>
            </Card>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
