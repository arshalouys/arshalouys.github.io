/* ==============================================================================
 * SKILLS SECTION (LOCKED - Jangan diubah kecuali atas permintaan pengguna)
 * ==============================================================================
 */

import { motion } from 'framer-motion';
import { portfolioSkills } from '../data/portfolioData';
import { Globe, Award } from 'lucide-react';

export const TechStackDeck = () => {
  // Menampilkan Kotak 1 (Languages & Communication) saat ini.
  // Untuk mengaktifkan semua kategori skill di masa mendatang, ganti dengan:
  // const activeSkillGroups = portfolioSkills;
  const activeSkillGroups = portfolioSkills.slice(0, 1);
  const isSingleSkillGroup = activeSkillGroups.length === 1;

  return (
    <section id="stack" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto hairline-border-b">
      
      {/* Section Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <h2 className="text-3xl sm:text-5xl font-light text-slate-900 dark:text-[#f3f3f1] tracking-tight">
            Skills & <span className="font-serif italic text-[#0284c7] dark:text-[#38bdf8]">Capabilities</span>
          </h2>
        </div>

        {/* TODO: Enable category filter tabs when more skill blocks are active */}
        {/*
        <div className="flex flex-wrap items-center gap-2 bg-slate-100 dark:bg-[#12141c] p-1.5 rounded-xl border border-slate-200 dark:border-white/10 font-mono text-xs">
          {['All', 'Languages', 'Operations', 'Technical', 'Tools'].map((cat) => (
            <button
              key={cat}
              className="px-3.5 py-1.5 rounded-lg text-slate-600 dark:text-[#94a3b8] hover:text-slate-900 dark:hover:text-[#f3f3f1]"
            >
              {cat}
            </button>
          ))}
        </div>
        */}
      </div>

      {/* Stack Deck Cards Container: Otomatis Menyesuaikan (Besar jika 1 kotak, Multi-kolom jika >1 kotak) */}
      <div className={isSingleSkillGroup ? "max-w-4xl mx-auto" : "grid grid-cols-1 md:grid-cols-2 gap-8"}>
        {activeSkillGroups.map((catGroup, index) => (
          <motion.div
            key={catGroup.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`flex flex-col gap-6 rounded-3xl bg-white dark:bg-[#12141c] border border-slate-300 dark:border-white/[0.08] hover:border-slate-400 dark:hover:border-white/20 transition-all shadow-xl shadow-slate-300/50 dark:shadow-xl hover-glow ${
              isSingleSkillGroup ? 'p-8 sm:p-12 shadow-2xl shadow-slate-300/60 dark:shadow-2xl' : 'p-6 sm:p-8'
            }`}
          >
            {/* Category Header */}
            <div className="flex items-center justify-between border-b border-slate-300 dark:border-white/[0.08] pb-5">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-[#0284c7] dark:bg-[#38bdf8] animate-pulse" />
                <h3 className={`font-mono ${isSingleSkillGroup ? 'text-lg sm:text-xl' : 'text-base'} text-slate-900 dark:text-[#f3f3f1] font-semibold uppercase tracking-wide`}>
                  {catGroup.category}
                </h3>
              </div>
              <span className="font-mono text-xs text-slate-600 dark:text-[#94a3b8] font-medium">
                {catGroup.skills.length} Proficiency Standards
              </span>
            </div>

            <p className={`${isSingleSkillGroup ? 'text-sm font-mono' : 'text-xs font-mono'} text-slate-700 dark:text-[#94a3b8]`}>
              {catGroup.description}
            </p>

            {/* Skills List Items */}
            <div className="flex flex-col gap-4 pt-2">
              {catGroup.skills.map((skill) => {
                const isAdvanced = skill.level === 'ADVANCED';

                return (
                  <div
                    key={skill.name}
                    className={`flex flex-col sm:flex-row sm:items-center justify-between rounded-2xl bg-[#e2e8f0] dark:bg-[#0a0b0e]/90 border border-slate-300 dark:border-white/[0.06] hover:border-[#0284c7] dark:hover:border-[#38bdf8]/40 transition-all gap-4 group ${
                      isSingleSkillGroup ? 'p-5' : 'p-4'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-sky-500/15 dark:bg-[#38bdf8]/10 border border-sky-500/30 dark:border-[#38bdf8]/20 flex items-center justify-center shrink-0">
                        {isAdvanced ? (
                          <Award className="w-5 h-5 text-[#0284c7] dark:text-[#38bdf8]" />
                        ) : (
                          <Globe className="w-5 h-5 text-[#0d9488] dark:text-[#14b8a6]" />
                        )}
                      </div>
                      <div className="flex flex-col">
                        <span className={`font-mono ${isSingleSkillGroup ? 'text-base' : 'text-sm'} font-semibold text-slate-900 dark:text-[#f3f3f1] group-hover:text-[#0284c7] dark:group-hover:text-[#38bdf8] transition-colors`}>
                          {skill.name}
                        </span>
                        <span className={`${isSingleSkillGroup ? 'text-sm' : 'text-xs'} font-sans text-slate-700 dark:text-[#94a3b8]`}>
                          {skill.highlight}
                        </span>
                      </div>
                    </div>

                    <span
                      className={`font-mono text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border self-start sm:self-auto shrink-0 transition-all ${
                        isAdvanced
                          ? 'bg-sky-500/15 dark:bg-[#3b82f6]/10 border-sky-500/40 dark:border-[#3b82f6]/30 text-[#0284c7] dark:text-[#38bdf8]'
                          : 'bg-teal-500/15 dark:bg-[#14b8a6]/10 border-teal-500/40 dark:border-[#14b8a6]/30 text-[#0d9488] dark:text-[#14b8a6]'
                      }`}
                    >
                      [{skill.level}]
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

