"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TESTIMONIALS } from "@/constants";
import { QuoteIcon, ChevronRightIcon } from "@/components/svg-icons";

export const Testimonials = () => {
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
        className="flex flex-col items-center justify-center max-w-5xl px-6 lg:px-10"
      >
        <div className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mb-10">
          <h1 className="Welcome-text text-[13px]">Testimonials</h1>
        </div>

        <div className="relative w-full">
          <div
            ref={scrollRef}
            className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible scroll-smooth w-full pb-2"
          >
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="shrink-0 w-[80vw] md:w-auto md:shrink p-6 rounded-lg bg-[#0300145e] border border-[#7042f88b] backdrop-blur-sm"
            >
              <QuoteIcon className="h-8 w-8 text-[#7042f88b] mb-4" />
              <p className="text-gray-300 text-sm leading-relaxed mb-4 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="text-white font-medium text-sm">{t.author}</p>
                <p className="text-gray-500 text-xs">{t.role}</p>
              </div>
            </motion.div>
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
