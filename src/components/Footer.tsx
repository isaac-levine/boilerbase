import BoilerbaseIcon from "./BoilerbaseIcon";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-slate-950 p-2 md:py-10 w-full text-white ">
      <div className="container max-w-7xl flex flex-col items-center justify-between gap-6 md:flex-row">
        <Link className="flex items-center gap-2" href="#">
          <BoilerbaseIcon />
          <span className="text-lg font-semibold">Boilerbase</span>
        </Link>
        <nav className="flex flex-wrap items-center justify-center gap-4 text-sm">
          <Link className="hover:underline" href="/">
            Home
          </Link>
          <Link className="hover:underline" href="#">
            About
          </Link>
          <Link className="hover:underline" href="#">
            Contact
          </Link>
          <Link className="hover:underline" href="#">
            Privacy Policy
          </Link>
        </nav>
        {/* <p className="text-sm text-gray-500 dark:text-gray-400">
          © 2024 Acme Inc. All rights reserved.
        </p> */}
      </div>
    </footer>
  );
};
