import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import Spline from "@splinetool/react-spline";
import { MoveUpRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import "./styles.css";

export default function HeroHeader() {
  const [replay, setReplay] = useState(true);
  // Placeholder text data, as if from API
  const placeholderText = [
    { type: "paragraph", text: "Your one-stop shop" },
    {
      type: "paragraph",
      text: "for boilerplates and templates",
    },
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  // Quick and dirt for the example
  const handleReplay = () => {
    setReplay(!replay);
    setTimeout(() => {
      setReplay(true);
    }, 600);
  };
  const featured = {
    hidden: {
      y: "200%",
      color: "rgb(248 250 252)",

      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      y: 0,
      color: "rgb(248 250 252)",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1.5 },
    },
  };

  const item = {
    hidden: {
      y: "200%",
      color: "rgb(248 250 252)",

      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1.85 },
    },
    visible: {
      y: 0,
      color: "rgb(248 250 252)",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 2.5 },
    },
  };

  return (
    <div className="w-full h-[100svh] sm:h-auto pt-40">
      <div className="w-full h-full  mix-blend-screen  flex items-center justify-center flex-col overflow-hidden gap-1 sm:gap-6">
        <motion.div
          className="App py-4 z-10"
          initial="hidden"
          // animate="visible"
          animate={replay ? "visible" : "hidden"}
          variants={container}
        >
          {" "}
          <span className="overflow-hidden inline-block px-4 scale-75 sm:scale-100">
            <motion.span
              style={{ display: "inline-block" }}
              variants={featured}
              className="border-slate-50/30 border-[1px] p-2 px-4 rounded-full bg-slate-50/10 backdrop-blur-lg bg-opacity-10 select-none"
            >
              <Link
                className="text-xs flex items-center"
                href={"/discover/featured"}
              >
                <span>
                  <span className="font-semibold">Featured:</span> Curated
                  boilerplates and templates for your next project
                </span>{" "}
                <MoveUpRight size={16} />
              </Link>
            </motion.span>
          </span>
        </motion.div>

        <motion.div
          className="App w-full sm:w-auto py-4 z-10"
          initial="hidden"
          // animate="visible"
          animate={replay ? "visible" : "hidden"}
          variants={container}
        >
          <div className="container">
            {placeholderText.map((item, index) => {
              return <AnimatedText {...item} key={index} />;
            })}
          </div>
        </motion.div>

        <motion.div
          className="App py-4 z-10"
          initial="hidden"
          // animate="visible"
          animate={replay ? "visible" : "hidden"}
          variants={container}
        >
          {" "}
          <span className="overflow-hidden inline-block max-w-xl text-center">
            <motion.span
              style={{ display: "inline-block" }}
              variants={item}
              className="p-2 px-4 select-none"
            >
              <span className="text-xs sm:text-md max-w-xs">
                Kickstart your next project, with a boilerplate or template and{" "}
                <span className="font-semibold">save time</span> without
                compromising <span className="font-semibold">quality</span>.
              </span>
            </motion.span>
          </span>
        </motion.div>
      </div>

      <Spline
        scene="https://prod.spline.design/jiuexS9WmlWft2nG/scene.splinecode"
        className="grayscale fixed inset-0 -z-40 scale-125 invert mix-blend-screen blur-2xl"
        style={{
          opacity: 0,
          animation: "fadeIn 2s",
          animationDelay: "1s",
          animationFillMode: "forwards",
        }}
        onError={()=>{
            return (<></>)
        }}
      />
    </div>
  );
}
