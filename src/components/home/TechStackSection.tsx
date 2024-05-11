import Image from "next/image";
import ParallaxBanner from "./components/ParallaxBanner";

export default function TechStackSection() {
  // feel free to add more icons from https://devicon.dev
  return (
    <>
      <div className="w-full h-auto pt-20 p-8">
        <div className="flex flex-col w-full justify-center items-center gap-4 select-none">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-center text-white mb-8 max-w-md">
              Use whatever tech stack you&apos;re comfortable with.
            </h2>
          </div>
        </div>
        <ParallaxBanner baseVelocity={2}>
          <div className="w-full flex flex-row gap-5 text-white opacity-75 text-[64px]">
            <i className="devicon-nextjs-original-wordmark"></i>
            <i className="devicon-react-original-wordmark"></i>
            <i className="devicon-mongodb-plain-wordmark"></i>
            <i className="devicon-prisma-original-wordmark"></i>
            <i className="devicon-supabase-plain-wordmark"></i>
            <i className="devicon-firebase-plain-wordmark"></i>
            <i className="devicon-tailwindcss-plain-wordmark"></i>
          </div>
        </ParallaxBanner>
      </div>
    </>
  );
}
