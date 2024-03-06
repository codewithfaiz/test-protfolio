
import React from "react";
import { SkillInfo } from "./Data";
import { BackgroundBeams } from "../ui/background-beams";


const Skills = () => {
 
  return (
    <div
      className=" flex flex-col gap-10 py-20 p-5 lg:hidden"
    >
      {
        SkillInfo.map((items,index)=>(
          <div
        key={index}
        className="w-full rounded-xl bg-[#020B13] relative flex flex-col items-center justify-center antialiased p-5"
      >
        <div className="flex flex-col gap-10 text-white rounded-2xl">
          <h2 className="text-4xl">{items.title}</h2>
          <div className="flex flex-col gap-5">
            <p className=" text-base font-light ">{items.description}</p>
            {items.skills.length > 0 ? (
              <ul className="flex flex-wrap gap-2">
                {items.skills.map((skill, index) => (
                  <li
                    key={index}
                    className=" flex items-center text-sm  font-light border border-white rounded-full px-3 py-1 cursor-pointer hover:bg-white hover:text-black"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No skills listed.</p>
            )}
          </div>
          <BackgroundBeams className="text-white" />
        </div>
      </div>
        ))
      }
    </div>
  );
};

export default Skills;
