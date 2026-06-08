"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CORE_EXPERTISE } from "@/constants";
import { BrainIcon, BriefcaseIcon, CloudIcon, CodeIcon, ChevronRightIcon } from "@/components/svg-icons";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  BriefcaseIcon,
  CodeIcon,
  BrainIcon,
  CloudIcon,
};

export const CoreExpertise = () => {
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
          <h1 className="Welcome-text text-[13px]">Core Expertise</h1>
        </div>

        <div className="relative w-full">
          <div
            ref={scrollRef}
            className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto md:overflow-visible scroll-smooth w-full pb-2"
          >
            {CORE_EXPERTISE.map((area, i) => {
              const Icon = iconMap[area.icon] || CodeIcon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="shrink-0 w-[350px] md:w-auto md:shrink p-4 sm:p-6 rounded-lg bg-[#0300145e] border border-[#7042f88b] backdrop-blur-sm"
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
