// Instructs Next.js to render this component on the client-side
"use client";

// Import necessary components and hooks
import { socialLink } from "@/lib/Data";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import Image from "next/image";

const ReachOut = () => {
  const [background, setBackground] = useState<string>("");
  const handleMouseEnter = (img: string) => {
    setBackground(img);
  };
  const removeBg = (img: string) => {
    setBackground("");
  };

  return (
    <>
      {/* Reach Out Content Container */}
      <section className="flex flex-col gap-14 pt-20 lg:gap-20 relative bg-black text-white ">
        {/* Background Image container */}
        {background && (
          <div className="w-full h-full absolute top-0 left-0 -z-[-1]">
            <Image
              src={background}
              alt=""
              fill
              className=" object-cover object-center"
            />
          </div>
        )}

        {/* Heading goes here */}
        <div className=" flex flex-col  gap-14 lg:gap-20 px-8  md:pl-16 lg:pl-40">
          <h1 className=" flex flex-col font-medium text-6xl md:text-7xl lg:text-9xl  ">
            <span>Reach</span>
            <span>Out</span>
          </h1>
          {/* Text and Info goes here  */}
          <p className=" font-light text-base md:text-2xl lg:text-3xl lg:mx-24 pl-0 md:pl-20 lg:pl-52 lg:pr-36">
            For any collaborative projects or inquire feel free to reach out to
            me.
          </p>
        </div>

        {/* Reach Out Contact Conatiner  */}
        <div className="flex flex-col justify-center items-center gap-14 lg:gap-28">
          {/* Email Address Container  */}
          <div className="flex items-center cursor-pointer justify-center px-5 gap-2.5 md:gap-5 lg:gap-10 ">
            <motion.span
              initial={{ x: 0 }}
              animate={{
                x: [0, 10, 0],
                transition: {
                  duration: 1,
                  yoyo: Infinity,
                  repeat: Infinity,
                  loop: Infinity,
                  ease: "linear",
                },
              }}
            >
              <MoveRight className=" w-5 h-5 md:w-10 md:h-10 lg:w-20 lg:h-20" />
            </motion.span>

            {/* Navigation Link of email address  */}
            <Link
              href={""}
              className={`w-max text-2xl md:text-8xl lg:text-[126px] relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px]  after:-bottom-5 after:left-0  after:bg-white after:origin-bottom-right after:ease-out after:transition-transform after:duration-[0.5s] hover:after:scale-x-[1] hover:after:origin-bottom-left focus:after:origin-bottom-left focus:after:scale-x-[1]  active:after:scale-x-[0.9]  active:after:origin-bottom-left`}
            >
              hellofaiz@gmail.com
            </Link>
          </div>

          <p className=" font-light text-base md:text-2xl lg:text-3xl">
            Or contact me via social media
          </p>

          {/* social Media link container  */}
          <ul className=" w-11/12 flex flex-col justify-center items-center text-8xl  border-t border-white ">
            {socialLink.map((item, index) => (
              <li
                key={index}
                className=" w-full flex flex-col justify-center items-center py-2.5 md:py-5 lg:py-10 cursor-pointer border-b border-white "
              >
                <Link
                  href={item.url}
                  className=" uppercase font-medium text-2xl md:text-5xl lg:text-9xl sm:opacity-10 sm:hover:opacity-100"
                  onMouseEnter={() => handleMouseEnter(item.img)}
                  onMouseLeave={() => removeBg(item.img)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <footer className="flex  flex-col  justify-center items-center">
          {/* Footer paragraph  */}
          <p className="w-11/12 text-sm font-medium py-14">
            Designed and developed by Faiz Khan
          </p>

          {/* Footer Marquee Animation using react library  */}
          <Marquee
            autoFill={true}
            speed={80}
            className=" leading-none cursor-pointer overflow-hidden"
          >
            <div className=" text-[59px] md:text-[118px] lg:text-[236px] font-medium  flex justify-center items-center uppercase">
              <h4 className="mr-12 lg:mr-24 ">Make the Connection</h4>
              <h4 className="mr-12 lg:mr-24">Make the Connection</h4>
            </div>
          </Marquee>
        </footer>
      </section>
    </>
  );
};

export default ReachOut;
