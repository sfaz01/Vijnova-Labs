"use client";

import { motion } from "framer-motion";
import { Workflow, Bot, AlertCircle, CheckCircle2 } from "lucide-react";

export function ProblemSection() {
  return (
    <section className="relative w-full py-32 px-6 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-sm font-semibold tracking-widest text-blue-500 uppercase mb-4">
              The Problem
            </h2>
            <h3 className="text-4xl md:text-5xl font-semibold text-white mb-6 leading-tight tracking-tight">
              AI adoption is broken.
            </h3>
            <div className="space-y-6 text-lg text-zinc-400">
              <p>
                Artificial intelligence has become widely accessible, yet meaningful adoption remains difficult. Many organisations invest in multiple AI tools expecting dramatic improvements, only to end up with fragmented workflows, duplicated effort, and inconsistent outputs.
              </p>
              <p>
                The issue is rarely the quality of the underlying AI models. It&apos;s that <strong className="text-zinc-200 font-medium">most tools are designed around what the technology can do, not around how the work actually gets done.</strong>
              </p>
              <p>
                Knowledge workers don&apos;t need another generic AI assistant. They need tools that understand how they make decisions, collaborate with colleagues, and serve their clients.
              </p>
            </div>
          </motion.div>

          {/* Animated Comparison Layout */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid gap-6"
          >
            {/* Generic AI Card */}
            <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <AlertCircle className="w-24 h-24 text-red-500" />
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                  <Bot className="w-5 h-5" />
                </div>
                <h4 className="text-xl font-medium text-white">Generic AI Assistants</h4>
              </div>
              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-3 text-sm text-zinc-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                  Designed around model capabilities
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                  Fragmented and duplicated workflows
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                  Opaque recommendations & black-box logic
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                  One-size-fits-all generic interface
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                  Assumption-driven automation
                </div>
              </div>
            </div>

            {/* Vijnova Approach Card */}
            <div className="p-6 rounded-2xl border border-blue-500/20 bg-blue-500/[0.03] backdrop-blur-sm relative overflow-hidden shadow-[0_0_40px_rgba(59,130,246,0.05)]">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                <CheckCircle2 className="w-24 h-24 text-blue-500" />
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Workflow className="w-5 h-5" />
                </div>
                <h4 className="text-xl font-medium text-white">The Vijnova Approach</h4>
              </div>
              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-3 text-sm text-zinc-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  Designed around human decisions & workflow
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  Integrated, end-to-end process automation
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  Transparent, evidence-based oversight
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  Domain & industry-specific customisation
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  Cognitive mapping & human-validated control
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
