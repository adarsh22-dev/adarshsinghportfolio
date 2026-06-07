"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AWARDS } from "@/constants";
import { AwardIcon } from "@/components/svg-icons";

export const Awards = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section className="flex flex-col items-center justify-center py-20 relative overflow-hidden">
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video className="w-full h-auto" preload="false" playsInline loop muted autoPlay>
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
        <div className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mb-10">
          <h1 className="Welcome-text text-[13px]">Awards & Recognition</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
          {AWARDS.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-5 rounded-lg bg-[#0300145e] border border-[#7042f88b] backdrop-blur-sm text-center"
            >
              <AwardIcon className="h-8 w-8 text-[#b49bff] mx-auto mb-3" />
              <h3 className="text-white font-medium mb-1">{award.title}</h3>
              <p className="text-gray-400 text-sm mb-2">{award.description}</p>
              <span className="text-xs text-gray-500">{award.date}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
