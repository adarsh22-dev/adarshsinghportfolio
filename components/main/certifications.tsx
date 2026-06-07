"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

import { CERTIFICATIONS, FUTURE_CERTIFICATIONS } from "@/constants";
import { ChevronRightIcon } from "@/components/svg-icons";
import { slideInFromLeft, slideInFromTop } from "@/lib/motion";

export const Certifications = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="certifications"
      className="flex flex-col items-center justify-center py-20 relative overflow-hidden"
    >
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-600/5 blur-[150px] rounded-full pointer-events-none" />

      <motion.div
        variants={slideInFromTop}
        className="text-3xl md:text-[40px] font-medium text-center text-gray-200 mb-2 px-6"
      >
        Credentials &{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Certifications
        </span>
      </motion.div>
      <motion.p
        variants={slideInFromLeft(0.5)}
        className="text-sm md:text-lg text-gray-400 mb-10 text-center px-6"
      >
        Validated expertise from industry leaders and platforms.
      </motion.p>

      <div className="relative max-w-6xl w-full px-6 lg:px-10">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="min-w-[280px] md:min-w-[300px] p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-purple-500/30 transition-all duration-500 group shrink-0"
            >
              <div className="mb-4 w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                </svg>
              </div>

              <h3 className="text-base font-bold text-white mb-2 leading-tight group-hover:text-purple-300 transition-colors">
                {cert.title}
              </h3>

              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                  {cert.issuer}
                </span>
                <span className="text-[10px] text-gray-600">|</span>
                <span className="text-[10px] text-gray-500 font-medium">
                  {cert.date}
                </span>
              </div>

              {cert.skills && (
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {cert.skills.slice(0, 4).map((skill, i) => (
                    <span
                      key={i}
                      className="text-[9px] px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 4 && (
                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-white/5 text-gray-500">
                      +{cert.skills.length - 4}
                    </span>
                  )}
                </div>
              )}

              {cert.credentialId && (
                <p className="text-[9px] text-gray-600">
                  ID: {cert.credentialId}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[#030014] border border-white/10 flex items-center justify-center text-white hover:border-purple-500/50 transition rotate-180"
        >
          <ChevronRightIcon className="h-5 w-5" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[#030014] border border-white/10 flex items-center justify-center text-white hover:border-purple-500/50 transition"
        >
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 max-w-6xl px-6 lg:px-10 w-full"
      >
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-gray-200 mb-2">Future Targets</h3>
          <p className="text-gray-400 text-sm">Certifications in progress and planned.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FUTURE_CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:border-purple-500/20 transition"
            >
              <h4 className="text-white font-medium text-sm mb-1">{cert.title}</h4>
              <p className="text-gray-500 text-xs mb-2">{cert.issuer}</p>
              <p className="text-gray-400 text-xs">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

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

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
};