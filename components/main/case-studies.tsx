"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CASE_STUDIES } from "@/constants";
import { ExternalLinkIcon, ChevronRightIcon } from "@/components/svg-icons";

export const CaseStudies = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <section id="case-studies" className="flex flex-col items-center justify-center py-10 md:py-20 relative overflow-hidden">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="flex flex-col items-center justify-center max-w-6xl px-6 lg:px-10"
      >
        <div className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mb-10">
          <h1 className="Welcome-text text-[13px]">Featured Case Studies</h1>
        </div>

        <div className="relative w-full">
          <div
            ref={scrollRef}
            className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible scroll-smooth w-full pb-2"
          >
            {CASE_STUDIES.map((study, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="shrink-0 w-[80vw] md:w-auto md:shrink p-6 rounded-lg bg-[#0300145e] border border-[#7042f88b] backdrop-blur-sm flex flex-col"
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

        <button onClick={() => scroll("left")} className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-[#030014] border border-white/20 flex items-center justify-center text-white hover:border-purple-500/50 transition rotate-180">
          <ChevronRightIcon className="h-4 w-4" />
        </button>
        <button onClick={() => scroll("right")} className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-[#030014] border border-white/20 flex items-center justify-center text-white hover:border-purple-500/50 transition">
          <ChevronRightIcon className="h-4 w-4" />
        </button>
      </div>
      </motion.div>
    </section>
  );
};
