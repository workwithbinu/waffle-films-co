import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { Maximize2, MapPin } from 'lucide-react';
import {
  images,
  portfolioCategories,
  type PortfolioCategory,
  type PortfolioItem,
} from '../data/content';

interface GalleryProps {
  onOpenLightbox: (item: PortfolioItem) => void;
}

export default function Gallery({ onOpenLightbox }: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('All');
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' });

  // Filter gallery items based on selected category tab
  const filteredItems = activeCategory === 'All'
    ? images.gallery
    : images.gallery.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 md:py-30 bg-ivory-dark/40 border-t border-charcoal/[0.04]">
      <div className="editorial-container" ref={sectionRef}>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 gap-6">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[11px] md:text-[12px] uppercase tracking-[0.25em] text-champagne font-sans font-medium mb-3">
              Curated Portfolio
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal">
              Selected Gallery
            </h2>
          </motion.div>

          {/* Category Filter Pills */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-1.5 md:gap-2"
          >
            {portfolioCategories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-4 py-2 text-[12px] uppercase tracking-[0.15em] font-sans transition-all duration-300 rounded-full cursor-pointer ${
                    isActive
                      ? 'bg-charcoal text-ivory shadow-sm'
                      : 'bg-ivory text-charcoal/60 hover:text-charcoal hover:bg-ivory-dark border border-charcoal/[0.06]'
                  }`}
                  aria-pressed={isActive}
                >
                  {cat}
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onClick={() => onOpenLightbox(item)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onOpenLightbox(item);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`View photo: ${item.title}, ${item.location}`}
                className="group relative cursor-pointer overflow-hidden aspect-[4/5] bg-ivory shadow-sm rounded-xs select-none focus-visible:outline-2 focus-visible:outline-champagne focus-visible:outline-offset-2"
              >
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] card-image-hover"
                  />

                  {/* Scrim overlay: persistent on touch/mobile, hover-reveal on desktop */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/45 via-45% to-transparent card-overlay-scrim pointer-events-none" />

                  {/* Expand icon in top right */}
                  <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 w-9 h-9 rounded-full bg-charcoal/60 backdrop-blur-md text-ivory flex items-center justify-center border border-ivory/15 card-overlay-badge shadow-sm pointer-events-none">
                    <Maximize2 size={15} />
                  </div>

                  {/* Caption info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 card-overlay-caption text-ivory pointer-events-none">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-champagne-light font-sans font-medium mb-1.5 px-2 py-0.5 rounded-full bg-charcoal/60 border border-ivory/10 inline-block">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl text-white mb-1 leading-snug line-clamp-2">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-ivory/70 font-sans">
                      <MapPin size={11} className="text-champagne-light shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
