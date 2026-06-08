"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { COMMUNITY_LEADERSHIP } from "@/constants";
import { BookOpenIcon, MessageCircleIcon, UsersIcon, ChevronRightIcon } from "@/components/svg-icons";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  UsersIcon,
  BookOpenIcon,
  MessageCircleIcon,
};

export const CommunityLeadership = () => {
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
          <h1 className="Welcome-text text-[13px]">Leadership & Community</h1>
        </div>

        <div className="relative w-full">
          <div
            ref={scrollRef}
            className="flex sm:grid sm:grid-cols-2 gap-4 overflow-x-auto sm:overflow-visible scroll-smooth w-full pb-2"
          >
            {COMMUNITY_LEADERSHIP.map((item, i) => {
              const Icon = iconMap[item.icon] || UsersIcon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="shrink-0 w-[80vw] sm:w-auto sm:shrink p-5 rounded-lg bg-[#0300145e] border border-[#7042f88b] backdrop-blur-sm flex items-start gap-4"
                >
                  <Icon className="h-8 w-8 text-[#b49bff] shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-medium mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
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
