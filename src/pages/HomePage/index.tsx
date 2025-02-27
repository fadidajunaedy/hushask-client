import Header from "@/components/common/Header";
import HeroSection from "./sections/HeroSection";
import WhySection from "./sections/WhySection";
import HowSection from "./sections/HowSection";
import CtaSection from "./sections/CtaSection";
import Footer from "@/components/common/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <WhySection />
      <HowSection />
      <CtaSection />
      <Footer />
    </>
  );
};

export default HomePage;
