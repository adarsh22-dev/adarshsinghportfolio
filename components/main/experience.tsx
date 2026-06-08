"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { EXPERIENCES } from "@/constants";
import { slideInFromLeft, slideInFromTop } from "@/lib/motion";

const TimelineDot = ({ active }: { active: boolean }) => (
  <div className="relative z-20 shrink-0">
    <svg width="48" height="48" viewBox="0 0 48 48">
      <circle
        cx="24" cy="24" r="22"
        fill={active ? "rgba(168,85,247,0.1)" : "rgba(255,255,255,0.03)"}
        stroke={active ? "#a855f7" : "rgba(255,255,255,0.1)"}
        strokeWidth="2"
      />
      <circle
        cx="24" cy="24" r="6"
        fill={active ? "#a855f7" : "rgba(255,255,255,0.2)"}
        className={active ? "animate-pulse" : ""}
      />
    </svg>
  </div>
);

export const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const startTrigger = windowHeight * 0.8;
      const endTrigger = windowHeight * 0.2;
      const totalDist = rect.height + (startTrigger - endTrigger);
      const currentPos = startTrigger - rect.top;
      const progress = Math.min(Math.max(currentPos / totalDist, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="flex flex-col items-center justify-center py-10 md:py-20 relative overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/4 w-[800px] h-[500px] bg-purple-600/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[800px] h-[500px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />

      <motion.div
        variants={slideInFromTop}
        className="text-3xl md:text-[40px] font-medium text-center text-gray-200 mb-2 px-6"
      >
        Professional{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Journey
        </span>
      </motion.div>
      <motion.p
        variants={slideInFromLeft(0.5)}
        className="text-sm md:text-lg text-gray-400 mb-16 text-center px-6"
      >
        A timeline of my evolution in software engineering.
      </motion.p>

        <div className="relative max-w-5xl w-full px-4 md:px-8">
          {/* Timeline line - desktop only */}
          <div className="hidden md:block absolute left-1/2 -translate-x-px top-0 w-[2px] h-full bg-white/5 z-0" />

          {/* Progress line - desktop only */}
          <div
            className="hidden md:block absolute left-1/2 -translate-x-px w-[3px] bg-gradient-to-b from-purple-500 via-blue-400 to-transparent z-[1] origin-top shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-100 ease-out"
            style={{ height: `${scrollProgress * 100}%`, top: 0 }}
          >
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-12 bg-white blur-md opacity-20" />
          </div>

          <div className="flex flex-col gap-10 md:gap-16">
            {EXPERIENCES.map((exp, index) => {
              const itemThreshold = index / (EXPERIENCES.length - 1) * 0.9;
              const isActive = scrollProgress >= itemThreshold;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-start w-full group relative"
                >
                  {/* Spacer - on desktop, alternates left/right */}
                  <div className={`hidden md:block w-[42%] ${isLeft ? "" : "order-3"}`} />

                  {/* Timeline dot row - desktop only */}
                  <div className="hidden md:flex items-start mb-4 md:mb-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                    <TimelineDot active={isActive} />
                  </div>

                  {/* Card */}
                  <div className={`w-full md:w-[42%] max-md:!ml-0 ${isLeft ? "" : "md:order-2"}`} style={{ marginLeft: isLeft ? (isActive ? '140px' : '120px') : '0px', marginRight: !isLeft ? (isActive ? '140px' : '120px') : '0px' }}>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: {
                        opacity: isActive ? 1 : 0.4,
                        y: 0,
                        transition: { duration: 0.7 },
                      },
                    }}
                    className={`p-6 md:p-8 rounded-2xl border transition-all duration-700 relative overflow-hidden ${
                      isActive
                        ? "border-white/20 bg-white/[0.03] shadow-[0_20px_50px_rgba(0,0,0,0.4)] translate-y-0 opacity-100"
                        : "border-white/5 bg-transparent translate-y-4 opacity-40"
                    }`}
                  >
                    <div
                      className={`absolute top-0 right-0 w-40 h-40 bg-purple-500/10 blur-[60px] rounded-full transition-opacity duration-1000 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />

                    <span
                      className={`block font-black text-xs tracking-[0.2em] uppercase mb-4 transition-colors duration-700 ${
                        isActive ? "text-purple-400" : "text-gray-600"
                      }`}
                    >
                      {exp.period}
                    </span>

                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1 leading-tight">
                      {exp.title}
                    </h3>

                    <p className="text-blue-400 font-semibold text-sm mb-4 flex items-center gap-2">
                      <svg width="16" height="2" viewBox="0 0 16 2" fill="none">
                        <rect width="16" height="2" rx="1" fill="#60a5fa" opacity="0.5" />
                      </svg>
                      {exp.company}
                    </p>

                    <p className="text-gray-400 leading-relaxed mb-4 text-sm">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-[9px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-lg border transition-all duration-700 ${
                            isActive
                              ? "bg-purple-500/10 border-purple-500/20 text-purple-200"
                              : "bg-white/5 border-white/5 text-gray-500"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};
