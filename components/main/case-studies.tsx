"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CASE_STUDIES } from "@/constants";
import { ExternalLinkIcon } from "@/components/svg-icons";

export const CaseStudies = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [mobileIndex, setMobileIndex] = useState(0);

  return (
    <section id="case-studies" className="flex flex-col items-center justify-center py-20 relative overflow-hidden">
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
        className="flex flex-col items-center justify-center max-w-6xl px-6 lg:px-10"
      >
        <div className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mb-10">
          <h1 className="Welcome-text text-[13px]">Featured Case Studies</h1>
        </div>

        {/* Mobile Nav */}
        <div className="flex md:hidden items-center justify-center gap-4 mb-4">
          <button onClick={() => setMobileIndex(i => Math.max(0, i - 1))} disabled={mobileIndex === 0} className="size-9 rounded-full border border-white/20 flex items-center justify-center text-white disabled:opacity-30 hover:bg-white/10 transition" aria-label="Previous">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <span className="text-xs text-gray-500 font-mono">{mobileIndex + 1} / {CASE_STUDIES.length}</span>
          <button onClick={() => setMobileIndex(i => Math.min(CASE_STUDIES.length - 1, i + 1))} disabled={mobileIndex === CASE_STUDIES.length - 1} className="size-9 rounded-full border border-white/20 flex items-center justify-center text-white disabled:opacity-30 hover:bg-white/10 transition" aria-label="Next">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {CASE_STUDIES.map((study, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`p-6 rounded-lg bg-[#0300145e] border border-[#7042f88b] backdrop-blur-sm flex flex-col ${i === mobileIndex ? "" : "hidden md:flex"}`}
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
