"use client";

import { motion } from "framer-motion";
import { Settings2, BookOpen, Briefcase, Blocks } from "lucide-react";

const reasons = [
  {
    title: "Workflow-First, Not Model-First",
    desc: "We design around how professionals actually work, not around what a model can technically do. Meaningful productivity gains come from removing unnecessary effort, not from adding another assistant.",
    icon: Settings2
  },
  {
    title: "Evidence-Based Design",
    desc: "Our products draw on established research in psychology and organisational behaviour, not intuition.",
    icon: BookOpen
  },
  {
    title: "Industry-Specific, Not Generic",
    desc: "Every profession has different requirements. We build for specific workflows rather than a one-size-fits-all assistant.",
    icon: Briefcase
  },
  {
    title: "Modular by Design",
    desc: "New capabilities can be added as an organisation's needs change, without rebuilding the platform.",
    icon: Blocks
  }
];

export function WhyVijnovaSection() {
  return (
    <section className="relative w-full py-32 px-6 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-sm font-semibold tracking-widest text-zinc-500 uppercase mb-4">
            Why Vijnova
          </h2>
          <h3 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight">
            Built differently.
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-zinc-300" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-white mb-3">{reason.title}</h4>
                  <p className="text-zinc-400 leading-relaxed">{reason.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
