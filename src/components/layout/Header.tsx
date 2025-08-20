import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Mail } from "lucide-react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigation = [{
    name: "Home",
    href: "/"
  }, {
    name: "Aanvraag",
    href: "/aanvraag"
  }, {
    name: "Diensten",
    href: "/diensten"
  }, {
    name: "Over ons",
    href: "/over-ons"
  }, {
    name: "FAQ",
    href: "/faq"
  }, {
    name: "Contact",
    href: "/contact"
  }];
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      {/* Top contact bar */}
      <div className="bg-gradient-primary text-white py-3 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span className="font-medium">+31 638901956</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span className="font-medium">info@rijscholenadvies.nl</span>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full">
              <span className="font-medium">Maandag-Vrijdag 8:00-17:30</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo and mobile CTA */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center font-bold text-xl">
              <img 
                src="/lovable-uploads/9d5189c0-637f-48f8-9867-db0fb78cbe94.png" 
                alt="Rijscholen Advies Logo" 
                className="h-16 w-auto"
              />
            </Link>
            
            {/* Mobile CTA Button next to logo */}
            <div className="md:hidden">
              <Button asChild variant="hero" size="sm">
                <Link to="/aanvraag">
                  Aanvragen
                </Link>
              </Button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map(item => (
              <Link 
                key={item.name} 
                to={item.href} 
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href) 
                    ? "text-primary border-b-2 border-primary pb-1" 
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild variant="hero">
              <Link to="/aanvraag">Vraag offerte aan</Link>
            </Button>
          </div>

          {/* Mobile menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 mt-6">
                <Link to="/" className="flex items-center font-bold text-xl">
                  <img 
                    src="/lovable-uploads/9d5189c0-637f-48f8-9867-db0fb78cbe94.png" 
                    alt="Rijscholen Advies Logo" 
                    className="h-16 w-auto"
                  />
                </Link>
                
                <nav className="flex flex-col gap-4">
                  {navigation.map(item => (
                    <Link 
                      key={item.name} 
                      to={item.href} 
                      onClick={() => setIsOpen(false)} 
                      className={`text-lg font-medium transition-colors hover:text-primary ${
                        isActive(item.href) ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                {/* Mobile contact info */}
                <div className="pt-6 border-t space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+31 638901956</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>info@rijscholenadvies.nl</span>
                  </div>
                </div>

                <Button asChild variant="hero" className="mt-4">
                  <Link to="/aanvraag" onClick={() => setIsOpen(false)}>
                    Vraag je offerte aan
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};