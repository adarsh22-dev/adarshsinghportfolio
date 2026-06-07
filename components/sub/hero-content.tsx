"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { DownloadIcon, EmailIcon, ExternalLinkIcon, GitHubIcon, LinkedInIcon, SparkleIcon } from "@/components/svg-icons";
import { CONTACT_INFO } from "@/constants";
import {
  slideInFromLeft,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-6 lg:px-20 mt-32 sm:mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] max-w-full"
        >
          <SparkleIcon className="text-[#b49bff] mr-[10px] h-5 w-5 shrink-0" />
          <h1 className="Welcome-text text-[10px] sm:text-[13px] whitespace-nowrap overflow-hidden text-ellipsis">
            Senior Shopify Plus Engineer | Frontend Architect | AI Automation Developer
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-3xl sm:text-5xl lg:text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Adarsh{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Vinod Kumar
            </span>{" "}
            Singh
          </span>
          <span className="text-xl sm:text-2xl lg:text-3xl text-gray-300">
            Building{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              AI-powered
            </span>{" "}
            digital commerce solutions.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Software Engineer with 6+ years of experience delivering enterprise-grade ecommerce, AI automation, cloud applications, and digital transformation solutions.
          Specialized in Shopify Plus, React, Next.js, AI Agents, Agentic Workflows, RAG Systems, and Enterprise Integrations.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-row gap-4 flex-wrap"
        >
          <Link
            href={CONTACT_INFO.resumeUrl}
            className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg flex items-center gap-2 text-sm"
          >
            <DownloadIcon className="h-4 w-4" />
            Download Resume
          </Link>
          <Link
            href={`mailto:${CONTACT_INFO.email}`}
            className="py-2 px-4 border border-[#7042f88b] text-center text-white cursor-pointer rounded-lg flex items-center gap-2 hover:bg-[#7042f88b] transition text-sm"
          >
            <EmailIcon className="h-4 w-4" />
            Email Me
          </Link>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(1.2)}
          className="flex flex-row gap-4 mt-4"
        >
          <Link
            href="https://www.linkedin.com/in/adarshvinodkumarsingh"
            target="_blank"
            rel="noreferrer noopener"
            className="text-gray-400 hover:text-white transition"
          >
            <LinkedInIcon className="h-6 w-6" />
          </Link>
          <Link
            href="https://github.com/adarsh22-dev"
            target="_blank"
            rel="noreferrer noopener"
            className="text-gray-400 hover:text-white transition"
          >
            <GitHubIcon className="h-6 w-6" />
          </Link>
          <Link
            href="mailto:adarshsingh55555ac@gmail.com"
            className="text-gray-400 hover:text-white transition"
          >
            <EmailIcon className="h-6 w-6" />
          </Link>
          <Link
            href="https://portfolio-7nhi.vercel.app/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-gray-400 hover:text-white transition"
          >
            <ExternalLinkIcon className="h-6 w-6" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};
