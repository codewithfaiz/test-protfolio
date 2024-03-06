import Hero from "@/components/HeroSection/Hero";
import { SkillInfo } from "@/components/StickyScrollSkills/Data";
import { StickyScrollSkills } from "@/components/StickyScrollSkills/StickyScrollSkills";
import Link from "next/link";
import MobSkills from "@/components/SkillSection/MobSkills";
import ReachOut from "@/components/ReachOutSection/ReachOut";
import Intro from "@/components/IntroSection/Intro";
import Project from "@/components/ProjectSection/Project";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className=" select-none">
      <Navbar/>
      <Hero />
      {/* Intro Section */}
      <Intro />
      {/* Skill Section For mobile */}
      <MobSkills />
      {/* Project Section  */}
      <Project />
      {/* Reach Out Section */}
      <ReachOut />
    </main>
  );
}



{/* <div>
<StickyScrollSkills content={SkillInfo} />
</div> */}
      // {/* Skill Section  */}
      // <section>
      //   <div className=" flex flex-col gap-14 px-8 md:pl-16 lg:pl-40 ">
      //     {/* Heading goes here */}
      //     <h1 className=" text-6xl md:text-7xl lg:text-9xl">Skills</h1>

      //     {/* Text and Info goes here  */}
      //     <div className="lg:mx-24 pl-0 md:pl-20 lg:pl-52 lg:pr-10 flex flex-col gap-14">
      //       <p className="  text-base md:text-2xl lg:text-3xl">
      //         I bring together my creative vision with technical expertise to
      //         craft innovative and user-centric digital experiences. Here's a
      //         closer look at my skillset:
      //       </p>

      //       {/* Navigation Button  */}
      //       <Link
      //         href={""}
      //         className={`w-max text-xl relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0  after:bg-black after:origin-bottom-right after:ease-out after:transition-transform after:duration-[0.5s] hover:after:scale-x-[1] hover:after:origin-bottom-left focus:after:origin-bottom-left focus:after:scale-x-[1]  active:after:scale-x-[0.9]  active:after:origin-bottom-left`}
      //       >
      //         See More
      //       </Link>
      //     </div>
      //   </div>
      //   {/* Skills go here */}
      // </section>