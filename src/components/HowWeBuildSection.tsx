"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, BrainCircuit, Lightbulb, PenTool, UserCheck, RefreshCw } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Workflow Research",
    desc: "Interview professionals and observe how information moves through their daily work.",
    icon: Search
  },
  {
    id: 2,
    title: "Cognitive Mapping",
    desc: "Identify the decisions they make, the information they need, and the repetitive tasks consuming their attention.",
    icon: BrainCircuit
  },
  {
    id: 3,
    title: "AI Opportunity Analysis",
    desc: "Evaluate where AI can reduce effort without compromising judgment or accountability.",
    icon: Lightbulb
  },
  {
    id: 4,
    title: "Platform Design",
    desc: "Build an integrated workflow, not an isolated tool.",
    icon: PenTool
  },
  {
    id: 5,
    title: "Human Validation",
    desc: "Professionals review, refine, and approve every AI-assisted output.",
    icon: UserCheck
  },
  {
    id: 6,
    title: "Continuous Learning",
    desc: "Every deployment feeds back into the product through user feedback and new research.",
    icon: RefreshCw
  }
];

export function HowWeBuildSection() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section id="how-we-build" className="relative w-full py-32 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <h2 className="text-sm font-semibold tracking-widest text-zinc-500 uppercase mb-4">
            How We Build
          </h2>
          <h3 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight">
            Understand the work before automating it.
          </h3>
          <p className="text-lg text-zinc-400">
            Instead of asking "where can AI be added?", we start by studying how the work already happens: where professionals spend their time, where bottlenecks form, and where their judgment is doing something a model can't replicate.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line Background */}
          <div className="hidden lg:block absolute top-[40px] left-[5%] right-[5%] h-[2px] bg-white/10" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isHovered = hoveredStep === step.id;
              
              return (
                <div 
                  key={step.id} 
                  className="relative flex flex-col items-center lg:items-start group cursor-default"
                  onMouseEnter={() => setHoveredStep(step.id)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  {/* Node */}
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center border transition-all duration-300 z-10 mx-auto lg:mx-0 mb-6
                    ${isHovered 
                      ? "bg-cyan-500/20 border-cyan-500/50 text-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.2)]" 
                      : "bg-[#0d0d0d] border-white/10 text-zinc-500 group-hover:text-zinc-300"
                    }`}
                  >
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  {/* Number Indicator Removed */}

                  {/* Connecting Line Foreground (Progress on hover) */}
                  {index < steps.length - 1 && (
                    <motion.div 
                      className="hidden lg:block absolute top-[40px] left-[80px] h-[2px] bg-cyan-500 z-0 origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: isHovered ? 1 : 0 }}
                      style={{ width: "calc(100% - 20px)" }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                  )}

                  {/* Content */}
                  <div className="text-center lg:text-left w-full relative">
                    <h4 className={`text-lg font-medium mb-3 transition-colors ${isHovered ? "text-white" : "text-zinc-300"}`}>
                      {step.title}
                    </h4>
                    
                    {/* Desktop Hover Expand */}
                    <div className="hidden lg:block absolute top-10 left-0 w-[250px]">
                      <AnimatePresence>
                        {isHovered && (
                          <motion.div
                            initial={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                            transition={{ duration: 0.2 }}
                            className="bg-[#0d0d0d] border border-white/10 p-4 rounded-xl shadow-2xl relative z-30"
                          >
                            <p className="text-sm text-zinc-400 leading-relaxed">
                              {step.desc}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Mobile/Tablet Static Description */}
                    <p className="lg:hidden text-sm text-zinc-400 leading-relaxed max-w-[280px] mx-auto">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
