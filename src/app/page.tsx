import { SmoothScroll } from './components/SmoothScroll';
import Navbar from './components/Navbar';
import ProductHero from './components/ProductHero';
import ProductHighlights from './components/ProductHighlights';
import VideoShowcase from './components/VideoShowcase';
import HeadphoneCanvas from './components/HeadphoneCanvas';
import SpecsSection from './components/SpecsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <SmoothScroll>
      <main style={{ background: '#080808' }}>
        <Navbar />
        <ProductHero />
        <ProductHighlights />
        <VideoShowcase />
        <HeadphoneCanvas />
        <SpecsSection />
        <CTASection />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
