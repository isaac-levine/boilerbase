import Header from "@/components/Header";
import { getSignedInUser } from "@/lib/auth/helper";
import Image from "next/image";

export default async function Home() {
  const session = await getSignedInUser();

  return (
    <>
      <Header session={session}></Header>
    </>
  );
}
