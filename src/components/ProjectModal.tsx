import { motion, AnimatePresence } from 'framer-motion';
import type { Project } from '../data/portfolioData';
import { X, ExternalLink, CheckCircle2, Cpu } from 'lucide-react';
import { IconGithub } from './SocialIcons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/60 dark:bg-[#0c0d10]/80 backdrop-blur-md"
          />

          {/* Modal Card Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl my-8 bg-white dark:bg-[#13151b] border border-slate-300 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10 text-slate-900 dark:text-[#f3f3f1]"
          >
            {/* Header Accent Strip */}
            <div
              className="h-2 w-full"
              style={{ backgroundColor: project.accentColor }}
            />

            {/* Modal Body Content */}
            <div className="p-6 sm:p-8 flex flex-col gap-6">
              
              {/* Top Navigation & Badges */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className="px-3 py-1 rounded-md text-xs font-mono font-semibold"
                    style={{ backgroundColor: `${project.accentColor}20`, color: project.accentColor, border: `1px solid ${project.accentColor}40` }}
                  >
                    {project.category}
                  </span>
                  <span className="font-mono text-xs text-slate-600 dark:text-[#8a8985] font-medium">
                    {project.year}
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg bg-[#e2e8f0] dark:bg-[#0c0d10] border border-slate-300 dark:border-white/10 text-slate-700 dark:text-[#8a8985] hover:text-slate-950 dark:hover:text-[#f3f3f1] transition-colors cursor-pointer"
                  aria-label="Close project modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Project Title & Subtitle */}
              <div>
                <h2 className="text-2xl sm:text-4xl font-light font-sans tracking-tight text-slate-900 dark:text-[#f3f3f1]">
                  {project.title}
                </h2>
                <p className="font-mono text-xs sm:text-sm text-[#0284c7] dark:text-[#38bdf8] font-bold mt-1">
                  {project.subtitle}
                </p>
              </div>

              {/* Key Metrics Banner */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-[#e2e8f0] dark:bg-[#0c0d10]/60 border border-slate-300 dark:border-white/5">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-xl sm:text-2xl font-mono font-bold" style={{ color: project.accentColor }}>
                      {m.value}
                    </span>
                    <span className="text-[11px] font-mono text-slate-600 dark:text-[#8a8985] uppercase tracking-wider font-semibold">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Long Description Paragraphs */}
              <div className="flex flex-col gap-3 text-sm text-slate-700 dark:text-[#8a8985] leading-relaxed font-sans">
                {project.longDescription.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Architecture Highlights */}
              <div className="flex flex-col gap-3">
                <h3 className="font-mono text-xs text-slate-900 dark:text-[#f3f3f1] uppercase tracking-wider flex items-center gap-2 font-bold">
                  <Cpu className="w-3.5 h-3.5" style={{ color: project.accentColor }} />
                  <span>Architecture & Technical Highlights</span>
                </h3>
                <div className="flex flex-col gap-2">
                  {project.architectureHighlights.map((high, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-[#8a8985] font-mono font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: project.accentColor }} />
                      <span>{high}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-300 dark:border-white/5">
                {project.techTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded bg-[#e2e8f0] dark:bg-[#0c0d10] border border-slate-300 dark:border-white/10 font-mono text-[11px] text-slate-700 dark:text-[#8a8985] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer Actions */}
              <div className="flex items-center justify-end gap-4 pt-4 border-t border-slate-300 dark:border-white/5">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#e2e8f0] dark:bg-[#0c0d10] border border-slate-300 dark:border-white/10 font-mono text-xs text-slate-700 dark:text-[#8a8985] hover:text-slate-950 dark:hover:text-[#f3f3f1] hover:border-slate-400 dark:hover:border-white/20 transition-colors font-medium"
                  >
                    <IconGithub className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2 rounded-lg text-white font-mono text-xs font-semibold transition-all shadow-md active:scale-95 cursor-pointer"
                    style={{ backgroundColor: project.accentColor }}
                  >
                    <span>Launch Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
