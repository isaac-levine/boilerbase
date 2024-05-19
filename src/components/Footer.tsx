import Link from "next/link";
import BoilerbaseIcon from "./BoilerbaseIcon";
import MaxWidthWrapper from "./MaxWidthWrapper";

export const Footer = () => {
  return (
    <footer className="bg-white flex-grow-0 border-t border-gray-200">
      <MaxWidthWrapper>
        <div className="container max-w-7xl flex justify-between gap-2 md:gap-6 flex-row items-start py-8">
          <div className="flex items-center justify-center m-auto ml-0 gap-2 ">
            <Link href="#" passHref>
              <div className="flex items-center gap-2 cursor-pointer">
                <BoilerbaseIcon />
                <span className="text-lg font-semibold hidden sm:block">
                  Boilerbase
                </span>
              </div>
            </Link>
          </div>
          <nav className="flex flex-row items-center justify-center gap-4 text-xs md:text-sm m-auto mr-0 tracking-tight">
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
              <span className="hover:underline cursor-pointer flex flex-row gap-1">
                Privacy Policy
              </span>
            </Link>
          </nav>
          {/* <p className="text-sm text-gray-500 dark:text-gray-400">
          © 2024 Acme Inc. All rights reserved.
        </p> */}
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};
