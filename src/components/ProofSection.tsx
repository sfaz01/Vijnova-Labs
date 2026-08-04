"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, CheckCircle2 } from "lucide-react";

export function ProofSection() {
  return (
    <section className="relative w-full py-32 px-6 bg-[#0d0d0d] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-sm font-semibold tracking-widest text-blue-500 uppercase mb-4">
            Proof It Works
          </h2>
          <h3 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight">
            Evidence-based outcomes.
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Pilot Outcome Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="p-8 rounded-3xl bg-[#050505] border border-white/10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
              <Clock className="w-24 h-24 text-blue-500" />
            </div>
            <div className="relative z-10">
              <div className="text-5xl font-semibold text-white mb-4">
                [X]<span className="text-2xl text-zinc-500 ml-2">hrs</span>
                <span className="mx-4 text-zinc-600">→</span>
                [Y]<span className="text-2xl text-zinc-500 ml-2">hrs</span>
              </div>
              <h4 className="text-xl font-medium text-white mb-2">Report-writing time reduced</h4>
              <p className="text-zinc-400">
                Counsellors using Margastra cut report-writing time per student, allowing them to focus on meaningful student interaction.
              </p>
              <div className="mt-8 inline-flex items-center text-sm font-medium text-blue-400 uppercase tracking-widest border border-blue-500/20 px-3 py-1 rounded-full bg-blue-500/10">
                Pilot Data
              </div>
            </div>
          </motion.div>

          {/* Quote Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="p-8 rounded-3xl bg-blue-500/[0.02] border border-blue-500/20 relative overflow-hidden flex flex-col justify-between"
          >
            <div className="text-6xl text-blue-500/20 font-serif leading-none absolute top-6 left-6">
              "
            </div>
            <div className="relative z-10 pt-8 flex-1">
              <p className="text-xl text-zinc-300 leading-relaxed mb-8">
                [A short, attributed quote from a counsellor, school administrator, or advisor who has used the product. Highlighting how Margastra preserved their judgment while accelerating their workflow.]
              </p>
            </div>
            <div className="relative z-10 flex items-center gap-4 border-t border-white/10 pt-6">
              <div className="w-12 h-12 rounded-full bg-white/10" />
              <div>
                <div className="text-white font-medium">[Name Surname]</div>
                <div className="text-zinc-500 text-sm">[Title, Institution]</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
