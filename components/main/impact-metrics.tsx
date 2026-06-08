"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IMPACT_METRICS } from "@/constants";
import { ChevronRightIcon } from "@/components/svg-icons";

function Counter({ value, label, suffix }: { value: string; label: string; suffix: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center p-4 sm:p-6 rounded-lg bg-[#0300145e] border border-[#7042f88b] backdrop-blur-sm min-w-[140px] sm:min-w-[160px]"
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
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <section className="flex flex-col items-center justify-center py-10 md:py-20 relative overflow-hidden">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="flex flex-col items-center justify-center max-w-6xl px-6 lg:px-10"
      >
        <div className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mb-10">
          <h1 className="Welcome-text text-[13px]">Impact by the Numbers</h1>
        </div>

        <div className="relative w-full">
          <div
            ref={scrollRef}
            className="flex md:grid md:grid-cols-3 lg:grid-cols-6 gap-4 overflow-x-auto md:overflow-visible scroll-smooth w-full pb-2"
          >
            {IMPACT_METRICS.map((metric, i) => (
              <div key={i} className="shrink-0 w-[40vw] md:w-auto md:shrink">
                <Counter value={metric.value} label={metric.label} suffix={metric.suffix} />
              </div>
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
