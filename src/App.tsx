import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WeddingStories from './components/WeddingStories';
import Gallery from './components/Gallery';
import FeaturedFilm from './components/FeaturedFilm';
import StudioIntro from './components/StudioIntro';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import Lightbox from './components/Lightbox';
import { allPortfolioImages, type PortfolioItem } from './data/content';

export default function App() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleOpenLightbox = (item: PortfolioItem) => {
    const foundIndex = allPortfolioImages.findIndex((img) => img.id === item.id);
    setLightboxIndex(foundIndex >= 0 ? foundIndex : 0);
    setLightboxOpen(true);
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WeddingStories onOpenLightbox={handleOpenLightbox} />
        <Gallery onOpenLightbox={handleOpenLightbox} />
        <FeaturedFilm />
        <StudioIntro />
        <ContactCTA />
      </main>
      <Footer />

      {/* Global Image Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        currentIndex={lightboxIndex}
        items={allPortfolioImages}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </>
  );
}
