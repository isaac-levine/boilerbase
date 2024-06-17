"use client";
import React, { useEffect, useState } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import { QualityPromise } from "@/components/home/QualityPromise";
import { PulseLoader } from "react-spinners";

import { Input } from "@/components/ui/input";
import { StarIcon } from "lucide-react";

const getListings = async (limit: number) => {
  const response = await fetch(`/api/listings?limit=${limit}`, {
    method: "GET",
  });
  const data = await response.json();
  return data;
};

export default function Home() {
  const [listings, setListings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  const handleSearch = async (event: any) => {
    event.preventDefault();
    // if (query.trim() === "") return;

    try {
      const response = await fetch(
        `/api/listings/search?q=${encodeURIComponent(query)}`
      );
      if (response.ok) {
        const data = await response.json();
        setListings(data);
      } else {
        console.error("Search request failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const data = await getListings(8);
        setListings(data);
      } catch (error) {
        console.error("Error fetching listings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, []);

  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            The most transparent source for web app{" "}
            <span className="text-primary">boilerplates</span>.
          </h1>
          <p className="hidden sm:block mt-6 text-lg max-w-prose text-muted-foreground">
            Discover vetted, production-ready boilerplates to kickstart your
            SaaS projects. Our mission is to provide a transparent marketplace
            that empowers developers with the best tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link
              href="/dashboard/feature-marketplace"
              className={`${buttonVariants()}`}
            >
              Browse Trending
            </Link>
            <QualityPromise />
          </div>
        </div>
      </MaxWidthWrapper>

      <section className="border-t border-foreground/10 bg-foreground/10">
        <MaxWidthWrapper className="py-16">
          {/* <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-\rink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<perk.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>

                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-foreground">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div> */}
          {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"> */}
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold sm:text-4xl">
                  Ensuring Quality and Transparency
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 hidden sm:block">
                  Our team of experienced developers and designers carefully
                  review each boilerplate submission to ensure it meets our
                  rigorous standards for quality, security, and usability.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1 text-center">
                <h3 className="text-lg font-bold ">Technical Review</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Our team of experienced developers thoroughly review the code,
                  architecture, and overall technical implementation of each
                  boilerplate.
                </p>
              </div>
              <div className="grid gap-1 text-center">
                <h3 className="text-lg font-bold">Community Reviews</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We have a robust customer review system in place, allowing
                  users to provide feedback and ratings on each boilerplate.
                </p>
              </div>
              <div className="grid gap-1 text-center">
                <h3 className="text-lg font-bold">Security and Compliance</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We thoroughly test each boilerplate for security
                  vulnerabilities and ensure it adheres to industry best
                  practices and regulations.
                </p>
              </div>
            </div>
          </div>
          {/* </section> */}
        </MaxWidthWrapper>
      </section>

      <section className="border-t mb-16">
        <MaxWidthWrapper className="py-16">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Start Exploring
                </h2>
                {/* <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our marketplace offers a wide range of high-quality, vetted
                  boilerplates across various categories. Use our search and
                  filtering tools to find the perfect solution for your needs.
                </p> */}
              </div>
            </div>
            <form
              onSubmit={handleSearch}
              className="mx-auto flex w-full max-w-md items-center justify-center space-x-2"
            >
              <Input
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
                placeholder="Search boilerplates..."
                type="search"
              />
              <Button type="submit">Search</Button>
            </form>
            {loading ? (
              <div className="flex justify-center items-center">
                <PulseLoader loading={loading} size={10} color="#2563EB" />
              </div>
            ) : (
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {listings.map((listing) => (
                  <Link
                    href={`/listings/${listing.id}`}
                    key={listing.id}
                    className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer flex flex-col justify-between p-4 bg-background dark:bg-foreground/5 backdrop-blur-md flex-grow-0 border-t border-foreground/10"
                  >
                    <div className="flex flex-col justify-between flex-grow p-4">
                      <h3 className="text-lg font-semibold mb-2">
                        {listing.title}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 mb-4">
                        {listing.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-primary font-semibold">
                          ${listing.price}
                        </span>
                        {/* <Button
                      className="ransition-transform transform hover:scale-105 cursor-pointer"
                      size="sm"
                    >
                      Buy Now
                    </Button> */}
                        {/* HEART ICON SHOULD GO HERE */}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
