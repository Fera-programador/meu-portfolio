import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

import { Sobre } from "@/components/Sobre";
import { Habilidades } from "@/components/Habilidades";
import { Projetos } from "@/components/Projetos";
import { Contato } from "@/components/Contato";

const queryClient = new QueryClient();

const App = () => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <div className="min-h-screen bg-background flex flex-col">
          <Header />

          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/habilidades" element={<Habilidades />} />
              <Route path="/projetos" element={<Projetos />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </div>

      </TooltipProvider>
    </QueryClientProvider>
  </BrowserRouter>
);

export default App
