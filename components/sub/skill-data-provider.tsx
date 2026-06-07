"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import type { ReactElement } from "react";

type SkillDataProviderProps = {
  icon: (props: { className?: string; width?: number; height?: number }) => ReactElement;
  name: string;
  width: number;
  height: number;
  index: number;
};

export const SkillDataProvider = ({
  icon: Icon,
  name,
  width,
  height,
  index,
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.1;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
      className="flex flex-col items-center gap-1"
    >
      <div className="flex items-center justify-center" style={{ width, height, color: 'white' }}>
        <Icon width={width} height={height} />
      </div>
      <span className="text-[10px] text-gray-500 text-center leading-tight">{name}</span>
    </motion.div>
  );
};
