import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PriceBanner from "@/components/PriceBanner";
import TelemedicineSection from "@/components/TelemedicineSection";
import HowItWorks from "@/components/HowItWorks";
import MedicalCertificateSection from "@/components/MedicalCertificateSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import DoctorAvailableNotification from "@/components/DoctorAvailableNotification";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <DoctorAvailableNotification />
      <main>
        <HeroSection />
        <PriceBanner />
        <TelemedicineSection />
        <HowItWorks />
        <StatsSection />
        <MedicalCertificateSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
