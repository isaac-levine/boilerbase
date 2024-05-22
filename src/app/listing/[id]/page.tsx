"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { usePathname } from "next/navigation";

export default function Component() {
  const pathname = usePathname();
  const id = pathname.split("/").pop(); // questionable

  return (
    <MaxWidthWrapper>
      <div className="flex justify-center items-center min-h-screen">
        <h1 className="font-bold text-3xl">
          Listing Detail Page is Coming Soon...
        </h1>
      </div>
    </MaxWidthWrapper>
  );
}
