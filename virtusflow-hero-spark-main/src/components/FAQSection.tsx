import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "O app funciona em qualquer celular?",
      answer:
        "Sim! O VirtusFlow está disponível para Android e iOS, funcionando perfeitamente em qualquer smartphone moderno.",
    },
    {
      question: "Preciso pagar mensalidade?",
      answer:
        "Não! Com o acesso vitalício, você paga apenas uma vez e tem acesso completo ao app para sempre, incluindo todas as atualizações futuras.",
    },
    {
      question: "A IA realmente personaliza os desafios?",
      answer:
        "Absolutamente. Nossa IA analisa seus hábitos, objetivos e rotina para criar desafios sob medida que se adaptam à sua evolução pessoal.",
    },
    {
      question: "O VirtusFlow ajuda em produtividade e finanças?",
      answer:
        "Sim, o app integra ferramentas de gestão de tempo, controle financeiro e desenvolvimento pessoal baseados em princípios filosóficos comprovados.",
    },
  ];

  return (
    <section id="perguntas" className="py-24 px-6">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Perguntas Frequentes
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
