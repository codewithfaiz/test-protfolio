import Link from "next/link";
import React from "react";

const Intro = () => {
  return (
    <section className="flex flex-col justify-center items-centerh-screen pb-10 lg:pb-24">
      {/* Intro Section Content Container */}
      <div className=" flex flex-col gap-14  px-8 md:pl-16 lg:pl-40 ">
        {/* Heading goes here */}
        <h1 className=" font-medium text-6xl md:text-7xl lg:text-9xl">Intro</h1>

        {/* Text and Info goes here  */}
        <div className="lg:mx-24 pl-0 md:pl-20 lg:pl-52 lg:pr-10 flex flex-col gap-14">
          <p className="  text-base md:text-2xl lg:text-3xl">
            Passionate about crafting captivating web experiences, I explore the
            dynamic world of web development. Armed with the MERN stack,
            Next.js, and a hunger for new tech, I&apos;m ready to innovate ✨
          </p>
          <p className=" pl-8 md:pl-16 lg:pl-36  text-sm md:text-xl lg:text-2xl">
            When I&apos;m not crafting captivating web experiences, you&apos;ll
            probably catch me playing chess, exploring YouTube, or getting
            creative with my drawings
          </p>

          {/* Navigation Button  */}
          <Link
            href={""}
            className={`w-max text-xl relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0  after:bg-black after:origin-bottom-right after:ease-out after:transition-transform after:duration-[0.5s] hover:after:scale-x-[1] hover:after:origin-bottom-left focus:after:origin-bottom-left focus:after:scale-x-[1]  active:after:scale-x-[0.9]  active:after:origin-bottom-left`}
          >
            See More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Intro;
