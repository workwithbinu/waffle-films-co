import { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Play } from 'lucide-react';
import { images, featuredFilm } from '../data/content';

export default function FeaturedFilm() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [playing, setPlaying] = useState(false);

  return (
    <section id="films" className="py-20 md:py-30 bg-charcoal text-ivory">
      <div className="editorial-container">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16"
        >
          <p className="text-[11px] md:text-[12px] uppercase tracking-[0.25em] text-champagne font-sans font-medium mb-3">
            Featured Film
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ivory">
            {featuredFilm.title}
          </h2>
        </motion.div>

        {/* Video area */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-video w-full overflow-hidden bg-charcoal-light"
        >
          {!playing ? (
            // Thumbnail with play button
            <button
              onClick={() => setPlaying(true)}
              className="relative w-full h-full group cursor-pointer"
              aria-label="Play wedding film"
            >
              <img
                src={images.filmThumbnail}
                alt={featuredFilm.thumbnailAlt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/40 transition-colors duration-300" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-ivory/60 flex items-center justify-center group-hover:border-champagne group-hover:scale-110 transition-all duration-500">
                  <Play
                    className="w-6 h-6 md:w-7 md:h-7 text-ivory ml-1 group-hover:text-champagne transition-colors duration-300"
                    fill="currentColor"
                  />
                </div>
              </div>

              {/* Caption below play */}
              <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10">
                <p className="font-serif text-lg md:text-xl text-ivory/90">
                  {featuredFilm.subtitle}
                </p>
                <p className="text-ivory/50 font-sans text-sm mt-1.5">
                  {featuredFilm.description}
                </p>
              </div>
            </button>
          ) : (
            // Embedded video
            <iframe
              src={`${featuredFilm.videoUrl}?autoplay=1&rel=0`}
              title={featuredFilm.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}
