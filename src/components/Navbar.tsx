import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioBio } from '../data/portfolioData';
import { Clock, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onCopyEmail: () => void;
}

export const Navbar = ({ onCopyEmail }: NavbarProps) => {
  const [timeStr, setTimeStr] = useState<string>('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setTimeStr(`${hours}:${minutes}:${seconds}`);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const [hours, minutes, seconds] = timeStr ? timeStr.split(':') : ['00', '00', '00'];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 py-4 pointer-events-none"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto bg-[#13151b]/80 backdrop-blur-md border border-white/10 px-4 sm:px-6 py-3 rounded-xl shadow-2xl">
        
        {/* Brand & Editorial Title */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-[#3b82f6]/10 border border-[#3b82f6]/30 flex items-center justify-center font-mono font-bold text-xs text-[#3b82f6] group-hover:scale-105 transition-transform">
            AV
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-sm tracking-tight text-[#f3f3f1] group-hover:text-[#3b82f6] transition-colors">
              {portfolioBio.name}
            </span>
            <span className="font-mono text-[10px] text-[#8a8985] tracking-widest uppercase">
              Swiss Editorial Tech
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 font-mono text-xs text-[#8a8985]">
          <a href="#work" className="hover:text-[#f3f3f1] transition-colors relative py-1 hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[1px] hover:after:bg-[#3b82f6]">
            /01 Works
          </a>
          <a href="#ledger" className="hover:text-[#f3f3f1] transition-colors relative py-1 hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[1px] hover:after:bg-[#3b82f6]">
            /02 Ledger
          </a>
          <a href="#stack" className="hover:text-[#f3f3f1] transition-colors relative py-1 hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[1px] hover:after:bg-[#3b82f6]">
            /03 Stack Deck
          </a>
          <a href="#colophon" className="hover:text-[#f3f3f1] transition-colors relative py-1 hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-[1px] hover:after:bg-[#3b82f6]">
            /04 Colophon
          </a>
        </nav>

        {/* Live Availability & Local Time Widget */}
        <div className="flex items-center gap-3 sm:gap-5">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0c0d10]/60 border border-white/5 font-mono text-[11px]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#14b8a6] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#14b8a6]"></span>
            </span>
            <span className="text-[#8a8985] hidden lg:inline">Status:</span>
            <span className="text-[#f3f3f1] font-medium">{portfolioBio.availability}</span>
          </div>

          <div className="flex items-center gap-1.5 font-mono text-xs text-[#8a8985] bg-[#0c0d10]/40 px-2.5 py-1.5 rounded-lg border border-white/5">
            <Clock className="w-3.5 h-3.5 text-[#3b82f6]" />
            <span className="text-[#f3f3f1] font-medium">{hours}</span>
            <span className="animate-blink-colon text-[#3b82f6] font-bold">:</span>
            <span className="text-[#f3f3f1] font-medium">{minutes}</span>
            <span className="animate-blink-colon text-[#3b82f6] font-bold">:</span>
            <span className="text-[#8a8985] text-[10px]">{seconds}</span>
          </div>

          <button
            onClick={onCopyEmail}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#3b82f6] hover:bg-[#2563eb] text-white text-xs font-mono font-medium rounded-lg transition-all active:scale-95 shadow-md shadow-[#3b82f6]/20"
          >
            <span>Initiate</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </motion.header>
  );
};
