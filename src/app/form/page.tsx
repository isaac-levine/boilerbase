import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import BoilerplateForm from "./BoilerplateForm";

export default function Component() {
  return (
    <MaxWidthWrapper>
      {/* We should make sure only users who havent receieved a boilerplate can fill this out */}
      <div className="flex flex-col text-center items-center gap-8 mt-8 mb-12">
        <h1 className="text-4xl font-extrabold">
          Get your personalized boilerplate in minutes.
        </h1>
        <BoilerplateForm />
      </div>
    </MaxWidthWrapper>
  );
}
