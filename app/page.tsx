import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureCards from "@/components/FeatureCards";
import FeaturedProviders from "@/components/FeaturedProviders";

import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-emerald-50">
      <Navbar />
      <Hero />
      <FeatureCards />
      <FeaturedProviders />
      
      <CTASection />
      <Footer />
    </main>
  );
}