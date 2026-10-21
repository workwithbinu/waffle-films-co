import { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Play, Clock, MapPin, Film } from 'lucide-react';
import { featuredFilm, additionalFilms, type FilmItem } from '../data/content';

export default function FeaturedFilm() {
  const ref = useRef<HTMLDivElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const [activeFilm, setActiveFilm] = useState<FilmItem>(featuredFilm);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSelectFilm = (film: FilmItem) => {
    setActiveFilm(film);
    setIsPlaying(true);
    if (playerRef.current) {
      playerRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section id="films" className="py-20 md:py-30 bg-charcoal text-ivory">
      <div className="editorial-container">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 md:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <p className="text-[11px] md:text-[12px] uppercase tracking-[0.25em] text-champagne font-sans font-medium mb-3">
              Cinematic Films
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ivory">
              Wedding Cinema
            </h2>
          </div>
          <p className="font-sans text-[13px] md:text-sm text-ivory/50 max-w-sm">
            Moving visuals capturing the sound, tears, and spirit of your day.
          </p>
        </motion.div>

        {/* Prominent Featured Video Area */}
        <motion.div
          ref={playerRef}
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-video w-full overflow-hidden bg-charcoal-light rounded-sm shadow-2xl"
        >
          {!isPlaying ? (
            // Thumbnail with play button
            <button
              onClick={() => setIsPlaying(true)}
              className="relative w-full h-full group cursor-pointer block text-left"
              aria-label={`Play film: ${activeFilm.title}`}
            >
              <img
                src={activeFilm.thumbnail}
                alt={activeFilm.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-charcoal/35 group-hover:bg-charcoal/45 transition-colors duration-300" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 md:w-22 md:h-22 rounded-full border-2 border-ivory/70 flex items-center justify-center group-hover:border-champagne group-hover:scale-110 transition-all duration-500 backdrop-blur-xs">
                  <Play
                    className="w-6 h-6 md:w-8 md:h-8 text-ivory ml-1 group-hover:text-champagne transition-colors duration-300"
                    fill="currentColor"
                  />
                </div>
              </div>

              {/* Film metadata overlay */}
              <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-champagne text-[11px] uppercase tracking-[0.2em] font-sans">
                    <Film size={12} />
                    <span>Featured Film</span>
                    <span>·</span>
                    <MapPin size={12} />
                    <span>{activeFilm.location}</span>
                  </div>
                  <h3 className="font-serif text-xl md:text-3xl text-ivory font-normal">
                    {activeFilm.subtitle}
                  </h3>
                  <p className="text-ivory/60 font-sans text-xs md:text-sm mt-1.5 max-w-lg">
                    {activeFilm.description}
                  </p>
                </div>

                <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-charcoal/70 border border-ivory/10 text-ivory/80 text-[12px] font-sans">
                  <Clock size={12} className="text-champagne" />
                  <span>{activeFilm.duration}</span>
                </div>
              </div>
            </button>
          ) : (
            // Embedded video
            <div className="relative w-full h-full">
              <iframe
                src={`${activeFilm.videoUrl}?autoplay=1&rel=0`}
                title={activeFilm.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          )}
        </motion.div>

        {/* Additional Wedding Film Previews Grid */}
        <div className="mt-12 md:mt-16">
          <p className="text-[11px] md:text-[12px] uppercase tracking-[0.25em] text-champagne font-sans font-medium mb-6">
            Selected Highlight Films
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalFilms.map((film, i) => {
              const isCurrent = activeFilm.id === film.id && isPlaying;
              return (
                <motion.div
                  key={film.id}
                  initial={{ y: 30, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: 0.2 + i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  onClick={() => handleSelectFilm(film)}
                  className={`group relative cursor-pointer overflow-hidden bg-charcoal-light border transition-all duration-300 ${
                    isCurrent
                      ? 'border-champagne shadow-lg shadow-champagne/10'
                      : 'border-ivory/[0.08] hover:border-ivory/30'
                  }`}
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={film.thumbnail}
                      alt={film.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[600ms] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/20 transition-colors" />

                    {/* Small Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-11 h-11 rounded-full bg-charcoal/70 border border-ivory/40 flex items-center justify-center group-hover:scale-110 group-hover:border-champagne transition-all duration-300">
                        <Play
                          className="w-4 h-4 text-ivory ml-0.5 group-hover:text-champagne transition-colors"
                          fill="currentColor"
                        />
                      </div>
                    </div>

                    {/* Duration badge */}
                    <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded text-[11px] font-sans bg-charcoal/80 text-ivory/80 flex items-center gap-1">
                      <Clock size={10} className="text-champagne" />
                      <span>{film.duration}</span>
                    </div>
                  </div>

                  {/* Film Details */}
                  <div className="p-4 md:p-5">
                    <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.15em] text-champagne font-sans mb-1.5">
                      <span>{film.location}</span>
                    </div>
                    <h4 className="font-serif text-lg text-ivory group-hover:text-champagne transition-colors">
                      {film.title}
                    </h4>
                    <p className="text-ivory/50 font-sans text-xs mt-1 line-clamp-2">
                      {film.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
