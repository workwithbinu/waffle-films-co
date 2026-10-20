import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { images, aboutContent } from '../data/content';

export default function StudioIntro() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-20 md:py-30 bg-ivory">
      <div className="editorial-container">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-22 items-center"
        >
          {/* Image */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden"
          >
            <img
              src={images.about}
              alt="Wedding photography in progress — demo image"
              loading="lazy"
              className="w-full aspect-[4/5] object-cover"
            />
            {/* Subtle champagne accent line */}
            <div className="absolute bottom-0 left-0 w-16 h-[2px] bg-champagne" />
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="lg:py-8"
          >
            <p className="text-[11px] md:text-[12px] uppercase tracking-[0.25em] text-champagne font-sans font-medium mb-3">
              The Studio
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal mb-6 md:mb-8">
              {aboutContent.headline}
            </h2>

            <div className="space-y-4">
              {aboutContent.description.split('\n\n').map((paragraph, i) => (
                <p
                  key={i}
                  className="text-charcoal/70 font-sans text-[15px] md:text-base leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <p className="font-serif text-xl md:text-2xl text-charcoal italic mt-8 md:mt-10">
              "{aboutContent.philosophy}"
            </p>

            {/* Accent line */}
            <div className="w-12 h-[1px] bg-champagne mt-8" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
