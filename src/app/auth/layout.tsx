import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-screen">
      <div className="">
        {/* <Link href="/" className="fixed top-3 left-5">
          <Button
            className="rounded-full bg-slate-500 text-white"
            variant={"default"}
            size="icon"
          >
            <ChevronLeft size={16} />
          </Button>
        </Link> */}
        <div className="">{children}</div>
      </div>
    </div>
  );
}
