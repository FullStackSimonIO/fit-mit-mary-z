"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function CTAButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Button
        className="bg-[#2D4542] hover:bg-[#1A2A29] text-white font-semibold py-2 px-4 rounded-full shadow-lg transition-all duration-300 ease-in-out
                   text-sm sm:text-base md:text-lg
                   w-full sm:w-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Termin sichern!
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 ml-2 inline-block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          initial={false}
          animate={{ x: isHovered ? 5 : 0 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </motion.svg>
      </Button>
    </motion.div>
  );
}
