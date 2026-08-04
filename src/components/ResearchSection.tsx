"use client";

import { motion } from "framer-motion";

const disciplines = [
  "Industrial & Organisational Psychology",
  "Cognitive Science",
  "Human-Computer Interaction",
  "Organisational Design",
  "Behavioural Science",
  "Artificial Intelligence",
  "Knowledge Representation",
  "Decision Science"
];

export function ResearchSection() {
  return (
    <section id="research" className="relative w-full py-32 px-6 bg-[#0d0d0d] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-semibold tracking-widest text-zinc-500 uppercase mb-4">
              Research
            </h2>
            <h3 className="text-4xl font-semibold text-white mb-6 tracking-tight">
              Evidence over intuition.
            </h3>
            <p className="text-lg text-zinc-400 mb-8 max-w-lg">
              As Vijnova grows, we intend to publish white papers, technical reports, and practical insights from our product development.
            </p>
            
            <div className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/10 text-sm font-medium text-zinc-400 bg-white/5 cursor-not-allowed">
              Publications (Coming Soon)
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="bg-[#050505] p-8 md:p-12 rounded-3xl border border-white/5"
          >
            <h4 className="font-serif text-2xl text-white mb-8 italic text-zinc-300">
              Our work draws on multiple disciplines:
            </h4>
            <div className="flex flex-wrap gap-3">
              {disciplines.map((d, i) => (
                <div key={i} className="px-4 py-2 rounded-full border border-white/10 text-sm text-zinc-400 bg-white/[0.02]">
                  {d}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
