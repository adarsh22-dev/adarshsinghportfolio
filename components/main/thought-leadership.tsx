"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { THOUGHT_LEADERSHIP } from "@/constants";
import { BookOpenIcon, ChevronRightIcon } from "@/components/svg-icons";
import Link from "next/link";

export const ThoughtLeadership = () => {
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
        className="flex flex-col items-center justify-center max-w-4xl px-6 lg:px-10"
      >
        <div className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mb-10">
          <h1 className="Welcome-text text-[13px]">Thought Leadership</h1>
        </div>

        {/* Mobile Nav */}
        <div className="flex md:hidden items-center justify-center gap-4 mb-4">
          <button onClick={() => setMobileIndex(i => Math.max(0, i - 1))} disabled={mobileIndex === 0} className="size-9 rounded-full border border-white/20 flex items-center justify-center text-white disabled:opacity-30 hover:bg-white/10 transition" aria-label="Previous">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" pointerEvents="none"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <span className="text-xs text-gray-500 font-mono">{mobileIndex + 1} / {THOUGHT_LEADERSHIP.length}</span>
          <button onClick={() => setMobileIndex(i => Math.min(THOUGHT_LEADERSHIP.length - 1, i + 1))} disabled={mobileIndex === THOUGHT_LEADERSHIP.length - 1} className="size-9 rounded-full border border-white/20 flex items-center justify-center text-white disabled:opacity-30 hover:bg-white/10 transition" aria-label="Next">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" pointerEvents="none"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {THOUGHT_LEADERSHIP.map((article, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={i === mobileIndex ? "" : "hidden md:block"}
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
      </motion.div>
    </section>
  );
};
