import { motion } from 'motion/react';
import { images, siteInfo } from '../data/content';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[600px] max-h-[1200px] w-full overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <picture>
          <source media="(max-width: 768px)" srcSet={images.heroMobile} />
          <img
            src={images.hero}
            alt="Beautiful wedding scene — demo image"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
        </picture>
        {/* Gradient overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/20 to-charcoal/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-24 lg:pb-30 editorial-container">
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-champagne-light text-[11px] md:text-[13px] uppercase tracking-[0.25em] font-sans font-medium mb-4 md:mb-6"
        >
          {siteInfo.tagline}
        </motion.p>

        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-[1.05] max-w-3xl text-balance whitespace-pre-line"
        >
          {siteInfo.heroHeadline}
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-white/70 font-sans text-sm md:text-base mt-5 md:mt-6 max-w-md"
        >
          {siteInfo.heroSubline}
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 md:mt-10"
        >
          <a
            href="#stories"
            className="inline-flex items-center gap-2 text-[12px] md:text-[13px] uppercase tracking-[0.2em] font-sans font-medium text-champagne-light hover:text-white transition-colors duration-300 group"
          >
            <span>Explore our work</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-y-1">
              ↓
            </span>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:block"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}
