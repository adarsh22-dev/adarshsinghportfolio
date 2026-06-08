"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { EDUCATION } from "@/constants";
import { slideInFromLeft, slideInFromTop } from "@/lib/motion";

export const Education = () => {
  const [mobileIndex, setMobileIndex] = useState(0);
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

      <div className="flex flex-wrap justify-center gap-8 mt-12 max-w-5xl px-6">
        {/* Mobile Nav */}
        <div className="flex md:hidden items-center justify-center gap-4 w-full mb-2">
          <button onClick={() => setMobileIndex(i => Math.max(0, i - 1))} disabled={mobileIndex === 0} className="size-9 rounded-full border border-white/20 flex items-center justify-center text-white disabled:opacity-30 hover:bg-white/10 transition" aria-label="Previous">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" pointerEvents="none"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <span className="text-xs text-gray-500 font-mono">{mobileIndex + 1} / {EDUCATION.length}</span>
          <button onClick={() => setMobileIndex(i => Math.min(EDUCATION.length - 1, i + 1))} disabled={mobileIndex === EDUCATION.length - 1} className="size-9 rounded-full border border-white/20 flex items-center justify-center text-white disabled:opacity-30 hover:bg-white/10 transition" aria-label="Next">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" pointerEvents="none"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        </div>

        {EDUCATION.map((edu, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInFromLeft(index * 0.2)}
            className={`w-full max-w-lg p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-purple-500/30 transition-all duration-500 relative overflow-hidden group ${index === mobileIndex ? "" : "hidden md:block"}`}
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

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-full object-cover"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
