import { Brain, DollarSign, Zap } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Brain,
      title: "Autodomínio",
      description: "Treine sua mente com desafios estoicos e foco racional.",
    },
    {
      icon: DollarSign,
      title: "Clareza Financeira",
      description: "Controle gastos com lógica e inteligência emocional.",
    },
    {
      icon: Zap,
      title: "Produtividade Real",
      description: "IA que cria rotinas e metas baseadas no seu propósito.",
    },
  ];

  return (
    <section id="beneficios" className="py-24 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Por que o VirtusFlow é diferente de tudo que você já viu?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="space-y-4 p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
