import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import RocketMailPage from "./pages/RocketMailPage";
import AutomacaoPage from "./pages/AutomacaoPage";
import AnaliseDadosPage from "./pages/AnaliseDadosPage";
import LandingPageService from "./pages/LandingPageService";
import NotFound from "./pages/NotFound";
import ServicesPage from "./pages/ServicesPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <div className="min-h-screen w-full">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/contato" element={<ContactPage />} />
            <Route path="/rocket-mail" element={<RocketMailPage />} />
            <Route path="/automacao" element={<AutomacaoPage />} />
            <Route path="/analise-dados" element={<AnaliseDadosPage />} />
            <Route path="/landing-page" element={<LandingPageService />} />
            <Route path="/servicos" element={<ServicesPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
