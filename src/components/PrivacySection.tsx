"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Server } from "lucide-react";

export function PrivacySection() {
  return (
    <section className="relative w-full py-32 px-6 bg-[#0d0d0d] border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)] rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-semibold tracking-widest text-zinc-500 uppercase mb-4">
              Data & Privacy
            </h2>
            <h3 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight">
              Security by design.
            </h3>
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
              Margastra handles psychometric assessment results and interview transcripts — sensitive personal data. We treat this data with the highest level of security and respect.
            </p>
            <p className="text-lg text-zinc-400 leading-relaxed">
              [Placeholder: Add 2-3 sentences on how assessment and interview data is stored and secured, who can access it, whether data is used to train models beyond the individual's own report, and relevant compliance standards (e.g. GDPR, FERPA, SOC 2).]
            </p>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="grid gap-4"
          >
            <div className="p-6 rounded-2xl border border-white/5 bg-[#050505] flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center relative">
                 <Lock className="w-5 h-5 text-blue-500" />
                 <motion.div 
                   animate={{ rotate: [0, 10, -10, 0] }} 
                   transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", repeatDelay: 5 }}
                   className="absolute inset-0 border border-blue-500/30 rounded-full"
                 />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">End-to-End Encryption</h4>
                <p className="text-sm text-zinc-500">Data is encrypted at rest and in transit.</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-white/5 bg-[#050505] flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                 <Server className="w-5 h-5 text-purple-500" />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Isolated Environments</h4>
                <p className="text-sm text-zinc-500">Your data is never mixed with public training data.</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-white/5 bg-[#050505] flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
                 <Shield className="w-5 h-5 text-emerald-500" />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Strict Access Controls</h4>
                <p className="text-sm text-zinc-500">Only authorized professionals can view sensitive insights.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
