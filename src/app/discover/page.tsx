"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import "./styles.css";
import { Button } from "@/components/ui/button";
import FilterButton from "./FilterButton";

const getListings = async (limit: number) => {
  const response = await fetch(`/api/listing?limit=${limit}`, {
    method: "GET",
  });
  const data = await response.json();
  return data;
};

export default function Component() {
  const [listings, setListings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

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
    <div className="container mx-auto px-4 py-8 md:py-12 my-12">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-black">
          Discover the latest templates and boilerplates
        </h1>
        <div className="flex items-center space-x-4">
          <div className="relative w-full max-w-md">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
            <Input
              className="pl-10 pr-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Search boilerplates..."
              type="text"
            />
          </div>
          <FilterButton />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading ? (
          <p>Loading...</p>
        ) : (
          listings.map((listing) => (
            <div
              key={listing.id}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden"
            >
              <img
                alt="Boilerplate Thumbnail"
                className="w-full h-48 object-cover"
                height={300}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "400/300",
                  objectFit: "cover",
                }}
                width={400}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{listing.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  {listing.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-semibold">
                    ${listing.price}
                  </span>
                  <Button size="sm">Buy Now</Button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
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
