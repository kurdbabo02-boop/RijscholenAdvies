import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Mail } from "lucide-react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Aanvraag", href: "/aanvraag" },
    { name: "Diensten", href: "/diensten" },
    { name: "Over ons", href: "/over-ons" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top contact bar */}
      <div className="bg-primary text-white py-2.5 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+31684646176" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Phone className="h-3.5 w-3.5" />
                <span className="font-medium">+31 6 84646176</span>
              </a>
              <a href="mailto:info@rijscholenadvies.nl" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Mail className="h-3.5 w-3.5" />
                <span className="font-medium">info@rijscholenadvies.nl</span>
              </a>
            </div>
            <div className="text-white/80 text-xs">
              Ma t/m vr 8:00 - 17:30
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/80 border-b border-border/50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo and mobile CTA */}
            <div className="flex items-center gap-3">
              <Link to="/" className="flex items-center">
                <img 
                  src="/lovable-uploads/9d5189c0-637f-48f8-9867-db0fb78cbe94.png" 
                  alt="Rijscholen Advies Logo" 
                  className="h-20 w-auto"
                  loading="eager"
                />
              </Link>
              
              <div className="md:hidden">
                <Button asChild variant="hero" size="sm">
                  <Link to="/aanvraag">Aanvragen</Link>
                </Button>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navigation.map(item => (
                <Link 
                  key={item.name} 
                  to={item.href} 
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(item.href) 
                      ? "text-primary bg-primary/5" 
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button asChild variant="hero" size="sm">
                <Link to="/aanvraag">Vraag advies aan</Link>
              </Button>
            </div>

            {/* Mobile menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="rounded-xl">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[360px]">
                <div className="flex flex-col gap-6 mt-6">
                  <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center">
                    <img 
                      src="/lovable-uploads/9d5189c0-637f-48f8-9867-db0fb78cbe94.png" 
                      alt="Rijscholen Advies Logo" 
                      className="h-16 w-auto"
                    />
                  </Link>
                  
                  <nav className="flex flex-col gap-1">
                    {navigation.map(item => (
                      <Link 
                        key={item.name} 
                        to={item.href} 
                        onClick={() => setIsOpen(false)} 
                        className={`px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                          isActive(item.href) 
                            ? "text-primary bg-primary/5" 
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>

                  <div className="pt-4 border-t space-y-3">
                    <a href="tel:+31684646176" className="flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-muted/50 transition-colors">
                      <Phone className="h-4 w-4 text-primary" />
                      <span className="text-sm">+31 6 84646176</span>
                    </a>
                    <a href="mailto:info@rijscholenadvies.nl" className="flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-muted/50 transition-colors">
                      <Mail className="h-4 w-4 text-primary" />
                      <span className="text-sm">info@rijscholenadvies.nl</span>
                    </a>
                  </div>

                  <Button asChild variant="hero" className="mx-4">
                    <Link to="/aanvraag" onClick={() => setIsOpen(false)}>
                      Vraag advies aan
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};
