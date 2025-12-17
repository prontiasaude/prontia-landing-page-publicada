import Header from "@/components/Header";
import PsicologoHeroSection from "@/components/psicologo/PsicologoHeroSection";
import PsicologoPriceBanner from "@/components/psicologo/PsicologoPriceBanner";
import PsicologoUseCasesSection from "@/components/psicologo/PsicologoUseCasesSection";
import PsicologoHowItWorks from "@/components/psicologo/PsicologoHowItWorks";
import PsicologoStatsSection from "@/components/psicologo/PsicologoStatsSection";
import PsicologoCredentialsSection from "@/components/psicologo/PsicologoCredentialsSection";
import PsicologoTestimonialsSection from "@/components/psicologo/PsicologoTestimonialsSection";
import PsicologoFAQSection from "@/components/psicologo/PsicologoFAQSection";
import Footer from "@/components/Footer";
import PsicologoAvailableNotification from "@/components/psicologo/PsicologoAvailableNotification";

const Psicologo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PsicologoAvailableNotification />
      <main>
        <PsicologoHeroSection />
        <PsicologoPriceBanner />
        <PsicologoUseCasesSection />
        <PsicologoHowItWorks />
        <PsicologoStatsSection />
        <PsicologoCredentialsSection />
        <PsicologoTestimonialsSection />
        <PsicologoFAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Psicologo;
