import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const UrgencySection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 3,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="comprar" className="py-24 px-6 bg-deep-black">
      <div className="container mx-auto max-w-4xl text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold">
          Promoção de lançamento disponível apenas hoje.
        </h2>
        
        <p className="text-xl text-muted-foreground">
          O preço sobe assim que o contador zerar.
        </p>
        
        <div className="flex justify-center gap-4 text-center">
          <div className="bg-card p-6 rounded-xl min-w-[100px]">
            <div className="text-5xl font-bold text-primary">
              {String(timeLeft.hours).padStart(2, "0")}
            </div>
            <div className="text-sm text-muted-foreground mt-2">Horas</div>
          </div>
          <div className="bg-card p-6 rounded-xl min-w-[100px]">
            <div className="text-5xl font-bold text-primary">
              {String(timeLeft.minutes).padStart(2, "0")}
            </div>
            <div className="text-sm text-muted-foreground mt-2">Minutos</div>
          </div>
          <div className="bg-card p-6 rounded-xl min-w-[100px]">
            <div className="text-5xl font-bold text-primary">
              {String(timeLeft.seconds).padStart(2, "0")}
            </div>
            <div className="text-sm text-muted-foreground mt-2">Segundos</div>
          </div>
        </div>
        
        <Button
          size="lg"
          asChild
          className="bg-primary text-primary-foreground hover:bg-primary/90 text-xl px-12 py-8 animate-glow mt-8"
        >
          <a href="https://pay.kiwify.com.br/iEvulxb" target="_blank" rel="noopener noreferrer">
            Garanta agora sua versão premium do VirtusFlow
          </a>
        </Button>
      </div>
    </section>
  );
};

export default UrgencySection;
