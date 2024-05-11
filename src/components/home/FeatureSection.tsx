import { useScroll, motion } from "framer-motion";
import React, { useRef, useState } from "react";
import GradientBackground from "../GradientBackground";
import Spline from "@splinetool/react-spline";
import { CheckCircle, Layers, ShoppingBasket } from "lucide-react";

export default function FeatureSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const [opacity, setOpacity] = useState(0);
  // const [backgroundOpacity, setBackgroundOpacity] = useState(0);

  scrollYProgress.on("change", (v) => {
    // setOpacity(Math.pow(v, 3));

    // set value exponentially, if it passes 1, let it stay 1
    setOpacity(Math.min(Math.pow(v * 2, 3), 1));
  });

  return (
    <section className="w-full h-auto p-8" style={{ opacity }}>
      <div ref={ref}></div>
      <div className="w-full h-auto flex items-end">
        <FeatureList />
      </div>
      {/* <GradientBackground></GradientBackground> */}
    </section>
  );
}

function FeatureList() {
  return (
    <>
      <div className="flex flex-col w-full justify-center items-center gap-4 select-none">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-center text-white mb-8 max-w-md">
            We make it easy to find the perfect boilerplate for your project.
          </h2>
        </div>
        <div className="w-full flex flex-col sm:flex-row gap-4 justify-center items-center sm:items-stretch">
          <Card
            title={"Wide Variety of Boilerplates"}
            description={
              "Find the perfect boilerplate for any framework and use-case."
            }
            icon={<Layers />}
            viewOffset={4}
          ></Card>

          <Card
            title={"Quality Assured"}
            description={
              "All boilerplates are vetted for quality, ensuring high-quality code."
            }
            icon={<CheckCircle />}
            viewOffset={3.5}
          ></Card>
          <Card
            title={"Easy Purchase & Sell Process"}
            description={
              "Our platform makes buying and selling boilerplates a breeze."
            }
            icon={<ShoppingBasket />}
            viewOffset={3}
          ></Card>
        </div>
      </div>
    </>
  );
}

function Card({
  title,
  description,
  icon,
  viewOffset = 0,
}: {
  title: string;
  description: string;
  icon: any;
  viewOffset?: number;
}) {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  scrollYProgress.on("change", (v) => {
    const scrollOffset = Math.min(Math.pow(v * viewOffset, 3), 1);
    // console.log(scrollOffset * 100);
    setOffset(scrollOffset);
  });

  return (
    <div
      className="select-none user-select-none flex flex-col h-auto items-center justify-start gap-2 p-4 bg-slate-50/5 border-slate-50/10 border-[1px] rounded-lg shadow-lg w-64 grayscale text-white overflow-clip"
      ref={ref}
    >
      <div
        className="p-4 text-3xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full text-white mix-blend-screen"
        style={{
          transform: `translateY(${-offset * 400 + 400}%)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        {icon}
      </div>
      <h3
        className="text-xl font-bold text-center"
        style={{
          transform: `translateY(${-offset * 800 + 800}%)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        {title}
      </h3>
      <p
        className="text-sm text-center"
        style={{
          transform: `translateY(${-offset * 1200 + 1200}%)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        {description}
      </p>
    </div>
  );
}
