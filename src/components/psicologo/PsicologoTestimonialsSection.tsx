import { TestimonialsColumn } from "@/components/ui/testimonials-columns";
import { motion } from "motion/react";
import { BadgeCheck } from "lucide-react";

const testimonials = [
  {
    text: "A terapia online mudou minha vida! Consegui falar com uma psicóloga incrível sem sair de casa. Me sinto muito melhor com a ansiedade.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
    name: "Maria Silva",
    role: "São Paulo, SP",
  },
  {
    text: "Tinha receio de terapia online, mas a experiência foi excelente. A psicóloga foi muito acolhedora e profissional.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
    name: "Carlos Santos",
    role: "Belo Horizonte, MG",
  },
  {
    text: "Com dois filhos pequenos, ir ao psicólogo era impossível. Agora faço terapia no horário que posso. Recomendo muito!",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
    name: "Ana Oliveira",
    role: "Rio de Janeiro, RJ",
  },
  {
    text: "A terapia me ajudou a superar um momento muito difícil. Atendimento humanizado e sigilo total.",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop&crop=face",
    name: "Roberto Ferreira",
    role: "Curitiba, PR",
  },
  {
    text: "Finalmente um serviço de saúde mental acessível! O preço é justo e a qualidade do atendimento é excelente.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop&crop=face",
    name: "Juliana Costa",
    role: "Salvador, BA",
  },
  {
    text: "Oferecemos terapia online para os funcionários e a satisfação aumentou muito. Menos estresse e mais produtividade.",
    image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=100&h=100&fit=crop&crop=face",
    name: "Fernando Lima",
    role: "Porto Alegre, RS",
  },
  {
    text: "Moro em cidade pequena sem psicólogos. Com a plataforma, consegui fazer terapia sem viajar 200km.",
    image: "https://images.unsplash.com/photo-1548142813-c348350df52b?w=100&h=100&fit=crop&crop=face",
    name: "Lucia Mendes",
    role: "Santo Amaro, MA",
  },
  {
    text: "A plataforma é muito fácil de usar e a psicóloga explica tudo com paciência. Me sinto acolhida mesmo à distância.",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=100&h=100&fit=crop&crop=face",
    name: "Patricia Alves",
    role: "Recife, PE",
  },
  {
    text: "Atendimento humanizado e transformador. A terapia me ajudou a me conhecer melhor. Obrigado!",
    image: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=100&h=100&fit=crop&crop=face",
    name: "Bruno Rodrigues",
    role: "Fortaleza, CE",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const PsicologoTestimonialsSection = () => {
  return (
    <section className="bg-background py-20 relative">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <BadgeCheck className="w-4 h-4" />
            Depoimentos
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mt-5 text-center">
            O que nossos pacientes dizem
          </h2>
          <p className="text-center mt-5 text-muted-foreground">
            Veja a experiência de quem já faz terapia online conosco.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default PsicologoTestimonialsSection;
