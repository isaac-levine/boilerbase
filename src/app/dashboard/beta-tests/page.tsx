import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import BetaTestsTable from "../BetaTestsTable";

export default function Page() {
  return (
    <MaxWidthWrapper>
      <h1 className="text-xl text-center font-bold mb-4">Beta Tests</h1>
      <BetaTestsTable />
    </MaxWidthWrapper>
  );
}
