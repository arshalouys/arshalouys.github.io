/* ==============================================================================
 * IDENTITAS SECTION (LOCKED - Jangan diubah kecuali atas permintaan pengguna)
 * ==============================================================================
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioBio } from '../data/portfolioData';
import { DraggableStickers } from './DraggableStickers';
import { MicroCanvas } from './MicroCanvas';
import { IconGithub } from './SocialIcons';
import { Mail, ArrowDown, Sparkles, Layers } from 'lucide-react';

interface HeroProps {
  onCopyEmail: () => void;
  onToast: (msg: string) => void;
}

const SHOW_TACTILE_PLAYGROUND = false;

export const Hero = ({ onCopyEmail, onToast }: HeroProps) => {
  const [activePlayground, setActivePlayground] = useState<'stickers' | 'canvas'>('stickers');

  return (
    <section className="relative pt-20 pb-20 sm:pt-28 sm:pb-28 px-4 sm:px-8 overflow-hidden hairline-border-b bg-gradient-to-b from-[#e5e7ed] via-[#edeef2] to-[#e2e4ea] dark:from-[#0a0b0e] dark:via-[#0a0b0e] dark:to-[#12141c]/50 transition-colors duration-300">
      
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Editorial Headline & Bio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className={`${SHOW_TACTILE_PLAYGROUND ? 'lg:col-span-7' : 'lg:col-span-10'} flex flex-col gap-6`}
        >
          {/* Headline Utama: Nama Achmad dengan font biasa berukuran medium */}
          <h1 className="text-4xl sm:text-6xl font-medium tracking-tight text-slate-900 dark:text-[#f3f3f1] font-sans">
            Achmad
          </h1>

          {/* Paragraf Deskripsi */}
          <div className="flex flex-col gap-3 max-w-3xl text-sm sm:text-base text-slate-700 dark:text-[#94a3b8] leading-relaxed font-sans">
            <p>{portfolioBio.bioParagraphs[0]}</p>
          </div>

          {/* Quick Action Icon Links & Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            {/* Tombol Copy Direct Email */}
            <button
              onClick={onCopyEmail}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#2563eb] dark:bg-[#3b82f6] hover:bg-[#1d4ed8] dark:hover:bg-[#2563eb] text-white font-mono text-xs font-semibold transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Copy Direct Email</span>
            </button>

            {/* Ikon GitHub */}
            <a
              href={portfolioBio.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white dark:bg-[#12141c] border border-slate-300 dark:border-white/[0.08] text-slate-700 dark:text-[#94a3b8] hover:text-slate-950 dark:hover:text-[#f3f3f1] hover:border-[#0284c7] dark:hover:border-[#38bdf8]/50 hover:-translate-y-0.5 transition-all shadow-md shadow-slate-300/50 dark:shadow-none"
              title="GitHub Profile"
            >
              <IconGithub className="w-4 h-4" />
            </a>

            <div className="h-6 w-[1px] bg-slate-300 dark:bg-white/10 hidden sm:block"></div>

            {/* Tautan Teks Explore Selected Works ↓ */}
            <a
              href="#work"
              className="flex items-center gap-2 font-mono text-xs text-slate-700 dark:text-[#94a3b8] hover:text-slate-950 dark:hover:text-[#f3f3f1] transition-colors py-2 font-medium"
            >
              <span>Explore Selected Works</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#0284c7] dark:text-[#38bdf8] animate-bounce" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Interactive Playground Feature (5 cols) */}
        {SHOW_TACTILE_PLAYGROUND && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col gap-3"
          >
            {/* Playground Toggle Tabs */}
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-2 font-mono text-xs text-[#94a3b8]">
                <span className="text-[#38bdf8] font-bold">//</span>
                <span className="uppercase tracking-wider">Tactile Playground</span>
              </div>

              <div className="flex items-center p-1 bg-[#12141c] border border-white/[0.08] rounded-lg font-mono text-[11px]">
                <button
                  onClick={() => setActivePlayground('stickers')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all ${
                    activePlayground === 'stickers'
                      ? 'bg-[#3b82f6] text-white font-medium shadow-sm'
                      : 'text-[#94a3b8]'
                  }`}
                >
                  <Sparkles className="w-3 h-3" />
                  <span>Physics Badges</span>
                </button>

                <button
                  onClick={() => setActivePlayground('canvas')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all ${
                    activePlayground === 'canvas'
                      ? 'bg-[#14b8a6] text-white font-medium shadow-sm'
                      : 'text-[#94a3b8]'
                  }`}
                >
                  <Layers className="w-3 h-3" />
                  <span>Micro-Canvas</span>
                </button>
              </div>
            </div>

            {/* Interactive Widget Display */}
            {activePlayground === 'stickers' ? (
              <DraggableStickers onStickerInteract={onToast} />
            ) : (
              <MicroCanvas />
            )}
          </motion.div>
        )}

      </div>
    </section>
  );
};
