"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import { Listing } from "@prisma/client";
import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import BoilerplateCard from "@/components/BoilerplateCard";
import { SearchIcon } from "@/components/SearchIcon";

const getListings = async (limit: number) => {
  const response = await fetch(`/api/listings?limit=${limit}`, {
    method: "GET",
  });
  const data = await response.json();
  return data;
};

export default function Component() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  const handleSearch = async (event: any) => {
    event.preventDefault();
    setLoading(true);
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
    setLoading(false);
  };

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const data = await getListings(10);
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
        <title>Browse Boilerplates • {process.env.SITE_TITLE}</title>
        <div className="my-12">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold text-[--background] sm:block hidden dark:text-[--foreground]">
              Discover pre-built boilerplates from the community.
            </h1>
            <div className="flex items-center space-x-4">
              <div className="relative w-full max-w-md">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
                <form onSubmit={handleSearch}>
                  <Input
                    className="pl-10 pr-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Search boilerplates..."
                    onChange={(e) => setQuery(e.target.value)}
                    type="text"
                  />
                </form>
              </div>
              {/* <FilterButton /> */}
            </div>
          </div>
          {loading ? (
            <div className="flex justify-center items-center">
              <PulseLoader loading={loading} size={10} color="#2563EB" />
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {listings.map((listing) => (
                <BoilerplateCard key={listing.id} listing={listing} />
              ))}
            </div>
          )}
        </div>
      </MaxWidthWrapper>
    </>
  );
}
