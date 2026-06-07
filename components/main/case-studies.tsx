"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CASE_STUDIES } from "@/constants";
import { ExternalLinkIcon } from "@/components/svg-icons";

export const CaseStudies = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section id="case-studies" className="flex flex-col items-center justify-center py-20 relative">
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
        className="flex flex-col items-center justify-center max-w-6xl px-6 lg:px-10"
      >
        <div className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mb-10">
          <h1 className="Welcome-text text-[13px]">Featured Case Studies</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {CASE_STUDIES.map((study, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="p-6 rounded-lg bg-[#0300145e] border border-[#7042f88b] backdrop-blur-sm flex flex-col"
            >
              <h3 className="text-lg font-semibold text-white mb-1">{study.title}</h3>
              <p className="text-[#b49bff] text-sm mb-4">{study.subtitle}</p>

              <div className="space-y-3 text-sm text-gray-400 flex-1">
                <div>
                  <span className="text-gray-300 font-medium">Problem: </span>
                  {study.problem}
                </div>
                <div>
                  <span className="text-gray-300 font-medium">Solution: </span>
                  {study.solution}
                </div>
                <div>
                  <span className="text-gray-300 font-medium">Impact: </span>
                  {study.impact}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {study.techStack.map((tech, j) => (
                  <span
                    key={j}
                    className="px-2 py-1 text-xs rounded-full bg-[#7042f81a] text-[#b49bff] border border-[#7042f84d]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
