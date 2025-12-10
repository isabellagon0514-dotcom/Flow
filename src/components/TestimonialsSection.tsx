import { Card } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Lucas M.",
      text: "Minha rotina mudou completamente. Agora tenho foco e paz mental.",
    },
    {
      name: "Fernanda S.",
      text: "Consegui organizar minhas finanças e minha vida. VirtusFlow é essencial.",
    },
    {
      name: "Rafael P.",
      text: "A IA personalizada me ajudou a criar hábitos que realmente fazem sentido.",
    },
  ];

  return (
    <section id="depoimentos" className="py-24 px-6 bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Milhares de pessoas já estão evoluindo com o VirtusFlow.
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 space-y-4 bg-card border-border hover:border-primary/50 transition-all duration-300"
            >
              <p className="text-lg leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <p className="text-primary font-semibold">— {testimonial.name}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
