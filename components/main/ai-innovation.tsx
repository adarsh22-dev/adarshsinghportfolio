"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AI_INNOVATION } from "@/constants";
import { BrainIcon } from "@/components/svg-icons";

export const AiInnovation = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section id="ai-lab" className="flex flex-col items-center justify-center py-20 relative overflow-hidden">
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video className="w-full h-full object-cover" preload="false" playsInline loop muted autoPlay>
            <source src="/videos/encryption-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="flex flex-col items-center justify-center max-w-6xl px-6 lg:px-10"
      >
        <div className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mb-4">
          <h1 className="Welcome-text text-[13px]">AI Engineering & Innovation Lab</h1>
        </div>

        <div className="text-[16px] text-gray-400 mb-10 text-center max-w-2xl">
          Exploring and building the next generation of AI-powered systems. From autonomous agents to intelligent automation.
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
          {AI_INNOVATION.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-4 rounded-lg bg-[#0300145e] border border-[#7042f88b] backdrop-blur-sm group hover:border-purple-500 transition"
            >
              <BrainIcon className="h-6 w-6 text-[#b49bff] mb-2 group-hover:text-purple-400 transition" />
              <h3 className="text-white font-medium mb-1">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
