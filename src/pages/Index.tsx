import { Inicio } from "@/components/Inicio";
import { Sobre } from "@/components/Sobre";
import { Habilidades } from "@/components/Habilidades";
import { Projetos } from "@/components/Projetos";
import { Contato } from "@/components/Contato";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Inicio />
        <Sobre />
        <Habilidades />
        <Projetos />
        <Contato />
      </main>
    </div>
  );
};

export default Index;
