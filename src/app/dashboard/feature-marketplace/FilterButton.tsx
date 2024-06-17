"use client";

import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function FilterButton() {
  const [selectedFilter, setSelectedFilter] = useState<string>("popular");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="lg"
          variant="outline"
          className=" bg-gray-100 dark:bg-gray-800"
        >
          <FilterIcon className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={8}>
        <DropdownMenuLabel>Sort by</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={selectedFilter}>
          <DropdownMenuRadioItem
            value="popular"
            onClick={() => setSelectedFilter("popular")}
          >
            Popular
          </DropdownMenuRadioItem>

          <DropdownMenuRadioItem
            value="price-asc"
            onClick={() => setSelectedFilter("price-asc")}
          >
            Price: Low to High
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="price-desc"
            onClick={() => setSelectedFilter("price-desc")}
          >
            Price: High to Low
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            value="newest"
            onClick={() => setSelectedFilter("newest")}
          >
            Newest
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function FilterIcon(props: any) {
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
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}
