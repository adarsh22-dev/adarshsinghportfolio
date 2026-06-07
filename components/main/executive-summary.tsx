"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { slideInFromLeft } from "@/lib/motion";
import { CheckIcon } from "@/components/svg-icons";
import { EXECUTIVE_SUMMARY } from "@/constants";

export const ExecutiveSummary = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section id="about" className="flex flex-col items-center justify-center py-20 relative overflow-hidden">
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video className="w-full h-full object-cover" preload="false" playsInline loop muted autoPlay>
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="flex flex-col items-center justify-center max-w-4xl px-6 lg:px-10"
      >
        <motion.div variants={slideInFromLeft(0.5)} className="mb-6">
          <div className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]">
            <h1 className="Welcome-text text-[13px]">Executive Summary</h1>
          </div>
        </motion.div>

        <motion.p variants={slideInFromLeft(0.8)} className="text-xl text-gray-300 text-center leading-relaxed mb-8">
          {EXECUTIVE_SUMMARY.tagline}
        </motion.p>

        <motion.div variants={slideInFromLeft(1)} className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {EXECUTIVE_SUMMARY.highlights.map((item, i) => (
            <div key={i} className="flex items-start gap-3 text-gray-400">
              <CheckIcon className="h-5 w-5 text-[#b49bff] mt-0.5 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
