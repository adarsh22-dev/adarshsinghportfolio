"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

import { EDUCATION } from "@/constants";
import { slideInFromLeft, slideInFromTop } from "@/lib/motion";
import { ChevronRightIcon } from "@/components/svg-icons";

export const Education = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="education"
      className="flex flex-col items-center justify-center py-10 md:py-20 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        variants={slideInFromTop}
        className="text-3xl md:text-[40px] font-medium text-center text-gray-200 mb-2 px-6"
      >
        Academic{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Background
        </span>
      </motion.div>

      <div className="relative w-full max-w-5xl px-6 mt-12">
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto md:overflow-visible scroll-smooth flex-nowrap md:flex-wrap justify-center"
        >
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInFromLeft(index * 0.2)}
              className="shrink-0 w-[80vw] md:w-auto md:shrink max-w-lg p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-purple-500/30 transition-all duration-500 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 blur-[40px] rounded-full group-hover:bg-purple-500/10 transition-all duration-500" />

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5A2.5 2.5 0 0 1 4 19.5Z" />
                    <path d="M9 2v6l3-2 3 2V2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                  <p className="text-sm text-blue-400 font-semibold">{edu.institution}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span className="text-sm text-gray-400">{edu.period}</span>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </div>

        <button onClick={() => scroll("left")} className="md:hidden absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-[#030014] border border-white/20 flex items-center justify-center text-white hover:border-purple-500/50 transition rotate-180">
          <ChevronRightIcon className="h-4 w-4" />
        </button>
        <button onClick={() => scroll("right")} className="md:hidden absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-[#030014] border border-white/20 flex items-center justify-center text-white hover:border-purple-500/50 transition">
          <ChevronRightIcon className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
};
