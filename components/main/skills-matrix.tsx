"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SKILLS_MATRIX } from "@/constants";

export const SkillsMatrix = () => {
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
        className="flex flex-col items-center justify-center max-w-4xl px-6 lg:px-10"
      >
        <div className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mb-10">
          <h1 className="Welcome-text text-[13px]">Skills Matrix</h1>
        </div>

        <div className="w-full overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-[#7042f88b]">
                <th className="text-left py-3 px-4 text-gray-300 font-semibold">Area</th>
                <th className="text-left py-3 px-4 text-gray-300 font-semibold">Skills & Technologies</th>
              </tr>
            </thead>
            <tbody>
              {SKILLS_MATRIX.map((row, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border-b border-[#7042f83a] hover:bg-[#7042f81a] transition"
                >
                  <td className="py-3 px-4 text-[#b49bff] font-medium">{row.area}</td>
                  <td className="py-3 px-4 text-gray-400">{row.skills}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </section>
  );
};
