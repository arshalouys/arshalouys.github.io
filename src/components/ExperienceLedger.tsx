import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioExperience } from '../data/portfolioData';
import type { ExperienceItem } from '../data/portfolioData';
import { ChevronDown, ChevronUp, MapPin, Sparkles } from 'lucide-react';

export const ExperienceLedger = () => {
  const [expandedId, setExpandedId] = useState<string | null>('exp-1');

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section id="ledger" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto hairline-border-b">
      
      {/* Section Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <h2 className="text-3xl sm:text-5xl font-light text-[#f3f3f1] tracking-tight">
            Professional <span className="font-serif italic text-[#14b8a6]">Track Record</span>
          </h2>
        </div>
        <p className="font-mono text-xs text-[#8a8985] max-w-md">
          Structured ledger replacing traditional timelines with high-density tabular metadata and engineering impact metrics.
        </p>
      </div>

      {/* Tabular Ledger Container */}
      <div className="w-full rounded-2xl bg-[#13151b] border border-white/10 overflow-hidden shadow-2xl">
        
        {/* Ledger Header Row (Desktop) */}
        <div className="hidden md:grid md:grid-cols-12 gap-4 px-6 py-4 bg-[#0c0d10]/80 border-b border-white/10 font-mono text-xs text-[#8a8985] uppercase tracking-wider">
          <div className="col-span-3">Role & Title</div>
          <div className="col-span-3">Company / Platform</div>
          <div className="col-span-2">Timeline</div>
          <div className="col-span-3">Core Tech Stack</div>
          <div className="col-span-1 text-right">Details</div>
        </div>

        {/* Ledger Rows */}
        <div className="divide-y divide-white/5">
          {portfolioExperience.map((exp: ExperienceItem, idx: number) => {
            const isExpanded = expandedId === exp.id;

            return (
              <div key={exp.id} className="flex flex-col">
                {/* Main Interactive Row */}
                <div
                  onClick={() => toggleExpand(exp.id)}
                  className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 px-6 py-5 items-center cursor-pointer hover:bg-white/[0.03] transition-colors group"
                >
                  {/* Role & Title */}
                  <div className="md:col-span-3 flex items-center gap-3">
                    <span className="font-mono text-xs font-semibold text-[#3b82f6] opacity-70 group-hover:opacity-100">
                      0{idx + 1}.
                    </span>
                    <div className="flex flex-col">
                      <span className="font-sans font-medium text-base text-[#f3f3f1] group-hover:text-[#14b8a6] transition-colors">
                        {exp.role}
                      </span>
                      <span className="md:hidden font-mono text-xs text-[#8a8985]">
                        {exp.company} • {exp.timeline}
                      </span>
                    </div>
                  </div>

                  {/* Company */}
                  <div className="hidden md:flex flex-col md:col-span-3">
                    <span className="font-mono text-sm text-[#f3f3f1]">
                      {exp.company}
                    </span>
                    <span className="font-mono text-[11px] text-[#8a8985] flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#3b82f6]" />
                      <span>{exp.location}</span>
                    </span>
                  </div>

                  {/* Timeline */}
                  <div className="hidden md:flex font-mono text-xs text-[#8a8985] md:col-span-2">
                    <span className="px-2.5 py-1 rounded bg-[#0c0d10] border border-white/5">
                      {exp.timeline}
                    </span>
                  </div>

                  {/* Core Tech Stack */}
                  <div className="md:col-span-3 flex flex-wrap gap-1.5">
                    {exp.coreTech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-[#0c0d10] border border-white/5 font-mono text-[11px] text-[#8a8985]"
                      >
                        {tech}
                      </span>
                    ))}
                    {exp.coreTech.length > 3 && (
                      <span className="px-2 py-0.5 rounded bg-[#0c0d10] border border-white/5 font-mono text-[11px] text-[#8a8985]">
                        +{exp.coreTech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Expand Chevron Icon */}
                  <div className="hidden md:flex md:col-span-1 justify-end">
                    <div className="p-1.5 rounded-lg bg-[#0c0d10] border border-white/5 text-[#8a8985] group-hover:text-[#f3f3f1] group-hover:border-[#14b8a6]/40 transition-colors">
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-[#14b8a6]" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </div>

                </div>

                {/* Expanded Details Drawer */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="bg-[#0c0d10]/60 border-t border-white/5 px-6 py-6 font-sans overflow-hidden"
                    >
                      <div className="max-w-4xl flex flex-col gap-4">
                        <p className="text-sm text-[#8a8985] leading-relaxed">
                          {exp.summary}
                        </p>

                        <div className="flex flex-col gap-2">
                          <span className="font-mono text-xs text-[#14b8a6] uppercase tracking-wider font-semibold">
                            Key Achievements & Impact:
                          </span>
                          <ul className="flex flex-col gap-2">
                            {exp.highlights.map((h, i) => (
                              <li key={i} className="flex items-start gap-2.5 text-xs text-[#f3f3f1]/90 font-mono">
                                <Sparkles className="w-3.5 h-3.5 text-[#3b82f6] shrink-0 mt-0.5" />
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
