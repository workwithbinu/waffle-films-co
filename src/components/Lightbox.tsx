import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, MapPin, Tag } from 'lucide-react';
import type { PortfolioItem } from '../data/content';

interface LightboxProps {
  isOpen: boolean;
  currentIndex: number;
  items: PortfolioItem[];
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export default function Lightbox({
  isOpen,
  currentIndex,
  items,
  onClose,
  onNavigate,
}: LightboxProps) {
  const currentItem = items[currentIndex];

  const handlePrev = useCallback(() => {
    if (items.length === 0) return;
    onNavigate((currentIndex - 1 + items.length) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (items.length === 0) return;
    onNavigate((currentIndex + 1) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  // Keyboard navigation & scroll locking
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, handlePrev, handleNext, onClose]);

  if (!isOpen || !currentItem) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="lightbox-modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex flex-col justify-between bg-charcoal/95 backdrop-blur-xl text-ivory select-none"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label="Image lightbox"
      >
        {/* Top Header Bar */}
        <div
          className="relative z-10 flex items-center justify-between px-6 py-5 md:px-10"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Index Counter */}
          <div className="font-sans text-[12px] md:text-[13px] uppercase tracking-[0.2em] text-champagne">
            <span>{String(currentIndex + 1).padStart(2, '0')}</span>
            <span className="text-ivory/30 mx-2">/</span>
            <span>{String(items.length).padStart(2, '0')}</span>
          </div>

          {/* Category Pill */}
          {currentItem.category && (
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-sans uppercase tracking-[0.15em] bg-ivory/[0.08] text-ivory/80 border border-ivory/[0.08]">
              <Tag size={11} className="text-champagne" />
              {currentItem.category}
            </span>
          )}

          {/* Close Button */}
          <button
            onClick={onClose}
            className="p-2 -mr-2 rounded-full text-ivory/70 hover:text-white hover:bg-ivory/[0.08] transition-colors cursor-pointer"
            aria-label="Close lightbox (Esc)"
          >
            <X size={24} />
          </button>
        </div>

        {/* Center Image Container */}
        <div
          className="relative flex-1 flex items-center justify-center p-4 md:p-8 min-h-0"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-3 md:left-8 z-10 p-3 rounded-full bg-charcoal/60 text-ivory hover:text-champagne hover:bg-charcoal/90 border border-ivory/10 transition-all cursor-pointer backdrop-blur-sm"
            aria-label="Previous photograph (Left arrow)"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Main Image with smooth transition */}
          <div className="relative max-w-5xl max-h-[72vh] w-full h-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentItem.id}
                src={currentItem.fullSrc || currentItem.src}
                alt={currentItem.alt}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="max-h-[72vh] max-w-full object-contain shadow-2xl rounded-sm"
              />
            </AnimatePresence>
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-3 md:right-8 z-10 p-3 rounded-full bg-charcoal/60 text-ivory hover:text-champagne hover:bg-charcoal/90 border border-ivory/10 transition-all cursor-pointer backdrop-blur-sm"
            aria-label="Next photograph (Right arrow)"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Bottom Caption & Details Bar */}
        <div
          className="relative z-10 px-6 py-5 md:px-12 md:py-6 bg-charcoal/60 border-t border-ivory/[0.06] text-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-1">
              <h3 className="font-serif text-xl md:text-2xl text-ivory">
                {currentItem.title}
              </h3>
              {currentItem.location && (
                <span className="inline-flex items-center gap-1 text-[12px] text-champagne font-sans">
                  <MapPin size={12} />
                  {currentItem.location}
                </span>
              )}
            </div>

            {currentItem.description && (
              <p className="font-sans text-[13px] md:text-sm text-ivory/60 max-w-xl mx-auto leading-relaxed">
                {currentItem.description}
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
