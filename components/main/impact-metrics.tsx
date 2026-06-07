"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IMPACT_METRICS } from "@/constants";

function Counter({ value, label, suffix }: { value: string; label: string; suffix: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center p-6 rounded-lg bg-[#0300145e] border border-[#7042f88b] backdrop-blur-sm min-w-[160px]"
    >
      <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
        {value}{suffix}
      </span>
      <span className="text-gray-400 text-sm mt-2 text-center">{label}</span>
    </motion.div>
  );
}

export const ImpactMetrics = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [mobileIndex, setMobileIndex] = useState(0);

  return (
    <section className="flex flex-col items-center justify-center py-20 relative overflow-hidden">
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
          <h1 className="Welcome-text text-[13px]">Impact by the Numbers</h1>
        </div>

        {/* Mobile Nav */}
        <div className="flex md:hidden items-center justify-center gap-4 mb-4">
          <button onClick={() => setMobileIndex(i => Math.max(0, i - 1))} disabled={mobileIndex === 0} className="size-9 rounded-full border border-white/20 flex items-center justify-center text-white disabled:opacity-30 hover:bg-white/10 transition" aria-label="Previous">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <span className="text-xs text-gray-500 font-mono">{mobileIndex + 1} / {IMPACT_METRICS.length}</span>
          <button onClick={() => setMobileIndex(i => Math.min(IMPACT_METRICS.length - 1, i + 1))} disabled={mobileIndex === IMPACT_METRICS.length - 1} className="size-9 rounded-full border border-white/20 flex items-center justify-center text-white disabled:opacity-30 hover:bg-white/10 transition" aria-label="Next">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full">
          {IMPACT_METRICS.map((metric, i) => (
            <div key={i} className={i === mobileIndex ? "" : "hidden md:block"}>
              <Counter value={metric.value} label={metric.label} suffix={metric.suffix} />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
