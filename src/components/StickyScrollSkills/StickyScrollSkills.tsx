"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
 
export const StickyScrollSkills = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    skills: Array<string>;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;
 
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });
 
  const backgroundColors = [''
    // "lightblue",
    // "lightgreen",
    // "lightpink",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, #95E1E8, #2ECC71)",
    "linear-gradient(to bottom right, #F7CAC9, #563D7C)",
    "linear-gradient(to bottom right, #F9A12B, #FFD54F)",
  ];
  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="hidden lg:flex  h-[50rem] w-full overflow-y-auto  lg:justify-center lg:relative lg:space-x-10 pl-8 md:pl-16 lg:pl-40 pr-8 md:pr-0 lg:pr-0"
      ref={ref}
    >
      <div className=" div w-full lg:w-1/2 relative h-full flex items-start lg:px-4 ">
        <div className="w-full ">
          {/* content div */}
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20  ">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className=" text-8xl text-black mb-16"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-base lg:text-xl text-black  font-light my-5"
              >
                {item.description}
              </motion.p>
              {item.skills.length > 0 ? (
                <motion.ul 
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="flex flex-wrap gap-2">
                  {item.skills.map((skill, index) => (
                    <li
                      key={index}
                      className=" flex items-center text-sm lg:text-lg font-light border border-black rounded-full px-3 py-1 cursor-pointer"
                    >
                      {skill}
                    </li>
                  ))}
                </motion.ul>
              ) : (
                <p>No skills listed.</p>
              )}
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <motion.div
        animate={{
          background: linearGradients[activeCard % linearGradients.length],
        }}
        className={`hidden lg:block  w-1/2 aspect-square rounded-md bg-white sticky top-0 overflow-hidden ${ contentClassName}`}
      >
        {content[activeCard].content ?? null}
      </motion.div>
    </motion.div>
  );
};