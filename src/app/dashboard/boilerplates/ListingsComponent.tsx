// ListingsComponent.tsx (Client Component)
"use client";

import { useState, useEffect } from "react";
import { Listing } from "@prisma/client";
import { Input } from "@/components/ui/input";
import { PulseLoader } from "react-spinners";
import BoilerplateCard from "@/components/BoilerplateCard";
import { SearchIcon } from "@/components/ui/SearchIcon";

const getListings = async (limit: number) => {
  const response = await fetch(`/api/listings?limit=${limit}`);
  return response.json();
};

export default function ListingsComponent() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  const handleSearch = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        `/api/listings/search?q=${encodeURIComponent(query)}`
      );
      if (response.ok) {
        const data = await response.json();
        setListings(data);
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
    <div className="my-12">
      <div className="flex flex-col lg:flex-row items-center justify-between mb-8 gap-4">
        <h1 className="text-2xl font-bold text-[--background] lg:block hidden dark:text-[--foreground]">
          Discover pre-built boilerplates from the community.
        </h1>
        <div className="flex items-center w-full lg:w-auto">
          <div className="relative w-full lg:max-w-md">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
            <form onSubmit={handleSearch} className="w-full">
              <Input
                className="pl-10 pr-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-full"
                placeholder="Search boilerplates..."
                onChange={(e) => setQuery(e.target.value)}
                type="text"
              />
            </form>
          </div>
        </div>
      </div>
      {loading ? (
        <div className="flex justify-center items-center">
          <PulseLoader loading={loading} size={10} color="#2563EB" />
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {listings.map((listing) => (
            <BoilerplateCard key={listing.id} listing={listing} />
          ))}
        </div>
      )}
    </div>
  );
}
