"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

interface TypingAnimationProps {
  texts: string[];
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ texts }) => {
  const textIndex = useMotionValue(0);

  const baseText = useTransform(textIndex, (latest) => texts[latest] || "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.get().slice(0, latest)
  );
  const updatedThisRound = useMotionValue(true);

  useEffect(() => {
    animate(count, 60, {
      type: "tween",
      duration: 3,
      ease: "easeIn",
      repeat: Infinity,
      repeatType: "reverse",
      repeatDelay: 0.1,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      },
    });
  }, [count,textIndex,updatedThisRound]);

  const cursorVariants = {
    blinking: {
      opacity: [0, 0, 1, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatDelay: 0, 
        ease: "linear",
        times: [0, 0.5, 0.5, 1],
      },
    },
  };

  return (
    <span>
      <motion.span className="inline text-[#F51C20]">{displayText}</motion.span>
      <motion.span
        variants={cursorVariants}
        animate="blinking"
        className="inline-block text-[#F51C20]"
      >|</motion.span>
    </span>
  );
};

export default TypingAnimation;
