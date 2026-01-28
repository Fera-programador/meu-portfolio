import { Header } from "@/components/Header";
import { Inicio } from "@/components/Inicio";
import { Sobre } from "@/components/Sobre";
import { Habilidades } from "@/components/Habilidades";
import { Projetos } from "@/components/Projetos";
import { Contato } from "@/components/Contato";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Inicio />
        <Sobre />
        <Habilidades />
        <Projetos />
        <Contato />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
