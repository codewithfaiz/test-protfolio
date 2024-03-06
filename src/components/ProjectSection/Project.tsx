// Instructs Next.js to render this component on the client-side
"use client";

// Import necessary components and hooks
import Link from "next/link";
import React from "react";
import ParallexImage from "../ParallexImage/ParallexImage";
import Lenis from "@studio-freight/lenis";
import { ProjectData } from "@/lib/Data";


const Project = () => {
  //Lenis Smooth Scroll
 // Type definitions for Lenis options (optional but recommended)
interface LenisOptionsWithTypes {
    duration: number;
    easing: (t: number) => number;
    direction: "vertical" | "horizontal";
    gestureDirection: "vertical" | "horizontal" | "both";
    smooth: boolean;
    mouseMultiplier: number;
    smoothTouch: boolean;
    touchMultiplier: number;
    infinite: boolean;
  }
  
  // Create Lenis instance with typed options
  const lenis: Lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: "vertical" as "vertical", // Ensure correct type
    gestureDirection: "vertical" as "vertical", // Ensure correct type
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  } as LenisOptionsWithTypes);

  const raf = (time: number) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };

  requestAnimationFrame(raf);

  return (
    <section>
        <div className=" font-medium text-6xl pb-16 md:text-7xl lg:text-9xl px-8 sm:pl-40">
            <h1>Selected</h1>
            <h1>Work</h1>
        </div>
      {ProjectData.map((item, index) => (
        <div className="w-full flex flex-col sm:flex-row justify-center items-center pb-20 px-8 sm:pl-40">
          <div className="flex flex-col justify-between">
            <div className="flex justify-between text-lg pb-16">
              <span>0/{index + 1}</span>
              {/* Navigation Button  */}
              <Link
                href={""}
                className={`w-max sm:mr-10 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0  after:bg-black after:origin-bottom-right after:ease-out after:transition-transform after:duration-[0.5s] hover:after:scale-x-[1] hover:after:origin-bottom-left focus:after:origin-bottom-left focus:after:scale-x-[1]  active:after:scale-x-[0.9]  active:after:origin-bottom-left`}
              >
                {item.Linktext}
              </Link>
            </div>
            <p className="text-base sm:text-xl font-light w-full sm:w-[70%]">{item.description}</p>
            <h2 className="text-[59px] md:text-[118px] lg:text-[136px] font-semibold w-max">
              <Link
                href={item.url}
                className={`w-max relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-5 after:left-0  after:bg-black after:origin-bottom-right after:ease-out after:transition-transform after:duration-[0.5s] hover:after:scale-x-[1] hover:after:origin-bottom-left focus:after:origin-bottom-left focus:after:scale-x-[1]  active:after:scale-x-[0.9]  active:after:origin-bottom-left`}
              >
                {item.title}
              </Link>
            </h2>
          </div>
          <div className="relative">
            <Link href={item.url}>
              <div>
                <ParallexImage src={item.imgUrl} alt={"imge"} />
              </div>
              <div className=" absolute top-[35%]  left-[20%] w-[200px] sm:w-[400px] h-full">
                <video loop autoPlay muted preload="none">
                  <source
                    src="/video/galaxy-rollercoaster.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </Link>
          </div>
        </div>
      ))}
      <div className="flex justify-center items-center text-xl sm:text-3xl pb-16">
        <Link
          href={""}
          className={`w-max relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0  after:bg-black after:origin-bottom-right after:ease-out after:transition-transform after:duration-[0.5s] hover:after:scale-x-[1] hover:after:origin-bottom-left focus:after:origin-bottom-left focus:after:scale-x-[1]  active:after:scale-x-[0.9]  active:after:origin-bottom-left`}
        >
          See More
        </Link>
      </div>
    </section>
  );
};
export default Project;
