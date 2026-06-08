"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { OPEN_SOURCE } from "@/constants";
import { GitHubIcon, ExternalLinkIcon, ChevronRightIcon } from "@/components/svg-icons";
import Link from "next/link";

export const OpenSource = () => {
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
          <h1 className="Welcome-text text-[13px]">Open Source Contributions</h1>
        </div>

        <div className="relative w-full">
          <div
            ref={scrollRef}
            className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-x-auto sm:overflow-visible scroll-smooth w-full pb-2"
          >
            {OPEN_SOURCE.map((repo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="shrink-0 w-[80vw] sm:w-auto sm:shrink p-5 rounded-lg bg-[#0300145e] border border-[#7042f88b] backdrop-blur-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <GitHubIcon className="h-5 w-5 text-gray-400" />
                  <Link
                    href={repo.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-white font-medium hover:text-[#b49bff] transition flex items-center gap-1"
                  >
                    {repo.name}
                    <ExternalLinkIcon className="h-3 w-3" />
                  </Link>
                </div>
                <p className="text-gray-400 text-sm mb-3">{repo.description}</p>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span className="px-2 py-0.5 rounded bg-[#7042f81a] text-[#b49bff]">{repo.language}</span>
                  <span>{repo.stars}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <button onClick={() => scroll("left")} className="sm:hidden absolute left-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-[#030014] border border-white/20 flex items-center justify-center text-white hover:border-purple-500/50 transition rotate-180">
            <ChevronRightIcon className="h-4 w-4" />
          </button>
          <button onClick={() => scroll("right")} className="sm:hidden absolute right-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-[#030014] border border-white/20 flex items-center justify-center text-white hover:border-purple-500/50 transition">
            <ChevronRightIcon className="h-4 w-4" />
          </button>
        </div>
      </motion.div>
    </section>
  );
};
