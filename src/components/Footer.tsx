import Link from "next/link";
import BoilerbaseIcon from "./BoilerbaseIcon";

export const Footer = () => {
  return (
    <footer className="bg-slate-950 p-2 md:py-10 w-full text-white hidden md:flex">
      <div className="container max-w-7xl flex justify-between gap-2 md:gap-6 flex-row items-start">
        <div className="flex items-center gap-2 mb-0">
          <Link href="#" passHref>
            <div className="flex items-center gap-2 cursor-pointer">
              <BoilerbaseIcon />
              <span className="text-lg font-semibold">Boilerbase</span>
            </div>
          </Link>
        </div>
        <nav className="flex flex-row items-center justify-center gap-4 text-xs md:text-sm">
          <Link href="/" passHref>
            <span className="hover:underline cursor-pointer">Home</span>
          </Link>
          <Link href="#" passHref>
            <span className="hover:underline cursor-pointer">About</span>
          </Link>
          <Link href="#" passHref>
            <span className="hover:underline cursor-pointer">Contact</span>
          </Link>
          <Link href="#" passHref>
            <span className="hover:underline cursor-pointer">
              Privacy Policy
            </span>
          </Link>
        </nav>
        {/* <p className="text-sm text-gray-500 dark:text-gray-400">
          © 2024 Acme Inc. All rights reserved.
        </p> */}
      </div>
    </footer>
  );
};
