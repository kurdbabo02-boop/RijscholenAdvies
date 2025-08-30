import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useScrollToTop } from "@/hooks/useScrollToTop";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AanvraagPage from "./pages/AanvraagPage";
import BevestigingPage from "./pages/BevestigingPage";
import BetalingGeluktPage from "./pages/BetalingGeluktPage";
import ContactPage from "./pages/ContactPage";
import OverOnsPage from "./pages/OverOnsPage";
import DienstenPage from "./pages/DienstenPage";
import FAQPage from "./pages/FAQPage";
import KlachtenPage from "./pages/KlachtenPage";

// NavigationMenu
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

const queryClient = new QueryClient();

// Subcomponent voor content
function RootContent() {
  useScrollToTop();

  return (
    <>
      {/* Navigation Menu */}
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/" className="px-4 py-2 hover:underline">
                Home
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/advies" className="px-4 py-2 hover:underline">
                Advies
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/klachten" className="px-4 py-2 hover:underline">
                Klachten
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Routes */}
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

// Hoofd App component
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <RootContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
