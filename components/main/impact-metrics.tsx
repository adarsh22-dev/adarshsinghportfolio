"use client";

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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-full">
          {IMPACT_METRICS.map((metric, i) => (
            <Counter key={i} value={metric.value} label={metric.label} suffix={metric.suffix} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
