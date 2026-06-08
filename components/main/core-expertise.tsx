"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CORE_EXPERTISE } from "@/constants";
import { BrainIcon, BriefcaseIcon, CloudIcon, CodeIcon } from "@/components/svg-icons";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  BriefcaseIcon,
  CodeIcon,
  BrainIcon,
  CloudIcon,
};

export const CoreExpertise = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [mobileIndex, setMobileIndex] = useState(0);

  return (
    <section className="flex flex-col items-center justify-center py-10 md:py-20 relative overflow-hidden">
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
          <h1 className="Welcome-text text-[13px]">Core Expertise</h1>
        </div>

        {/* Mobile Nav */}
        <div className="flex md:hidden items-center justify-center gap-4 mb-4">
          <button onClick={() => setMobileIndex(i => Math.max(0, i - 1))} disabled={mobileIndex === 0} className="size-9 rounded-full border border-white/20 flex items-center justify-center text-white disabled:opacity-30 hover:bg-white/10 transition" aria-label="Previous">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" pointerEvents="none"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <span className="text-xs text-gray-500 font-mono">{mobileIndex + 1} / {CORE_EXPERTISE.length}</span>
          <button onClick={() => setMobileIndex(i => Math.min(CORE_EXPERTISE.length - 1, i + 1))} disabled={mobileIndex === CORE_EXPERTISE.length - 1} className="size-9 rounded-full border border-white/20 flex items-center justify-center text-white disabled:opacity-30 hover:bg-white/10 transition" aria-label="Next">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" pointerEvents="none"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {CORE_EXPERTISE.map((area, i) => {
            const Icon = iconMap[area.icon] || CodeIcon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-6 rounded-lg bg-[#0300145e] border border-[#7042f88b] backdrop-blur-sm ${i === mobileIndex ? "" : "hidden md:block"}`}
              >
                <Icon className="h-8 w-8 text-[#b49bff] mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{area.category}</h3>
                <p className="text-gray-400 text-sm mb-3">{area.description}</p>
                <div className="flex flex-wrap gap-2">
                  {area.skills.map((skill, j) => (
                    <span
                      key={j}
                      className="px-2 py-1 text-xs rounded-full bg-[#7042f81a] text-[#b49bff] border border-[#7042f84d]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};
