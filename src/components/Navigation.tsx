"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";

export function Navigation() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setHasScrolled(latest > 50);
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        hasScrolled
          ? "bg-[#050505]/70 backdrop-blur-lg border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
            <div className="w-3 h-3 bg-blue-500 rounded-sm" />
          </div>
          <span className="font-semibold text-lg tracking-tight">
            Vijnova Labs
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <Link href="#product" className="hover:text-white transition-colors">
            Product
          </Link>
          <Link href="#how-we-build" className="hover:text-white transition-colors">
            How We Build
          </Link>
          <Link href="#research" className="hover:text-white transition-colors">
            Research
          </Link>
          <Link href="#about" className="hover:text-white transition-colors">
            About
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden md:inline-flex text-zinc-400 hover:text-white">
            Sign In
          </Button>
          <a 
            href="mailto:demo@vijnova.com?subject=Book%20a%20Demo"
            className="hidden md:inline-flex px-5 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors"
          >
            Book a Demo
          </a>
        </div>
      </div>
    </motion.header>
  );
}
