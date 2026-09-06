/* ==============================================================================
 * FOOTER SECTION (LOCKED - Contact & Footer)
 * ==============================================================================
 */

import { useState } from 'react';
import { portfolioBio } from '../data/portfolioData';
import { Check, Copy, ArrowUp } from 'lucide-react';
import { IconGithub } from './SocialIcons';
import confetti from 'canvas-confetti';

interface ColophonFooterProps {
  onCopyEmail: () => void;
}

export const ColophonFooter = ({ onCopyEmail }: ColophonFooterProps) => {
  const [copied, setCopied] = useState(false);

  const handleEmailCopy = () => {
    onCopyEmail();
    setCopied(true);
    
    // Trigger celebratory confetti burst with calm sapphire blue palette
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.85 },
      colors: ['#38bdf8', '#14b8a6', '#f3f3f1']
    });

    setTimeout(() => setCopied(false), 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="colophon" className="relative pt-16 pb-14 px-4 sm:px-8 max-w-7xl mx-auto">
      
      {/* Top Banner Call-to-Action */}
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-white via-white to-sky-100/70 dark:from-[#12141c] dark:via-[#12141c] dark:to-[#38bdf8]/10 border border-slate-300 dark:border-white/[0.08] flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-xl shadow-slate-300/50 dark:shadow-2xl mb-12">
        <div className="flex flex-col gap-3 max-w-xl">
          
          {/* Status Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/15 dark:bg-[#14b8a6]/10 border border-teal-500/40 dark:border-[#14b8a6]/30 font-mono text-xs text-[#0d9488] dark:text-[#14b8a6] font-bold tracking-wide w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0d9488] dark:bg-[#14b8a6] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0d9488] dark:bg-[#14b8a6]"></span>
            </span>
            <span>Available for Remote AI & Data Quality Roles</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-light text-slate-900 dark:text-[#f3f3f1] tracking-tight">
            Let's build something <span className="font-serif italic text-[#0284c7] dark:text-[#38bdf8]">extraordinary</span>.
          </h2>
        </div>

        {/* Copy Email Button */}
        <button
          onClick={handleEmailCopy}
          className="group relative flex items-center gap-3 px-6 py-4 rounded-2xl bg-[#2563eb] dark:bg-[#3b82f6] hover:bg-[#1d4ed8] dark:hover:bg-[#2563eb] text-white font-mono text-sm font-semibold transition-all shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:scale-95 shrink-0 cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-5 h-5 text-white animate-scale" />
              <span>Copied to Clipboard!</span>
            </>
          ) : (
            <>
              <Copy className="w-5 h-5 text-white group-hover:rotate-12 transition-transform" />
              <span>{portfolioBio.email}</span>
            </>
          )}
        </button>
      </div>

      {/* Navigasi Ikon GitHub & Back to Top */}
      <div className="flex items-center justify-between pb-8 border-b border-slate-300 dark:border-white/[0.08] font-mono text-xs text-slate-700 dark:text-[#94a3b8]">
        {/* Tombol GitHub */}
        <a
          href={portfolioBio.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-xl bg-white dark:bg-[#12141c] border border-slate-300 dark:border-white/[0.08] text-slate-700 dark:text-[#94a3b8] hover:text-slate-950 dark:hover:text-[#f3f3f1] hover:border-[#0284c7] dark:hover:border-[#38bdf8]/50 hover:-translate-y-0.5 transition-all shadow-md shadow-slate-300/40 dark:shadow-none"
          title="GitHub"
        >
          <IconGithub className="w-4 h-4" />
        </a>

        {/* Tombol Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-[#12141c] border border-slate-300 dark:border-white/[0.08] text-xs text-slate-700 dark:text-[#94a3b8] hover:text-slate-950 dark:hover:text-[#f3f3f1] hover:border-[#0284c7] dark:hover:border-[#38bdf8]/50 hover:-translate-y-0.5 transition-all shadow-md shadow-slate-300/40 dark:shadow-none cursor-pointer font-medium"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5 text-[#0284c7] dark:text-[#38bdf8]" />
        </button>
      </div>

      {/* Teks Hak Cipta (Centered 2-line copyright bar) */}
      <div className="pt-8 flex flex-col items-center justify-center text-center font-mono text-xs text-slate-600 dark:text-[#94a3b8] gap-1 font-medium">
        <span>© 2026 Arshalouys</span>
        <span className="text-[11px] text-slate-500 dark:text-[#94a3b8]/70">made with ai.</span>
      </div>

    </footer>
  );
};

