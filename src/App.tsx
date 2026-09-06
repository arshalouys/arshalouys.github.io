import { useState } from 'react';
// import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectBento } from './components/ProjectBento';
// import { ExperienceLedger } from './components/ExperienceLedger';
import { TechStackDeck } from './components/TechStackDeck';
import { ColophonFooter } from './components/ColophonFooter';
import { Toast } from './components/Toast';
import { ThemeToggle } from './components/ThemeToggle';
import { portfolioBio } from './data/portfolioData';

export function App() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioBio.email);
    triggerToast(`Email copied: ${portfolioBio.email}`);
  };

  return (
    <div className="relative min-h-screen bg-[#edeef2] dark:bg-[#0c0d10] text-slate-900 dark:text-[#f3f3f1] bg-noise-grain transition-colors duration-300">
      
      {/* Floating Theme Switcher Toggle */}
      <ThemeToggle />

      {/* Navbar dihapus sesuai permintaan user */}
      {/* <Navbar onCopyEmail={handleCopyEmail} /> */}

      {/* Main Content Sections */}
      <main className="relative z-10">
        
        {/* ==============================================================================
         * IDENTITAS SECTION (LOCKED - Tidak diubah kecuali diminta)
         * ============================================================================== */}
        <Hero onCopyEmail={handleCopyEmail} onToast={triggerToast} />

        {/* ==============================================================================
         * PROJECT SECTION (LOCKED - Tidak diubah kecuali diminta)
         * ============================================================================== */}
        <ProjectBento />

        {/* ==============================================================================
         * EXPERIENCE LEDGER SECTION (DISABLED / COMMENTED OUT PER USER REQUEST)
         * Hilangkan garis miring komentar di bawah ini jika ingin memunculkannya kembali.
         * ============================================================================== */}
        {/* <ExperienceLedger /> */}

        {/* ==============================================================================
         * TECH STACK DECK SECTION
         * ============================================================================== */}
        <TechStackDeck />
      </main>

      {/* Colophon & Footer */}
      <ColophonFooter onCopyEmail={handleCopyEmail} />

      {/* Floating Notification Toast */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />

    </div>
  );
}

export default App;

