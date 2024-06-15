import Link from "next/link";
import BoilerbaseIcon from "./BoilerbaseIcon";
import MaxWidthWrapper from "./MaxWidthWrapper";

export const Footer = () => {
  return (
    <footer className="bg-background dark:bg-foreground/5 backdrop-blur-md flex-grow-0 border-t border-foreground/10">
      <MaxWidthWrapper>
        <div className="container max-w-7xl flex justify-between gap-2 md:gap-6 flex-row items-start py-8">
          <div className="flex items-center justify-center m-auto ml-0 gap-2 ">
            <Link href="#" passHref>
              <div className="flex items-center gap-2 cursor-pointer">
                <BoilerbaseIcon size={35} />
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
            <Link href="/about" passHref>
              <span className="hover:underline cursor-pointer">About</span>
            </Link>
            <Link href="mailto:help@boilerbase.io" passHref>
              <span className="hover:underline cursor-pointer">Contact</span>
            </Link>
            <Link href="https://boilerbase.featurebase.app" passHref>
              <span className="hover:underline cursor-pointer">Feedback</span>
            </Link>
            <Link href="/about/privacy" passHref>
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
