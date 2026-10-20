import { siteInfo, contact, navLinks } from '../data/content';

function InstagramIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal border-t border-ivory/[0.06]">
      <div className="editorial-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <p className="font-serif text-xl text-ivory mb-2">
              {siteInfo.name}
            </p>
            <p className="text-ivory/40 font-sans text-[13px]">
              {siteInfo.tagline}
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-ivory/50 text-[13px] font-sans hover:text-champagne transition-colors duration-300 w-fit"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Platforms */}
          <div className="flex flex-col gap-2.5">
            <p className="text-[11px] uppercase tracking-[0.2em] text-champagne/80 font-sans font-medium mb-1">
              Connect
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-[13px] font-sans text-ivory/50">
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-champagne transition-colors duration-300"
              >
                <InstagramIcon size={14} />
                <span>Instagram</span>
              </a>
              <a
                href={contact.threads}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-champagne transition-colors duration-300"
              >
                Threads
              </a>
              <a
                href={contact.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-champagne transition-colors duration-300"
              >
                YouTube
              </a>
              <a
                href={contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-champagne transition-colors duration-300"
              >
                Facebook
              </a>
              <a
                href={contact.linktree}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-champagne transition-colors duration-300"
              >
                Linktree
              </a>
            </div>

            <div className="mt-4 pt-4 border-t border-ivory/[0.06] flex flex-col gap-1.5 text-[13px] font-sans text-ivory/50">
              <a
                href={`mailto:${contact.email}`}
                className="hover:text-champagne transition-colors duration-300 w-fit"
              >
                {contact.email}
              </a>
              <a
                href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                className="hover:text-champagne transition-colors duration-300 w-fit"
              >
                {contact.phone}
              </a>
              <p className="text-ivory/30 text-[12px] pt-1">
                {contact.location}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 md:mt-16 pt-6 border-t border-ivory/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-ivory/25 text-[12px] font-sans">
            © {year} {siteInfo.name.replace(/\.$/, '')}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
