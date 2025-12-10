import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BonusSection from "@/components/BonusSection";
import UrgencySection from "@/components/UrgencySection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <BonusSection />
      <UrgencySection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
