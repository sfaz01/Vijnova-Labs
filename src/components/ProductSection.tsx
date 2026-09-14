"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClipboardList,
  Mic,
  FileText,
  Database,
  Network,
  Route,
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

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
  },
];

function PsychometricVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
      <svg viewBox="0 0 100 100" className="w-64 h-64 text-cyan-500">
        <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" fill="none" stroke="currentColor" strokeWidth="1" />
        <polygon points="50,20 80,35 80,65 50,80 20,65 20,35" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <motion.polygon
          points="50,15 75,32 78,62 50,82 22,62 25,32"
          fill="currentColor"
          fillOpacity={0.15}
          stroke="currentColor"
          strokeWidth="1"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <line x1="50" y1="10" x2="50" y2="50" stroke="currentColor" strokeWidth="0.5" />
        <line x1="90" y1="30" x2="50" y2="50" stroke="currentColor" strokeWidth="0.5" />
        <line x1="90" y1="70" x2="50" y2="50" stroke="currentColor" strokeWidth="0.5" />
        <line x1="50" y1="90" x2="50" y2="50" stroke="currentColor" strokeWidth="0.5" />
      </svg>
    </div>
  );
}

function InterviewVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center gap-2 pointer-events-none opacity-40">
      {[...Array(14)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ height: ["20%", `${30 + ((i * 37) % 60)}%`, "20%"] }}
          transition={{ repeat: Infinity, duration: 1.4, delay: i * 0.08, ease: "easeInOut" }}
          className="w-1 bg-cyan-500 rounded-full"
        />
      ))}
    </div>
  );
}

function ReportsVisual() {
  const lines = [90, 70, 95, 40];
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 pointer-events-none px-16">
      {lines.map((w, i) => (
        <motion.div
          key={i}
          initial={{ width: "0%" }}
          animate={{ width: `${w}%` }}
          transition={{ duration: 0.6, delay: 0.15 + i * 0.15, ease: "easeOut" }}
          className="h-2 rounded-full bg-cyan-500/30"
        />
      ))}
    </div>
  );
}

function DatabaseVisual() {
  const nodes = [
    { x: 50, y: 20 }, { x: 20, y: 45 }, { x: 80, y: 45 },
    { x: 30, y: 78 }, { x: 70, y: 78 }, { x: 50, y: 55 },
  ];
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
      <svg viewBox="0 0 100 100" className="w-64 h-64 text-cyan-500">
        {nodes.slice(1).map((n, i) => (
          <line key={i} x1={nodes[5].x} y1={nodes[5].y} x2={n.x} y2={n.y} stroke="currentColor" strokeWidth="0.5" />
        ))}
        {nodes.map((n, i) => (
          <motion.circle
            key={i}
            cx={n.x}
            cy={n.y}
            r={i === 5 ? 4 : 2.5}
            fill="currentColor"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 2, delay: i * 0.25, ease: "easeInOut" }}
          />
        ))}
      </svg>
    </div>
  );
}

function MatchingVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
      <svg viewBox="0 0 100 100" className="w-64 h-64 text-cyan-500">
        <circle cx="25" cy="30" r="6" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="25" cy="55" r="6" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="25" cy="80" r="6" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="80" cy="30" r="6" fill="currentColor" fillOpacity={0.2} stroke="currentColor" strokeWidth="1" />
        <circle cx="80" cy="55" r="6" fill="currentColor" fillOpacity={0.2} stroke="currentColor" strokeWidth="1" />
        <circle cx="80" cy="80" r="6" fill="currentColor" fillOpacity={0.2} stroke="currentColor" strokeWidth="1" />
        {[[30, 55], [55, 55], [80, 30]].map(([sy, ey], i) => (
          <motion.line
            key={i}
            x1="31" y1={sy} x2="74" y2={ey}
            stroke="currentColor" strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.8 }}
            transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
          />
        ))}
      </svg>
    </div>
  );
}

function RoadmapVisual() {
  const steps = [15, 38, 62, 85];
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-10">
      <div className="relative w-full h-[2px] bg-cyan-500/20">
        <motion.div
          className="absolute inset-y-0 left-0 bg-cyan-500/60 origin-left"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />
        {steps.map((s, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]"
            style={{ left: `${s}%` }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 + i * 0.3 }}
          />
        ))}
      </div>
    </div>
  );
}

const visuals: Record<string, () => React.ReactElement> = {
  psychometric: PsychometricVisual,
  interviews: InterviewVisual,
  reports: ReportsVisual,
  database: DatabaseVisual,
  matching: MatchingVisual,
  roadmapping: RoadmapVisual,
};

export function ProductSection() {
  const [activeFeature, setActiveFeature] = useState(features[0].id);
  const ActiveVisual = visuals[activeFeature];

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

        <Tabs
          value={activeFeature}
          onValueChange={(value) => setActiveFeature(value as string)}
          orientation="vertical"
          className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start"
        >
          {/* Feature List */}
          <TabsList
            variant="line"
            className="w-full lg:w-1/2 flex-col items-stretch gap-2 h-auto bg-transparent p-0"
          >
            {features.map((feature) => {
              const isActive = activeFeature === feature.id;
              const Icon = feature.icon;
              return (
                <TabsTrigger
                  key={feature.id}
                  value={feature.id}
                  className={`w-full h-auto justify-start text-left p-6 rounded-2xl transition-all duration-300 relative data-active:bg-white/5 data-active:border data-active:border-white/10 data-active:shadow-lg ${
                    isActive ? "opacity-100" : "opacity-60 hover:opacity-100 hover:bg-white/[0.02]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFeatureIndicator"
                      className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-cyan-500 rounded-r-full"
                    />
                  )}
                  <div className="flex items-start gap-4 w-full">
                    <div className={`p-2 rounded-lg ${isActive ? "bg-cyan-500/20 text-cyan-400" : "bg-zinc-800 text-zinc-400"}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col items-start">
                      <h4 className={`text-xl font-medium mb-2 ${isActive ? "text-white" : "text-zinc-300"}`}>
                        {feature.title}
                      </h4>
                      <AnimatePresence>
                        {isActive && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-zinc-400 text-sm leading-relaxed whitespace-normal"
                          >
                            {feature.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </TabsTrigger>
              );
            })}
          </TabsList>

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

                {/* Visual Content */}
                <div className="flex-1 p-8 flex items-center justify-center relative">
                  <div className="text-center text-zinc-600 relative z-10">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
                      {(() => {
                        const ActiveIcon = features.find((f) => f.id === activeFeature)?.icon;
                        return ActiveIcon ? <ActiveIcon className="w-8 h-8 text-cyan-500/50" /> : null;
                      })()}
                    </div>
                    <p className="font-mono text-sm uppercase tracking-widest text-zinc-500">
                      {features.find((f) => f.id === activeFeature)?.title}
                    </p>
                  </div>

                  {ActiveVisual && <ActiveVisual />}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Tabs>
      </div>
    </section>
  );
}
