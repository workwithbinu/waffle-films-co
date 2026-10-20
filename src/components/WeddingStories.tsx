import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { images } from '../data/content';

function StoryCard({
  story,
  index,
}: {
  story: (typeof images.stories)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 60, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{
        duration: 0.9,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative overflow-hidden h-full"
    >
      <div className="relative overflow-hidden h-full">
        <img
          src={story.src}
          alt={story.alt}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Caption on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <p className="text-[11px] uppercase tracking-[0.2em] text-champagne-light font-sans mb-1">
            {story.location}
          </p>
          <h3 className="font-serif text-xl md:text-2xl text-white">
            {story.title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}

export default function WeddingStories() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: '-60px' });

  return (
    <section id="stories" className="py-20 md:py-30 bg-ivory">
      <div className="editorial-container">
        {/* Section header */}
        <motion.div
          ref={headingRef}
          initial={{ y: 30, opacity: 0 }}
          animate={headingInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16"
        >
          <p className="text-[11px] md:text-[12px] uppercase tracking-[0.25em] text-champagne font-sans font-medium mb-3">
            Selected Work
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal">
            Wedding Stories
          </h2>
        </motion.div>

        {/* Editorial asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4">
          {/* Row 1: Large left (7 cols), Tall right (5 cols, spans 2 rows) */}
          <div className="md:col-span-7 aspect-[4/3] md:aspect-[16/10]">
            <StoryCard story={images.stories[0]} index={0} />
          </div>
          <div className="md:col-span-5 md:row-span-2 aspect-[3/4] md:aspect-auto md:h-full">
            <StoryCard story={images.stories[1]} index={1} />
          </div>

          {/* Row 2: Small left (3 cols), Medium middle (4 cols) */}
          <div className="md:col-span-3 aspect-square">
            <StoryCard story={images.stories[2]} index={2} />
          </div>
          <div className="md:col-span-4 aspect-[4/3]">
            <StoryCard story={images.stories[3]} index={3} />
          </div>

          {/* Row 3: Two equal columns */}
          <div className="md:col-span-5 aspect-[3/4] md:aspect-[4/5]">
            <StoryCard story={images.stories[4]} index={4} />
          </div>
          <div className="md:col-span-7 aspect-[4/3] md:aspect-[16/10]">
            <StoryCard story={images.stories[5]} index={5} />
          </div>
        </div>
      </div>
    </section>
  );
}
