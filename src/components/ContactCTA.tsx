import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { contact } from '../data/content';

export default function ContactCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      id="contact"
      className="py-20 md:py-30 bg-charcoal text-ivory relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div ref={ref} className="editorial-narrow relative z-10 text-center">
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-[11px] md:text-[12px] uppercase tracking-[0.25em] text-champagne font-sans font-medium mb-4"
        >
          Get in Touch
        </motion.p>

        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="font-serif text-3xl md:text-4xl lg:text-5xl text-ivory mb-5 md:mb-6"
        >
          Let's tell your story
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-ivory/60 font-sans text-[15px] md:text-base max-w-lg mx-auto mb-10"
        >
          Planning a wedding? We'd love to be part of your celebration. Reach
          out to us and let's create something beautiful together.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{
            duration: 0.7,
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* WhatsApp CTA */}
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-champagne text-charcoal text-[13px] uppercase tracking-[0.15em] font-sans font-medium hover:bg-champagne-light transition-colors duration-300"
          >
            <MessageCircle size={16} />
            <span>WhatsApp Us</span>
          </a>

          {/* Email fallback */}
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-ivory/20 text-ivory/80 text-[13px] uppercase tracking-[0.15em] font-sans font-medium hover:border-champagne hover:text-champagne transition-colors duration-300"
          >
            <span>Send an Email</span>
          </a>
        </motion.div>

        {/* Contact details */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{
            duration: 0.7,
            delay: 0.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-14 md:mt-18 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-ivory/40 font-sans text-[13px]"
        >
          <span>{contact.location}</span>
          <span className="hidden md:inline text-ivory/20">·</span>
          <a
            href={`tel:${contact.phone.replace(/\s+/g, '')}`}
            className="hover:text-champagne transition-colors duration-300"
          >
            {contact.phone}
          </a>
          <span className="hidden md:inline text-ivory/20">·</span>
          <a
            href={`mailto:${contact.email}`}
            className="hover:text-champagne transition-colors duration-300"
          >
            {contact.email}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
