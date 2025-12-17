import { motion } from "motion/react";
import { 
  Brain, 
  Heart, 
  Moon, 
  Users, 
  Sparkles, 
  Target, 
  Shield, 
  MessageCircle, 
  Lightbulb,
  AlertTriangle
} from "lucide-react";
import { Button } from "@/components/ui/button";

const useCases = [
  {
    icon: Brain,
    title: "Ansiedade e Estresse",
    description: "Crises de ansiedade, preocupação excessiva e tensão constante"
  },
  {
    icon: Moon,
    title: "Depressão e Tristeza",
    description: "Sentimentos persistentes de tristeza, desânimo e falta de motivação"
  },
  {
    icon: Heart,
    title: "Relacionamentos",
    description: "Conflitos amorosos, familiares e dificuldades interpessoais"
  },
  {
    icon: Users,
    title: "Terapia de Casal",
    description: "Melhoria na comunicação e resolução de conflitos conjugais"
  },
  {
    icon: Sparkles,
    title: "Autoestima",
    description: "Insegurança, autocrítica excessiva e desenvolvimento pessoal"
  },
  {
    icon: Target,
    title: "Carreira e Propósito",
    description: "Orientação profissional, burnout e realização pessoal"
  },
  {
    icon: Shield,
    title: "Traumas e Luto",
    description: "Processamento de experiências difíceis e perdas"
  },
  {
    icon: MessageCircle,
    title: "Fobias e Medos",
    description: "Medos irracionais, fobias sociais e pânico"
  },
  {
    icon: Lightbulb,
    title: "Autoconhecimento",
    description: "Desenvolvimento emocional e inteligência emocional"
  }
];

const PsicologoUseCasesSection = () => {
  return (
    <section className="hidden md:block py-16 bg-muted/30">
      <div className="container">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Acolhemos Você em{" "}
            <span className="text-primary">Qualquer Momento</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A terapia online oferece <strong className="text-foreground">resultados comprovados</strong> para 
            diversas questões emocionais. Veja se a sua está na lista:
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto mb-10">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              className="bg-background rounded-xl p-5 shadow-card border border-border/50 hover:shadow-lg hover:border-primary/30 transition-all duration-300 group cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <useCase.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">
                    {useCase.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {useCase.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button variant="cta" size="lg" className="text-lg px-8 py-6 mb-4" asChild>
            <a href="https://prontiasaude.com.br/entrar">Iniciar Sessão Agora - R$ 89,90</a>
          </Button>
          
          {/* Disclaimer */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
            <AlertTriangle className="w-4 h-4 text-accent" />
            <span>
              Em caso de emergência psiquiátrica, procure o CVV (188) ou um pronto-socorro.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PsicologoUseCasesSection;
