"use client";
import React, { useState } from "react";
import { motion, useTransform } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";

const menu = {
  open: {
    width: "680px",
    height: "650px",
    top: "-25px",
    right: "-25px",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: "80px",
    height: "30px",
    top: "0px",
    right: "0px",
    transition: {
      duration: 0.5,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
  mobOpen: {
    width: "300px",
    height: "650px",
    top: "-5px",
    right: "-5px",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  mobClosed: {
    width: "45px",
    height: "15px",
    top: "0px",
    right: "0px",
    transition: {
      duration: 0.5,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const perspective = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateY: 80,
    translateX: -20,
  },

  enter: (i: any) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.65,
      delay: 0.5 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
      opacity: { duration: 0.35 },
    },
  }),

  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1] },
  },
};

const navItems = [
  {
    title: "Home",
    href: "/",
  },

  {
    title: "Work",
    href: "/work",
  },

  {
    title: "About",
    href: "/about",
  },

  {
    title: "Contact",
    href: "/contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className={`fixed  duration-300 transition-all ease-out font-medium ${!isOpen ? 'bg-[#c9fd74] text-black': 'bg-black text-white '}  sm:top-[30px] sm:right-[50px] top-2.5 right-4  w-[80px] h-[30px]  sm:w-[90px] sm:h-[35px] z-[99999] rounded-full uppercase`} onClick={toggleMenu}>
          {isOpen ? "Close" : "Menu"}
        </button>

      <div className={` hidden lg:block fixed top-[32px] right-[52px] z-[9999] `}>
        <motion.div
          className={`relative w-[480px] h-[650px] bg-[#c9fd74] rounded-2xl`}
          variants={menu}
          animate={isOpen ? "open" : "closed"}
          initial="closed"
        >
          {isOpen && (
            <div className=" flex flex-col justify-between p-10 pt-24 text-6xl gap-5">
              {navItems.map((items, i) => (
                <motion.div
                  custom={i}
                  variants={perspective}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                >
                  <Link href={items.href}>{items.title}</Link>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      <div className={` block lg:hidden fixed top-[11px] right-[18px] z-[9999] `}>
        <motion.div
          className={`relative w-[480px] h-[650px] bg-[#c9fd74] rounded-xl`}
          variants={menu}
          animate={isOpen ? "mobOpen" : "mobClosed"}
          initial="closed"
        >
          {isOpen && (
            <div className=" flex flex-col justify-between p-10 pt-24 text-6xl gap-5">
              {navItems.map((items, i) => (
                <motion.div
                  custom={i}
                  variants={perspective}
                  initial="initial"
                  animate="enter"
                  exit="exit"
                >
                  <Link href={items.href}>{items.title}</Link>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </>
  );
};

export default Navbar;
