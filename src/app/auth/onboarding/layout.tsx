export default async function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="grid place-items-center min-h-screen">
        <div className="max-w-md w-full p-8 py-8 border-border border rounded bg-slate-50 h-full flex justify-center items-center">
          {children}
        </div>
      </div>
    </div>
  );
}
