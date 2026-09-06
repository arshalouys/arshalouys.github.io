/* ==============================================================================
 * PROJECT SECTION (LOCKED - Jangan diubah kecuali atas permintaan pengguna)
 * ==============================================================================
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioProjects } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight } from 'lucide-react';

export const ProjectBento = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Cek apakah hanya ada 1 proyek aktif saat ini
  const isSingleProject = portfolioProjects.length === 1;

  return (
    <section id="work" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto hairline-border-b">
      
      {/* Section Editorial Header */}
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="text-3xl sm:text-5xl font-light text-slate-900 dark:text-[#f3f3f1] tracking-tight">
            Side <span className="font-serif italic text-[#0284c7] dark:text-[#38bdf8]">Projects</span>
          </h2>
        </div>
      </div>

      {/* Grid Layout: Otomatis Menyesuaikan (Besar jika 1 proyek, Multi-kolom jika >1 proyek) */}
      <div className={isSingleProject ? "max-w-4xl mx-auto" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"}>
        {portfolioProjects.map((project, index) => {
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedProject(project)}
              className={`group relative cursor-pointer rounded-3xl bg-white dark:bg-[#12141c] border border-slate-300 dark:border-white/[0.08] flex flex-col justify-between overflow-hidden hover-glow transition-all shadow-xl shadow-slate-300/50 dark:shadow-2xl ${
                isSingleProject ? 'p-8 sm:p-12 shadow-2xl shadow-slate-300/60 dark:shadow-2xl' : 'p-7 sm:p-8'
              }`}
            >
              {/* Background Accent Gradient Glow on Hover */}
              <div
                className="absolute -right-20 -top-20 w-80 h-80 rounded-full opacity-0 group-hover:opacity-20 dark:group-hover:opacity-25 blur-3xl transition-opacity pointer-events-none duration-500"
                style={{ backgroundColor: project.accentColor }}
              />

              {/* Card Top: Badges & Arrow Icon */}
              <div className="flex items-center justify-between mb-8 z-10">
                <div className="flex items-center gap-2">
                  <span
                    className="px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wide shadow-sm"
                    style={{
                      backgroundColor: `${project.accentColor}18`,
                      color: project.accentColor,
                      border: `1px solid ${project.accentColor}40`
                    }}
                  >
                    {project.badge || project.category}
                  </span>
                </div>

                <div className="w-10 h-10 rounded-full bg-[#e2e8f0] dark:bg-[#0a0b0e] border border-slate-300 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-[#94a3b8] group-hover:text-slate-950 dark:group-hover:text-[#f3f3f1] group-hover:border-[#0284c7] dark:group-hover:border-[#38bdf8]/50 group-hover:scale-110 transition-all shrink-0">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              {/* Card Middle: Title, Subtitle, & Description */}
              <div className="flex flex-col gap-4 mb-8 z-10">
                <h3 className={`${isSingleProject ? 'text-2xl sm:text-4xl' : 'text-xl sm:text-2xl'} font-normal text-slate-900 dark:text-[#f3f3f1] group-hover:text-[#0284c7] dark:group-hover:text-[#38bdf8] transition-colors font-sans`}>
                  {project.title}
                </h3>
                <p className="font-mono text-xs sm:text-sm text-[#0284c7] dark:text-[#38bdf8] font-bold">
                  {project.subtitle}
                </p>
                <p className={`${isSingleProject ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'} text-slate-700 dark:text-[#94a3b8] leading-relaxed max-w-3xl`}>
                  "{project.description}"
                </p>
              </div>

              {/* Card Bottom: Metrics & Tech Tags */}
              <div className="flex flex-col gap-6 pt-6 border-t border-slate-300 dark:border-white/[0.06] z-10">
                {/* Impact Metrics Pill Strip */}
                <div className="flex flex-wrap items-center gap-6 sm:gap-8">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className={`${isSingleProject ? 'text-xl sm:text-2xl' : 'text-base sm:text-lg'} font-mono font-bold text-slate-900 dark:text-[#f3f3f1]`}>
                        {m.value}
                      </span>
                      <span className="font-mono text-[10px] sm:text-xs text-slate-600 dark:text-[#94a3b8] uppercase tracking-wider font-semibold">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2">
                  {project.techTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-[#e2e8f0] dark:bg-[#0a0b0e]/90 border border-slate-300 dark:border-white/[0.06] font-mono text-xs text-slate-700 dark:text-[#94a3b8] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          );
        })}
      </div>

      {/* Project Modal Preview */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </section>
  );
};
