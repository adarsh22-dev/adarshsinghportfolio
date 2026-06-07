"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CONTACT_INFO } from "@/constants";
import { DownloadIcon, EmailIcon, CheckIcon } from "@/components/svg-icons";
import Link from "next/link";

export const Contact = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section id="contact" className="flex flex-col items-center justify-center py-20 relative">
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video className="w-full h-auto" preload="false" playsInline loop muted autoPlay>
            <source src="/videos/encryption-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="flex flex-col items-center justify-center max-w-4xl px-6 lg:px-10"
      >
        <div className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mb-4">
          <h1 className="Welcome-text text-[13px]">Let&apos;s Work Together</h1>
        </div>

        <div className="text-[16px] text-gray-400 mb-6 text-center max-w-xl">
          Available for full-time roles, consulting engagements, contract work, and remote positions.
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {CONTACT_INFO.availability.map((item, i) => (
            <span
              key={i}
              className="px-3 py-1.5 text-sm rounded-full bg-[#7042f81a] text-[#b49bff] border border-[#7042f84d] flex items-center gap-2"
            >
              <CheckIcon className="h-3.5 w-3.5" />
              {item}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
          <Link
            href={`mailto:${CONTACT_INFO.email}`}
            className="py-2 px-5 border border-[#7042f88b] text-center text-white cursor-pointer rounded-lg flex items-center gap-2 hover:bg-[#7042f88b] transition"
          >
            <EmailIcon className="h-4 w-4" />
            Email Me
          </Link>
          <Link
            href={CONTACT_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-5 border border-[#7042f88b] text-center text-white cursor-pointer rounded-lg flex items-center gap-2 hover:bg-[#7042f88b] transition"
          >
            <DownloadIcon className="h-4 w-4" />
            Download Resume
          </Link>
        </div>
      </motion.div>
    </section>
  );
};
