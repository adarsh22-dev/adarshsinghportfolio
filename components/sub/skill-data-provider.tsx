"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type SkillDataProviderProps = {
  image: string;
  name: string;
  index: number;
};

export const SkillDataProvider = ({
  image,
  name,
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
      <div className="flex items-center justify-center size-[70px]">
        <Image
          src={image}
          alt={name}
          width={70}
          height={70}
          className="object-contain"
        />
      </div>
      <span className="text-[10px] text-gray-500 text-center leading-tight">{name}</span>
    </motion.div>
  );
};
