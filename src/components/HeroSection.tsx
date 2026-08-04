"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0%,transparent_50%)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-sm font-medium text-zinc-300">
            Designing the next generation of organisational intelligence
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-8 leading-[1.1]"
        >
          The future belongs not to organisations with the most AI,{" "}
          <span className="text-zinc-500">
            but to those that best combine human judgment with machine intelligence.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-zinc-400 max-w-3xl mb-12"
        >
          Vijnova Labs builds evidence-based AI software for knowledge work. We
          study how professionals actually make decisions, then design tools that
          support that process — starting with career counselling.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Button size="lg" className="w-full sm:w-auto h-12 px-8 bg-white text-black hover:bg-zinc-200 text-base rounded-full">
            Book a Demo
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 px-8 border-white/10 hover:bg-white/5 text-base rounded-full gap-2">
            <Play className="w-4 h-4" />
            See How Margastra Works
          </Button>
        </motion.div>

        {/* Abstract Systems Diagram Graphic (Placeholder for "Human + Machine") */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="mt-24 relative w-full max-w-4xl h-[400px] border border-white/10 rounded-2xl bg-black/40 backdrop-blur-sm overflow-hidden flex items-center justify-center shadow-2xl shadow-blue-500/5"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050505] z-10" />
          
          <div className="relative w-full h-full flex items-center justify-center z-0">
             {/* Decorative grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
            
            {/* Abstract visual nodes */}
            <div className="relative flex items-center gap-16">
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md">
                   <div className="w-6 h-6 rounded-full border-2 border-zinc-500" />
                </div>
                <span className="text-xs text-zinc-500 font-medium tracking-widest uppercase">Human</span>
              </div>
              
              <div className="flex flex-col gap-2">
                <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent relative">
                  <motion.div 
                    animate={{ x: [0, 128] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    className="absolute top-1/2 -translate-y-1/2 w-4 h-[2px] bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.8)]"
                  />
                </div>
                <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent relative">
                   <motion.div 
                    animate={{ x: [128, 0] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                    className="absolute top-1/2 -translate-y-1/2 w-4 h-[2px] bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]"
                  />
                </div>
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center backdrop-blur-md relative overflow-hidden">
                   <div className="absolute inset-0 bg-blue-500/20 blur-xl" />
                   <div className="w-4 h-4 bg-blue-400 rounded-sm shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
                </div>
                <span className="text-xs text-blue-400/80 font-medium tracking-widest uppercase">Intelligence</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
