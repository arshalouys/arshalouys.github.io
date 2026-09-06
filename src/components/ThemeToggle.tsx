import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export type Theme = 'dark' | 'light';

interface ThemeToggleProps {
  onThemeChange?: (theme: Theme) => void;
}

export const ThemeToggle = ({ onThemeChange }: ThemeToggleProps) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('portfolio-theme') as Theme | null;
      if (savedTheme === 'dark' || savedTheme === 'light') {
        return savedTheme;
      }
    }
    return 'dark'; // Default to dark mode per Swiss Editorial design
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    localStorage.setItem('portfolio-theme', theme);
    if (onThemeChange) {
      onThemeChange(theme);
    }
  }, [theme, onThemeChange]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="fixed top-5 right-5 sm:top-6 sm:right-8 z-50">
      <motion.button
        onClick={toggleTheme}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle Light and Dark Mode"
        className="flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-white/80 dark:bg-[#12141c]/80 backdrop-blur-md border border-slate-300 dark:border-white/10 text-slate-800 dark:text-[#f3f3f1] shadow-lg hover:shadow-xl transition-all duration-300 group"
      >
        <div className="relative w-5 h-5 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {theme === 'dark' ? (
              <motion.div
                key="moon"
                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.2 }}
                className="text-[#38bdf8]"
              >
                <Moon className="w-4 h-4" />
              </motion.div>
            ) : (
              <motion.div
                key="sun"
                initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.2 }}
                className="text-amber-500"
              >
                <Sun className="w-4 h-4" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <span className="font-mono text-xs font-medium tracking-wide uppercase text-slate-600 dark:text-[#94a3b8] group-hover:text-slate-900 dark:group-hover:text-[#f3f3f1] transition-colors">
          {theme === 'dark' ? 'Dark' : 'Light'}
        </span>
      </motion.button>
    </div>
  );
};
