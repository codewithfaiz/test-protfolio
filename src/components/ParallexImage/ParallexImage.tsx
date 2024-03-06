// Instructs Next.js to render this component on the client-side
"use client";

// Import necessary components and hooks
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

interface ParallexImageProps {
src:string;
alt:string;
}

const ParallexImage: React.FC<ParallexImageProps> = ({ src, alt } ) => {


  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(
    scrollYProgress,
    // Map x from these values:
    [0, 1],
    // Into these values:
    ["10%", "-10%"]
  );


  return (
    <div className=" overflow-hidden mx-10 sm:mx-20 w-[16rem] h-[22.5rem] sm:h-[45rem]  sm:w-[32rem]" ref={ref}>
      <motion.img src={src} alt={alt} className="w-full h-full scale-125 object-cover object-center" style={{ translateY: translateY }} />
    </div>
  );
};

export default ParallexImage;
