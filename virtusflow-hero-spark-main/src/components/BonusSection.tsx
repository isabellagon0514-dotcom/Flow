import { Check } from "lucide-react";

const BonusSection = () => {
  const bonuses = [
    "Acesso vitalício ao app",
    "Atualizações futuras grátis",
    "Suporte exclusivo via WhatsApp",
  ];

  return (
    <section className="py-24 px-6 bg-pure-white text-deep-black">
      <div className="container mx-auto max-w-4xl text-center space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold">
          Ao garantir o VirtusFlow hoje, você recebe acesso vitalício e suporte premium.
        </h2>
        
        <div className="space-y-6">
          {bonuses.map((bonus, index) => (
            <div key={index} className="flex items-center justify-center gap-4 text-lg">
              <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center">
                <Check className="w-5 h-5 text-deep-black" />
              </div>
              <span className="font-semibold">{bonus}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
