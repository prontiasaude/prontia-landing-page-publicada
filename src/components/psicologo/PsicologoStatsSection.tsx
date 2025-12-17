import { Button } from "@/components/ui/button";
import { Users, Zap, ThumbsUp } from "lucide-react";

const trustBadges = [
  {
    icon: Users,
    label: "Sem filas"
  },
  {
    icon: Zap,
    label: "Atendimento Imediato"
  },
  {
    icon: ThumbsUp,
    label: "Satisfação Garantida"
  }
];

const PsicologoStatsSection = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container text-center">
        <h2 className="font-heading text-2xl md:text-4xl font-bold text-primary-foreground mb-8">
          A maior plataforma de terapia online do Brasil
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
          <div className="text-primary-foreground">
            <p className="text-sm font-medium opacity-90">Agende sua sessão</p>
            <p className="text-sm font-bold">agora mesmo:</p>
          </div>
          <span className="text-4xl md:text-5xl font-heading font-extrabold text-primary-foreground">
            R$ 89,90
          </span>
          <Button variant="cta" size="lg" className="text-base" asChild>
            <a href="https://prontiasaude.com.br/entrar">AGENDAR SESSÃO</a>
          </Button>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6">
          {trustBadges.map((badge, index) => (
            <div key={index} className="flex items-center gap-2 text-primary-foreground/80">
              <badge.icon className="w-4 h-4" />
              <span className="text-xs font-medium">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PsicologoStatsSection;
