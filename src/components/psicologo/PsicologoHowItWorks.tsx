import { FeatureSteps } from "@/components/ui/feature-steps";
import stepCadastro from "@/assets/step-cadastro.png";
import stepPagamento from "@/assets/step-pagamento.png";
import stepConsulta from "@/assets/step-consulta.png";

const features = [
  { 
    step: 'Passo 1', 
    title: 'Faça seu cadastro',
    content: 'Cadastre-se em nossa plataforma de forma rápida e simples, sem burocracia.', 
    image: stepCadastro 
  },
  { 
    step: 'Passo 2',
    title: 'Efetue o pagamento',
    content: 'Pague de forma segura e comece sua sessão de terapia na mesma hora.',
    image: stepPagamento
  },
  { 
    step: 'Passo 3',
    title: 'Inicie sua terapia',
    content: 'Sempre que precisar de apoio psicológico é só acessar nossa plataforma 24/7.',
    image: stepConsulta
  },
];

const PsicologoHowItWorks = () => {
  return (
    <section id="como-funciona" className="bg-gradient-to-b from-muted/30 to-background">
      <FeatureSteps 
        features={features}
        title="Como Funciona?"
        subtitle="Terapia online em 3 passos simples"
        badge="Simples e Rápido"
        autoPlayInterval={4000}
      />
    </section>
  );
};

export default PsicologoHowItWorks;
