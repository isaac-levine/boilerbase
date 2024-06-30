"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import BoilerplateForm from "./BoilerplateForm";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/options";
import { useSession } from "next-auth/react";

export default function Component() {
  const session = useSession();
  const user = session?.data?.user;
  // console.log(session);
  // console.log(user);

  return (
    <MaxWidthWrapper>
      <div className="flex flex-col text-center items-center gap-8 mt-8 mb-12">
        {user?.receivedBoilerplate ? (
          <>
            <h1 className="text-4xl font-extrabold">
              Our records show that you already received your boilerplate.
            </h1>
            <h3>
              If you think this is a mistake, let us know at{" "}
              <b>help@boilerbase.io</b>.
            </h3>
          </>
        ) : (
          <>
            <h1 className="text-4xl font-extrabold">
              Get your personalized boilerplate in minutes.
            </h1>
            <BoilerplateForm />
          </>
        )}
      </div>
    </MaxWidthWrapper>
  );
}
