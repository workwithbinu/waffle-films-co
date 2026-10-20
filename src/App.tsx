import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WeddingStories from './components/WeddingStories';
import FeaturedFilm from './components/FeaturedFilm';
import StudioIntro from './components/StudioIntro';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WeddingStories />
        <FeaturedFilm />
        <StudioIntro />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
