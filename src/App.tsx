import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { track } from "@/lib/analytics";
import Presencial from "./pages/Presencial.tsx";
import NotFound from "./pages/NotFound.tsx";

/*
 * PÁGINAS DESATIVADAS (código guardado em src/pages, não foi apagado nada):
 *   - Home antiga      → src/pages/Index.tsx      (ficava em "/")
 *   - Turma 2026       → src/pages/Turma2026.tsx  (ficava em "/turma2026")
 * Para reativar: descomente o import abaixo e troque a rota correspondente em <Routes>.
 */
// import Index from "./pages/Index.tsx";
// import Turma2026 from "./pages/Turma2026.tsx";

/** Leva para a página principal mantendo os parâmetros da URL (utm, src, sck) e a âncora. */
const ToHome = () => {
  const { search, hash } = useLocation();
  return <Navigate to={{ pathname: "/", search, hash }} replace />;
};

const queryClient = new QueryClient();

const useCtaTracking = () => {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const link = target?.closest?.('a[href="#inscricao"]') as HTMLAnchorElement | null;
      if (!link || link.dataset.analytics === "apply") return;
      track("cta_click", { cta_text: link.textContent?.trim().slice(0, 80) ?? "" });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
};

const App = () => {
  useCtaTracking();
  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Página principal: a formação presencial. /presencial continua respondendo para não quebrar links antigos. */}
          <Route path="/" element={<Presencial />} />
          <Route path="/presencial" element={<Presencial />} />
          {/* Desativada: quem abrir /turma2026 vai para a página principal */}
          <Route path="/turma2026" element={<ToHome />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;
