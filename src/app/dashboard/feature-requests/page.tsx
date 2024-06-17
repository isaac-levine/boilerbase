import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import FeatureRequestsTable from "../FeatureRequestsTable";

export default function Page() {
  return (
    <MaxWidthWrapper>
      <h1 className="text-xl text-center font-bold mb-4">Feature Requests</h1>
      <FeatureRequestsTable />
    </MaxWidthWrapper>
  );
}
