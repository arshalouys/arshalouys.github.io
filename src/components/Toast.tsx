import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Info, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  type?: 'success' | 'info';
  onClose: () => void;
}

export const Toast = ({ message, type = 'success', onClose }: ToastProps) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 bg-[#13151b]/95 backdrop-blur-md border border-white/10 shadow-2xl rounded-lg text-sm text-[#f3f3f1] font-mono"
        >
          {type === 'success' ? (
            <CheckCircle2 className="w-4 h-4 text-[#3b82f6]" />
          ) : (
            <Info className="w-4 h-4 text-[#14b8a6]" />
          )}
          <span>{message}</span>
          <button
            onClick={onClose}
            className="ml-2 p-1 text-[#8a8985] hover:text-[#f3f3f1] transition-colors rounded"
            aria-label="Close notification"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
