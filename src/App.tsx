import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AanvraagPage from "./pages/AanvraagPage";
import BevestigingPage from "./pages/BevestigingPage";
import BetalingGeluktPage from "./pages/BetalingGeluktPage";
import ContactPage from "./pages/ContactPage";
import KlachtenPage from "./pages/KlachtenPage";
import OverOnsPage from "./pages/OverOnsPage";
import DienstenPage from "./pages/DienstenPage";
import FAQPage from "./pages/FAQPage";
import PrivacyPage from "./pages/PrivacyPage";
import AlgemeneVoorwaardenPage from "./pages/AlgemeneVoorwaardenPage";

const queryClient = new QueryClient();

function AppContent() {
  useScrollToTop();
  
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/aanvraag" element={<AanvraagPage />} />
      <Route path="/bevestiging" element={<BevestigingPage />} />
      <Route path="/betaling-gelukt" element={<BetalingGeluktPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/klachten" element={<KlachtenPage />} />
      <Route path="/over-ons" element={<OverOnsPage />} />
      <Route path="/diensten" element={<DienstenPage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/algemene-voorwaarden" element={<AlgemeneVoorwaardenPage />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
