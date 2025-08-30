import React, { useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// --- Placeholder Components and Hooks ---
// The following components are placeholders to fix the "Could not resolve" errors.
// You can replace these with your actual page components.

const PlaceholderComponent = ({ pageName }) => (
  <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
    <h1>{pageName}</h1>
    <p>This is a placeholder for the {pageName} page.</p>
  </div>
);

const Index = () => <PlaceholderComponent pageName="Index" />;
const NotFound = () => <PlaceholderComponent pageName="NotFound" />;
const AanvraagPage = () => <PlaceholderComponent pageName="AanvraagPage" />;
const BevestigingPage = () => <PlaceholderComponent pageName="BevestigingPage" />;
const BetalingGeluktPage = () => <PlaceholderComponent pageName="BetalingGeluktPage" />;
const ContactPage = () => <PlaceholderComponent pageName="ContactPage" />;
const OverOnsPage = () => <PlaceholderComponent pageName="OverOnsPage" />;
const DienstenPage = () => <PlaceholderComponent pageName="DienstenPage" />;
const FAQPage = () => <PlaceholderComponent pageName="FAQPage" />;
const KlachtenPage = () => <PlaceholderComponent pageName="KlachtenPage" />;

// Placeholder for the missing custom hook
const useScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};

// --- End of Placeholder Components ---

const queryClient = new QueryClient();

// This component handles the routing logic
function AppContent() {
  useScrollToTop();

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/aanvraag" element={<AanvraagPage />} />
      <Route path="/bevestiging" element={<BevestigingPage />} />
      <Route path="/betaling-gelukt" element={<BetalingGeluktPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/over-ons" element={<OverOnsPage />} />
      <Route path="/diensten" element={<DienstenPage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/klachten" element={<KlachtenPage />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

// This is the main App component that wraps everything with providers
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

