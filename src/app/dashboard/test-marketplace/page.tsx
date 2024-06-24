"use client";

import { useState, useEffect, Suspense, FormEventHandler } from "react";
import { Input } from "@/components/ui/input";
import "./styles.css";
import { Button } from "@/components/ui/button";
import FilterButton from "./FilterButton";
import { PulseLoader } from "react-spinners";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";

const getListings = async (limit: number) => {
  const response = await fetch(`/api/listings?limit=${limit}`, {
    method: "GET",
  });
  const data = await response.json();
  return data;
};

export default function Component() {
  const [listings, setListings] = useState<any[]>([]);
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
    <MaxWidthWrapper>
      <title>Feature Marketplace • BoilerBase</title>
      <div className="my-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-[--background] sm:block hidden dark:text-[--foreground]">
            Discover features to be completed for money
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
            <FilterButton />
          </div>
        </div>
        {loading ? (
          <div className="flex justify-center items-center">
            <PulseLoader loading={loading} size={10} color="#2563EB" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
  );
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
