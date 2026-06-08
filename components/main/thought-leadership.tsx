"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { THOUGHT_LEADERSHIP } from "@/constants";
import { BookOpenIcon, ChevronRightIcon } from "@/components/svg-icons";
import Link from "next/link";

export const ThoughtLeadership = () => {
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
        className="flex flex-col items-center justify-center max-w-4xl px-6 lg:px-10"
      >
        <div className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mb-10">
          <h1 className="Welcome-text text-[13px]">Thought Leadership</h1>
        </div>

        <div className="relative w-full">
          <div
            ref={scrollRef}
            className="flex md:grid md:grid-cols-2 gap-4 overflow-x-auto md:overflow-visible scroll-smooth w-full pb-2"
          >
            {THOUGHT_LEADERSHIP.map((article, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="shrink-0 w-[80vw] md:w-auto md:shrink"
              >
                <Link
                  href={article.link}
                  className="p-5 rounded-lg bg-[#0300145e] border border-[#7042f88b] backdrop-blur-sm flex items-start gap-4 group hover:border-purple-500 transition block"
                >
                  <BookOpenIcon className="h-6 w-6 text-[#b49bff] shrink-0 mt-0.5 group-hover:text-purple-400 transition" />
                  <div className="flex-1">
                    <h3 className="text-white font-medium mb-1 group-hover:text-[#b49bff] transition">{article.title}</h3>
                    <p className="text-gray-400 text-sm">{article.description}</p>
                  </div>
                  <ChevronRightIcon className="h-5 w-5 text-gray-500 shrink-0 mt-1 group-hover:text-[#b49bff] transition" />
                </Link>
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
