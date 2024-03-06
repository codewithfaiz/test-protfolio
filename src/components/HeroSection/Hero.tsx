// Instructs Next.js to render this component on the client-side
"use client";

// Import necessary components and hooks
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
// import Link from "next/link";
import TypingAnimation from "../TypingAnimation";
import { Link } from "react-scroll";

const Hero = () => {
  // Array of strings for the typing text effect
  const TypingText = [
    "+ Programmer.",
    "+ Designer.",
    "+ AI Enthusiast.",
    "+ Creative.",
  ];

  return (
    <section>
      {/* Sticky-Effect Container */}
      <div>
        {/* Section-1-Container  */}
        <div className="h-screen max-w-full  flex flex-col justify-center items-center sticky top-0">
          {/* Overlay for visual effect */}
          <div className="top-0 absolute w-full h-full bg-black opacity-35" />

          {/* Section-1-Online-button */}
          <div className=" w-max absolute top-0 left-0 p-2.5 md:p-5 lg:p-10 z-50">
            <div
              className=" flex gap-1 text-white border border-white rounded-full px-2 py-0.5 cursor-pointer "
            >
              <div className=" flex justify-center items-center relative">
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{
                    scale: [0, 0.5, 0.75, 1],
                    transition: {
                      duration: 1,
                      yoyo: Infinity,
                      repeat: Infinity,
                      loop: Infinity,
                      ease: "linear",
                    },
                  }}
                  className="w-6 h-6 bg-[#2bee5c] opacity-20 rounded-full"
                ></motion.span>
                <span className="w-2 h-2 bg-[#2bee5c] rounded-full absolute top-1/2 -translate-x-1/2  -translate-y-1/2 left-1/2"></span>
              </div>
              Online
            </div>
          </div>

          {/* Section-1 - Content container  */}
          <div className="relative w-full h-full">
            {/* Image-Section  */}
            <div className=" w-full h-full top-0 absolute -z-10 ">
              <Image
                src={"/images/hero-bg-img.png"}
                alt=""
                fill={true}
                className="object-cover object-center"
              />
            </div>

            {/* Heading  and Text goes here  */}
            <div className="w-full h-full flex flex-col justify-center items-center text-white text-4xl md:text-6xl lg:text-8xl font-medium cursor-pointer">
              <div>
                <h1>Hello,</h1>
                <h1>I&apos;m Faiz Khan.</h1>
              </div>

              {/* Animated chevron container */}
              <div>
                <Link
                  to={"section-2"}
                  smooth={true}
                  duration={800}
                  className="flex pr-52 md:pr-96 lg:pr-[35rem]"
                >
                  <motion.span
                    initial={{ y: 0 }}
                    animate={{
                      y: [0, 10, 0],
                      transition: {
                        duration: 1,
                        yoyo: Infinity, // Infinite bouncing animation
                        repeat: Infinity,
                        loop: Infinity,
                        ease: "linear",
                      },
                    }}
                  >
                    <ChevronDown className="md:w-10 md:h-10 lg:w-20 lg:h-20" />
                  </motion.span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Section-2-Container  */}
        <div
          id={"section-2"}
          className="h-full lg:h-screen  max-w-full flex flex-col bg-white text-black justify-center items-center sticky top-0"
        >
          {/* Section-2 - Content container  */}
          <div className="w-full flex justify-center items-center md:flex-row flex-col">
            {/* Heading and Text Container */}
            <div className="w-full justify-around md:w-[65%] h-full flex flex-col gap-10 pt-10 md:pt-20 lg:pt-0 pl-8  md:pl-16 lg:pl-40 ">
              {/* Heading goes here  */}
              <div className="font-normal md:font-medium text-4xl md:text-6xl lg:text-8xl">
                <h1>Full Stack</h1>
                <h1>Developer</h1>
                <h1>
                  <TypingAnimation texts={TypingText} />
                </h1>
              </div>

              {/* Description goes here  */}
              <p className=" w-full lg:w-[80%] font-light text-lg md:text-xl lg:text-3xl pl-8 md:pl-16 lg:pl-32 ">
                — Crafting unforgettable web experiences.
              </p>
            </div>

            {/* Image container  */}
            <div className="w-full md:w-[35%] p-10 flex justify-center items-center ">
              <div className="w-max ">
                <Image
                  src={"/images/hero-profile-img.webp"}
                  width={650}
                  height={800}
                  quality={90}
                  alt="Profile Picture"
                  objectFit="cover"
                  objectPosition="center"
                  // layout="responsive"
                  className=" rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
