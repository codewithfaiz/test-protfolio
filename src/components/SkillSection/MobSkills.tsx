// Instructs Next.js to render this component on the client-side
"use client";

import React, { ReactFragment, useRef } from "react";
import { MobskillsData } from "@/lib/Data";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const MobSkills = () => {
  return (
    <section className="flex lg:hidden flex-col gap-14">
      <h1 className="font-medium text-6xl px-8">Skills</h1>
      <p className="text-base px-8">I bring together my creative vision with technical expertise to craft innovative and user-centric digital experiences. Here&apos;s a closer look at my skillset:</p>
       {/* Navigation Button  */}
       <Link href={''} className={`w-max px-8 text-xl relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0  after:bg-black after:origin-bottom-right after:ease-out after:transition-transform after:duration-[0.5s] hover:after:scale-x-[1] hover:after:origin-bottom-left focus:after:origin-bottom-left focus:after:scale-x-[1]  active:after:scale-x-[0.9]  active:after:origin-bottom-left`}>See More</Link>
      <div className=" flex flex-col gap-10 pb-14 px-4 ">
        {MobskillsData.map((data, index) => (
          <React.Fragment key={index}>
            <Skill {...data} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default MobSkills;

type MobskillsDataProps = (typeof MobskillsData)[number];
function Skill({ title, description, skilltags }: MobskillsDataProps) {


  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);


  return (
    <motion.div
    ref={ref}
    style={{
      scale: scaleProgess,
      opacity: opacityProgess,
      backgroundImage: `url(images/skill-card-bg.avif)`, 
      backgroundSize: 'cover',
    }}
    className="w-full rounded-xl  bg-[#000000] relative flex flex-col items-center justify-center antialiased p-5"
    >
      {/* Overlay  */} 
      <div className="bg-black opacity-50 h-full w-full absolute top-0 rounded-xl  "/>
      <h3 className="text-4xl font-medium mb-10 text-white z-[10]">{title}</h3>
      <p className=" text-base font-light mb-5 text-white z-[10] ">{description}</p>
      <ul className="flex flex-wrap gap-x-1 gap-y-2">
        {skilltags.map((tags, index) => (
          <li 
          key={index}
          className=" flex items-center text-white text-sm font-light duration-500 transition-all ease-in-out border border-white rounded-full px-1.5 py-0.5  cursor-pointer hover:bg-white hover:text-black z-[10]"
          >{tags}</li>
        ))}
      </ul>
    </motion.div>
  );
}
