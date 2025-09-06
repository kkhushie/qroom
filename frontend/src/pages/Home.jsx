// src/pages/Home.jsx
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import HowItWorksSection from "../components/HowItWorksSection";
import TestimonialsSection from "../components/TestimonialsSection";
import Footer from "../components/Footer";
import FaqSection from "../components/FaqSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#fdfdfd]">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default Home;
