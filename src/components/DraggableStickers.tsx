import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { portfolioStickers } from '../data/portfolioData';
import type { InteractiveSticker } from '../data/portfolioData';
import { Sparkles, Zap, Compass, ShieldCheck, Heart, RotateCcw, Move } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-3.5 h-3.5" />,
  Zap: <Zap className="w-3.5 h-3.5" />,
  Compass: <Compass className="w-3.5 h-3.5" />,
  ShieldCheck: <ShieldCheck className="w-3.5 h-3.5" />,
  Heart: <Heart className="w-3.5 h-3.5" />
};

interface DraggableStickersProps {
  onStickerInteract?: (text: string) => void;
}

export const DraggableStickers = ({ onStickerInteract }: DraggableStickersProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [topZIndex, setTopZIndex] = useState(20);
  const [zIndices, setZIndices] = useState<Record<string, number>>(() => {
    const initialZ: Record<string, number> = {};
    portfolioStickers.forEach((s, idx) => {
      initialZ[s.id] = 10 + idx;
    });
    return initialZ;
  });
  const [stickerKeys, setStickerKeys] = useState(0);

  const handleDragStart = (id: string, text: string) => {
    const nextZ = topZIndex + 1;
    setTopZIndex(nextZ);
    setZIndices(prev => ({ ...prev, [id]: nextZ }));
    if (onStickerInteract) {
      onStickerInteract(`Tactile Grab: "${text}"`);
    }
  };

  const resetPositions = () => {
    setStickerKeys(prev => prev + 1);
    if (onStickerInteract) {
      onStickerInteract('Reset floating tactile badges');
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[220px] sm:h-[260px] rounded-xl border border-dashed border-white/10 bg-[#0c0d10]/40 overflow-hidden select-none"
    >
      {/* Playground Header Label */}
      <div className="absolute top-3 left-4 z-0 flex items-center justify-between right-4 pointer-events-none">
        <div className="flex items-center gap-2 font-mono text-[11px] text-[#8a8985] uppercase tracking-wider">
          <Move className="w-3.5 h-3.5 text-[#3b82f6]" />
          <span>Interactive Sticker Physics Sandbox (Drag Me)</span>
        </div>
        <button
          onClick={resetPositions}
          className="pointer-events-auto flex items-center gap-1 px-2.5 py-1 rounded bg-[#13151b] border border-white/10 text-[10px] font-mono text-[#8a8985] hover:text-[#f3f3f1] hover:border-[#3b82f6]/50 transition-colors"
          title="Reset Sticker Layout"
        >
          <RotateCcw className="w-3 h-3 text-[#3b82f6]" />
          <span>Reset</span>
        </button>
      </div>

      {/* Draggable Items */}
      {portfolioStickers.map((sticker: InteractiveSticker) => (
        <motion.div
          key={`${sticker.id}-${stickerKeys}`}
          drag
          dragConstraints={containerRef}
          dragElastic={0.2}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          onDragStart={() => handleDragStart(sticker.id, sticker.text)}
          initial={{
            x: sticker.initialX,
            y: sticker.initialY,
            rotate: sticker.rotation,
            opacity: 0,
            scale: 0.8
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: sticker.rotation
          }}
          whileHover={{ scale: 1.08, rotate: 0 }}
          whileTap={{ scale: 0.96 }}
          style={{ zIndex: zIndices[sticker.id] }}
          className={`absolute cursor-grab active:cursor-grabbing px-3.5 py-2 rounded-xl backdrop-blur-md bg-gradient-to-br ${sticker.bgGradient} border shadow-lg transition-shadow hover:shadow-[#3b82f6]/15`}
        >
          <div className="flex items-center gap-2 font-mono" style={{ borderColor: sticker.borderColor }}>
            <span style={{ color: sticker.color }}>
              {iconMap[sticker.iconName]}
            </span>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-[#f3f3f1] whitespace-nowrap">
                {sticker.text}
              </span>
              {sticker.subtext && (
                <span className="text-[9px] text-[#8a8985] tracking-tight">
                  {sticker.subtext}
                </span>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
