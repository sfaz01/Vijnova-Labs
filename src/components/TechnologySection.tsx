"use client";

import { motion } from "framer-motion";
import { MessageSquare, FileOutput, Share2, Scale, Eye } from "lucide-react";

const techStack = [
  {
    title: "Natural Language Processing",
    desc: "Interview transcription and structured insight extraction.",
    icon: MessageSquare,
    color: "from-blue-500/20 to-blue-600/5",
    borderColor: "border-blue-500/30"
  },
  {
    title: "Large Language Models",
    desc: "Drafting reports and summarising complex information.",
    icon: FileOutput,
    color: "from-indigo-500/20 to-indigo-600/5",
    borderColor: "border-indigo-500/30"
  },
  {
    title: "Knowledge Graphs",
    desc: "Organising occupational intelligence and skill relationships.",
    icon: Share2,
    color: "from-purple-500/20 to-purple-600/5",
    borderColor: "border-purple-500/30"
  },
  {
    title: "Rule-Based Systems",
    desc: "Transparent, explainable matching without black-box logic.",
    icon: Scale,
    color: "from-cyan-500/20 to-cyan-600/5",
    borderColor: "border-cyan-500/30"
  },
  {
    title: "Human-in-the-Loop",
    desc: "Professional oversight at every critical step of the workflow.",
    icon: Eye,
    color: "from-emerald-500/20 to-emerald-600/5",
    borderColor: "border-emerald-500/30"
  }
];

export function TechnologySection() {
  return (
    <section className="relative w-full py-32 px-6 bg-[#0d0d0d] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0%,transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm font-semibold tracking-widest text-zinc-500 uppercase mb-4">
            Technology
          </h2>
          <h3 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight">
            An ensemble of intelligence.
          </h3>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Our platforms combine several AI technologies, each solving a specific problem within a professional's workflow, rather than relying on a single model to do everything.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto mt-24">
           {/* Abstract Node Graph Background */}
           <div className="absolute inset-0 hidden md:block opacity-20 pointer-events-none">
             <svg className="w-full h-full" style={{ minHeight: '400px' }}>
                <path d="M 200,100 C 400,100 300,300 500,300" fill="none" stroke="currentColor" strokeWidth="1" className="text-blue-500" />
                <path d="M 500,300 C 700,300 600,100 800,100" fill="none" stroke="currentColor" strokeWidth="1" className="text-purple-500" />
                <path d="M 500,300 C 600,450 700,450 800,300" fill="none" stroke="currentColor" strokeWidth="1" className="text-cyan-500" />
                <path d="M 200,300 C 300,450 400,450 500,300" fill="none" stroke="currentColor" strokeWidth="1" className="text-emerald-500" />
             </svg>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
              {techStack.map((tech, i) => {
                const Icon = tech.icon;
                const isCenter = i === 4;
                return (
                  <motion.div
                    key={tech.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className={`p-6 rounded-3xl border bg-gradient-to-br bg-[#050505] backdrop-blur-md hover:scale-[1.02] transition-transform ${tech.borderColor} ${isCenter ? 'md:col-span-2 lg:col-span-3 max-w-xl mx-auto' : ''}`}
                  >
                    <div className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br ${tech.color} border ${tech.borderColor}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-medium text-white mb-2">{tech.title}</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">{tech.desc}</p>
                  </motion.div>
                )
              })}
           </div>
        </div>
      </div>
    </section>
  );
}
