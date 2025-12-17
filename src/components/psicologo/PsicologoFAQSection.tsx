import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona a sessão de terapia online?",
    answer: "A sessão é realizada por videochamada segura, no dia e horário que você escolher — podendo acontecer até na mesma hora do pagamento. Após o agendamento, você recebe um link exclusivo para acessar a sessão pelo celular, tablet ou computador, sem necessidade de instalar aplicativos.\n\nDurante o atendimento, o psicólogo pode:\n• Realizar acolhimento e escuta terapêutica\n• Aplicar técnicas psicoterapêuticas\n• Emitir laudos e relatórios quando necessário\n• Orientar sobre seu processo terapêutico\n\nTodo o processo acontece em uma plataforma criptografada, garantindo privacidade e sigilo profissional.",
  },
  {
    question: "Em quanto tempo serei atendido?",
    answer: "O atendimento pode ser imediato ou agendado conforme sua preferência. Temos psicólogos disponíveis 24 horas por dia.",
  },
  {
    question: "Preciso baixar algum aplicativo?",
    answer: "Não. A sessão acontece diretamente no navegador do seu celular, tablet ou computador.",
  },
  {
    question: "Os laudos e relatórios têm validade legal?",
    answer: "Sim. Todos os documentos emitidos têm validade legal em todo o território nacional, conforme regulamentação do CFP (Conselho Federal de Psicologia).",
  },
  {
    question: "Quanto tempo dura cada sessão?",
    answer: "As sessões têm duração de aproximadamente 50 minutos, seguindo o padrão da psicoterapia tradicional.",
  },
  {
    question: "Criança e adolescente pode fazer terapia online?",
    answer: "Sim. Crianças e adolescentes podem ser atendidos desde que estejam autorizados pelo responsável legal. Para menores de 12 anos, é recomendada a presença do responsável durante as sessões.",
  },
  {
    question: "Posso fazer terapia de casal online?",
    answer: "Sim! Oferecemos terapia de casal online. Ambos podem participar da mesma sessão, cada um de seu dispositivo ou juntos no mesmo ambiente.",
  },
  {
    question: "As sessões são confidenciais?",
    answer: "Sim. Nossa plataforma segue rigorosamente todas as normas e leis brasileiras, garantindo atendimento seguro, ético e sigiloso, conforme:\n\n• CFP – Resolução nº 11/2018 e 04/2020: Regulamenta o atendimento psicológico online.\n• LGPD – Lei nº 13.709/2018: Proteção total dos dados pessoais.\n• Código de Ética do Psicólogo: Sigilo, responsabilidade e ética em todos os atendimentos.",
  },
  {
    question: "O que está incluso na sessão?",
    answer: "• Sessão completa de terapia via videochamada (50 min)\n• Acompanhamento do seu processo terapêutico\n• Laudos e relatórios quando solicitados\n• Registro seguro no prontuário eletrônico\n• Suporte e orientação durante o atendimento",
  },
  {
    question: "Os psicólogos são registrados no CRP?",
    answer: "Sim. Todas as sessões são realizadas por psicólogos formados, registrados no CRP e autorizados para atendimento online conforme as resoluções do CFP.",
  },
];

const PsicologoFAQSection = () => {
  return (
    <section id="faq" className="py-16 bg-background">
      <div className="container max-w-3xl">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-center text-foreground mb-10">
          PERGUNTAS FREQUENTES
        </h2>

        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-lg px-4 bg-card"
            >
              <AccordionTrigger className="text-left text-sm font-medium text-foreground hover:text-primary hover:no-underline py-4">
                {index + 1} - {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground pb-4 whitespace-pre-line">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default PsicologoFAQSection;
