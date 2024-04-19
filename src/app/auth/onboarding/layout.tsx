
export default async function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="grid place-items-center min-h-screen py-8">
        <div className="max-w-md w-full p-8 border-border border rounded">{children}</div>
      </div>
    </div>
  );
}
