"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";

export function PartnerSection() {
  return (
    <section className="relative w-full py-40 px-6 bg-[#050505] overflow-hidden">
      {/* Animated abstract background */}
      <div className="absolute inset-0 z-0 opacity-40">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '8s' }} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        
        {/* Closing Statement */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="mb-24"
        >
           <h2 className="text-3xl md:text-5xl font-serif italic text-white mb-8 leading-tight">
             "Technology alone has never transformed organisations. Better ways of working have."
           </h2>
           <p className="text-xl text-zinc-300 leading-relaxed max-w-3xl mx-auto mb-6">
             The organisations that thrive won't simply deploy the most AI. They'll learn to integrate human judgment and machine intelligence into workflows that are more adaptive, more trustworthy, and more effective than either could achieve alone.
           </p>
           <p className="text-lg font-medium text-white">
             That's the future Vijnova Labs is building.
           </p>
        </motion.div>

        {/* CTA */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.2 }}
           className="p-12 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />
          
          <div className="relative z-10">
            <h3 className="text-3xl font-semibold text-white mb-4">Partner With Us</h3>
            <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
              If you're a knowledge worker, organisation, or researcher interested in improving professional workflows through evidence-based AI, we'd like to hear from you.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto h-12 px-8 bg-blue-600 hover:bg-blue-500 text-white border-0 text-base rounded-full shadow-[0_0_20px_rgba(37,99,235,0.3)]">
              <a href="mailto:demo@vijnova.com?subject=Book%20a%20Demo" className="inline-flex items-center justify-center rounded-full text-base font-medium h-12 px-8 bg-blue-600 hover:bg-blue-500 text-white transition-colors">Book a Demo</a>
              <a href="mailto:hello@vijnova.com?subject=Discovery%20Call" className="inline-flex items-center justify-center rounded-full text-base font-medium h-12 px-8 border border-white/20 hover:bg-white/10 text-white transition-colors">Schedule a Discovery Call</a>
            </div>
            
            <p className="mt-8 text-sm text-zinc-500">
              Interested in research collaborations, pilot programmes, or institutional partnerships? <a href="mailto:hello@vijnova.com" className="text-blue-400 hover:underline">Get in touch.</a>
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
