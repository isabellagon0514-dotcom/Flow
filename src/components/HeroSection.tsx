import { Button } from "@/components/ui/button";
import virtusflowDemo from "@/assets/virtusflow-demo.gif";

const HeroSection = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center pt-20 pb-12 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Transforme sua mente.{" "}
              <span className="text-primary">Domine seu tempo.</span>{" "}
              Evolua com o VirtusFlow.
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              O app que une filosofia, produtividade e finanças para criar uma versão mais racional, equilibrada e bem-sucedida de você.
            </p>
            
            <Button
              size="lg"
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 animate-glow"
            >
              <a href="https://pay.kiwify.com.br/iEvulxb" target="_blank" rel="noopener noreferrer">
                Baixe agora e comece sua jornada
              </a>
            </Button>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <img
              src={virtusflowDemo}
              alt="VirtusFlow App Demo"
              className="max-w-md w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
