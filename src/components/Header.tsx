import Image from "next/image";
import Link from "next/link";

export default function Header({ session }: { session: any }) {
  console.log(session);
  return (
    <>
      <div className="w-full h-auto p-4 bg-slate-300 flex flex-row items-center justify-between gap-4">
        <Link
          href={"/"}
          className="flex flex-row gap-2 items-center justify-between"
        >
          <Image
            src={
              "https://imagedelivery.net/PWe9rlYiKWdV4Gf-JnsgCw/faf4d104-cb3a-4669-e1f2-4b58f286fa00/2k"
            }
            alt="Logo"
            width={32}
            height={32}
            className="rounded-sm"
          ></Image>

          <span>
            <h1 className="text-lg font-extrabold tracking-tight">
              BoilerBase
            </h1>
          </span>
        </Link>

        <div className="flex flex-row gap-4 justify-end">
          <Link href={"/auth/sign-in"} className="text-white">
            Sign In
          </Link>
          <Link href={"/auth/sign-up"} className="text-white">
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
}
