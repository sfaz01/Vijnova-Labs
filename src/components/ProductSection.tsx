"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ClipboardList, 
  Mic, 
  FileText, 
  Database, 
  Network, 
  Route 
} from "lucide-react";

const features = [
  {
    id: "psychometric",
    title: "Psychometric Assessment",
    description: "Administer validated assessments and generate structured psychological profiles as the foundation of career guidance.",
    icon: ClipboardList,
  },
  {
    id: "interviews",
    title: "AI-Assisted Interviews",
    description: "Generate interview guides informed by psychometric results. Session transcripts can be analysed to surface themes, strengths, concerns, and aspirations.",
    icon: Mic,
  },
  {
    id: "reports",
    title: "Evidence-Based Reports",
    description: "An LLM integrates psychometric findings with interview insights to draft a career report. Reviewed, edited, and approved by the counsellor.",
    icon: FileText,
  },
  {
    id: "database",
    title: "Occupational Intelligence",
    description: "A structured database of roles, competencies, skills, educational pathways, and progression routes across industries.",
    icon: Database,
  },
  {
    id: "matching",
    title: "Rule-Based Matching",
    description: "Match a person's psychological profile, interests, and competencies to suitable occupations using transparent, rule-based logic.",
    icon: Network,
  },
  {
    id: "roadmapping",
    title: "Career Roadmapping",
    description: "Build long-term career plans incorporating education, certifications, and milestones. Progress tracking is planned for a future release.",
    icon: Route,
  }
];

export function ProductSection() {
  const [activeFeature, setActiveFeature] = useState(features[0].id);

  return (
    <section id="product" className="relative w-full py-32 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-sm font-semibold tracking-widest text-cyan-500 uppercase mb-4">
            Our Product
          </h2>
          <h3 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight">
            Meet Margastra
          </h3>
          <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
            An integrated platform that helps career counsellors deliver more structured, evidence-based, and personalised guidance - while keeping professional judgment at the centre of every decision.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Feature List */}
          <div className="w-full lg:w-1/2 flex flex-col gap-2">
            {features.map((feature) => {
              const isActive = activeFeature === feature.id;
              const Icon = feature.icon;
              return (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(feature.id)}
                  className={`text-left p-6 rounded-2xl transition-all duration-300 relative ${
                    isActive 
                      ? "bg-white/5 border border-white/10 shadow-lg" 
                      : "hover:bg-white/[0.02] border border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFeatureIndicator"
                      className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-cyan-500 rounded-r-full"
                    />
                  )}
                  <div className="flex items-start gap-4">
                    <div className={`p-2 rounded-lg ${isActive ? "bg-cyan-500/20 text-cyan-400" : "bg-zinc-800 text-zinc-400"}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className={`text-xl font-medium mb-2 ${isActive ? "text-white" : "text-zinc-300"}`}>
                        {feature.title}
                      </h4>
                      <AnimatePresence>
                        {isActive && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-zinc-400 text-sm leading-relaxed"
                          >
                            {feature.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Interactive Feature Visuals */}
          <div className="w-full lg:w-1/2 h-[500px] lg:h-[600px] rounded-3xl border border-white/10 bg-[#0d0d0d] relative overflow-hidden flex items-center justify-center p-8">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.1)_0%,transparent_70%)]" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full h-full border border-white/5 bg-[#050505] rounded-2xl shadow-2xl flex flex-col overflow-hidden"
              >
                {/* Mock Browser/App Header */}
                <div className="h-12 border-b border-white/5 bg-white/[0.02] flex items-center px-4 gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                </div>
                
                {/* Visual Content Placeholder */}
                <div className="flex-1 p-8 flex items-center justify-center relative">
                  <div className="text-center text-zinc-600">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
                       {/* Dynamically render icon for current active visual */}
                       {(() => {
                         const ActiveIcon = features.find(f => f.id === activeFeature)?.icon;
                         return ActiveIcon ? <ActiveIcon className="w-8 h-8 text-cyan-500/50" /> : null;
                       })()}
                    </div>
                    <p className="font-mono text-sm uppercase tracking-widest text-zinc-500">
                      Visualizer: {features.find(f => f.id === activeFeature)?.title}
                    </p>
                  </div>
                  
                  {/* Decorative abstract elements based on active tab to make it feel premium */}
                  {activeFeature === 'psychometric' && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                      <svg viewBox="0 0 100 100" className="w-64 h-64 text-cyan-500">
                        <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" fill="none" stroke="currentColor" strokeWidth="1" />
                        <polygon points="50,20 80,35 80,65 50,80 20,65 20,35" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        <line x1="50" y1="10" x2="50" y2="50" stroke="currentColor" strokeWidth="0.5" />
                        <line x1="90" y1="30" x2="50" y2="50" stroke="currentColor" strokeWidth="0.5" />
                        <line x1="90" y1="70" x2="50" y2="50" stroke="currentColor" strokeWidth="0.5" />
                        <line x1="50" y1="90" x2="50" y2="50" stroke="currentColor" strokeWidth="0.5" />
                      </svg>
                    </div>
                  )}
                  {activeFeature === 'interviews' && (
                    <div className="absolute inset-0 flex items-center justify-center gap-2 pointer-events-none opacity-30">
                       {[...Array(12)].map((_, i) => (
                         <motion.div 
                           key={i}
                           animate={{ height: ["20%", "80%", "20%"] }}
                           transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.1 }}
                           className="w-1 bg-cyan-500 rounded-full"
                         />
                       ))}
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
