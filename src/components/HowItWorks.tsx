import { FeatureSteps } from "@/components/ui/feature-steps";
import stepCadastro from "@/assets/step-cadastro.png";
import stepPagamento from "@/assets/step-pagamento.png";
import stepIniciarConsulta from "@/assets/step-iniciar-consulta.png";

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
    content: 'Pague de forma segura e comece seu atendimento médico na mesma hora.',
    image: stepPagamento
  },
  { 
    step: 'Passo 3',
    title: 'Seja atendido pelo médico',
    content: 'Após o pagamento, você é automaticamente direcionado para a consulta online.',
    image: stepIniciarConsulta
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="bg-gradient-to-b from-muted/30 to-background">
      <FeatureSteps 
        features={features}
        title="Como Funciona?"
        subtitle="Atendimento médico online em 3 passos simples"
        badge="Simples e Rápido"
        autoPlayInterval={4000}
      />
    </section>
  );
};

export default HowItWorks;
