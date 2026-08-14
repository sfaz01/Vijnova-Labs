"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const values = [
  {
    title: "Evidence Before Assumption",
    desc: "Every product should be informed by research and measurable outcomes, not intuition alone."
  },
  {
    title: "Human Agency Before Automation",
    desc: "Technology should expand what professionals can do, not diminish their responsibility or judgment."
  },
  {
    title: "Systems Thinking",
    desc: "We design for the workflow an individual task sits inside, not the task in isolation."
  },
  {
    title: "Trust Through Transparency",
    desc: "Professionals should understand how a recommendation was generated and retain real oversight over important decisions."
  }
];

export function AboutSection() {
  return (
    <section id="about" className="relative w-full py-32 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        
        {/* Why We Started & Mission */}
        <div className="grid md:grid-cols-2 gap-16 mb-32">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl font-medium text-white mb-6">Why We Started</h2>
            <p className="text-zinc-400 leading-relaxed text-lg">
              Many professionals still struggle to find AI tools that genuinely improve how they work - they're often asked to adapt their workflow to the technology, rather than the other way around. We started Vijnova Labs to build software the other way: understand how professionals think and decide, then design AI that fits into that process.
            </p>
          </motion.div>
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="p-8 rounded-3xl bg-blue-500/[0.02] border border-blue-500/10"
          >
            <h2 className="text-sm font-semibold tracking-widest text-blue-500 uppercase mb-4">Our Mission</h2>
            <p className="text-2xl text-white font-medium leading-tight">
              To turn advances in AI into evidence-based, domain-specific software that helps knowledge workers make better decisions and work more effectively - without replacing the judgment, accountability, and empathy only they can provide.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <div className="mb-32">
          <h2 className="text-3xl font-semibold text-white mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]"
              >
                <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center mb-6">
                  <Check className="w-4 h-4 text-blue-500" />
                </div>
                <h3 className="text-lg font-medium text-white mb-3">{value.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Looking Ahead */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-sm font-semibold tracking-widest text-zinc-500 uppercase mb-4">Looking Ahead</h2>
          <p className="text-xl text-zinc-300 leading-relaxed">
            Margastra is our first product, focused on career counselling. As we learn more about how professionals in other fields work, we plan to bring the same approach to other knowledge-intensive professions.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
