"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CodeIcon, BrainIcon, BriefcaseIcon } from "@/components/svg-icons";

const architectures = [
  {
    title: "Shopify Plus Architecture",
    icon: BriefcaseIcon,
    layers: [
      "Headless Frontend (Next.js)",
      "Shopify Storefront API / GraphQL",
      "Custom Checkout Extensions",
      "Theme App Extensions",
      "Shopify Admin API",
    ],
  },
  {
    title: "AI Agent Architecture",
    icon: BrainIcon,
    layers: [
      "LLM Orchestration Layer",
      "Agent Decision Engine",
      "RAG Pipeline / Vector Store",
      "Tool Integration (MCP)",
      "Monitoring & Guardrails",
    ],
  },
  {
    title: "Full-Stack Architecture",
    icon: CodeIcon,
    layers: [
      "Frontend (React / Next.js)",
      "API Layer (REST / GraphQL)",
      "Backend Services (Node.js)",
      "Database (PostgreSQL / MongoDB)",
      "Cloud Infrastructure (AWS / Vercel)",
    ],
  },
];

export const TechArchitecture = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section className="flex flex-col items-center justify-center py-10 md:py-20 relative overflow-hidden">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="flex flex-col items-center justify-center max-w-6xl px-6 lg:px-10"
      >
        <div className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mb-10">
          <h1 className="Welcome-text text-[13px]">Technical Architecture</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {architectures.map((arch, i) => {
            const Icon = arch.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="p-6 rounded-lg bg-[#0300145e] border border-[#7042f88b] backdrop-blur-sm"
              >
                <Icon className="h-8 w-8 text-[#b49bff] mb-4" />
                <h3 className="text-lg font-semibold text-white mb-4">{arch.title}</h3>
                <div className="space-y-3">
                  {arch.layers.map((layer, j) => (
                    <div
                      key={j}
                      className="flex items-center gap-3 p-2 rounded bg-[#0300148a] border border-[#7042f84d]"
                    >
                      <div className="w-2 h-2 rounded-full bg-purple-500 shrink-0" />
                      <span className="text-gray-300 text-sm">{layer}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};
