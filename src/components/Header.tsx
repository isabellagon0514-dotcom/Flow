import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold tracking-tight text-foreground">
          VirtusFlow
        </div>
        
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Início
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("beneficios")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Benefícios
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Depoimentos
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("perguntas")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Perguntas
            </button>
          </li>
        </ul>

        <Button
          asChild
          className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6"
        >
          <a href="https://pay.kiwify.com.br/iEvulxb" target="_blank" rel="noopener noreferrer">
            Garanta o seu agora
          </a>
        </Button>
      </nav>
    </header>
  );
};

export default Header;
