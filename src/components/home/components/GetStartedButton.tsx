"use client";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { useSession } from "next-auth/react";

interface GetStartedButtonProps {
  checkoutLink: string;
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({
  checkoutLink,
}) => {
  const session = useSession();
  const user = session?.data?.user;
  return (
    <Link
      href={user ? checkoutLink : "/auth/sign-in"}
      className={`${buttonVariants({
        variant: "default",
      })} rounded-lg shadow-lg border-t p-8 transition-transform duration-300 hover:scale-105`}
    >
      Get Started
    </Link>
  );
};

export default GetStartedButton;
