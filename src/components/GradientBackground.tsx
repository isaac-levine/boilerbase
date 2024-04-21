export default function GradientBackground({
  dark = true,
}: {
  dark?: boolean;
}) {
  return dark ? (
    <div className="fixed w-full h-full bg-gradient-to-r inset-0 from-gray-900 to-gray-950 -z-50">
    </div>
  ) : (
    <div className="fixed w-full h-full bg-gradient-to-r inset-0 from-slate-50 to-slate-300 -z-50"></div>
  );
}
