import { Link } from "react-router-dom";
import { Car, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Aanvraag indienen", href: "/aanvraag" },
    { name: "Over ons", href: "/over-ons" },
    { name: "Contact", href: "/contact" }
  ];

  const serviceLinks = [
    { name: "Rijschooladvies", href: "/aanvraag" },
    { name: "Veelgestelde vragen", href: "/contact" },
    { name: "Klantbeoordelingen", href: "/over-ons" },
    { name: "Prijzen", href: "/aanvraag" }
  ];

  const legalLinks = [
    { name: "Privacybeleid", href: "#" },
    { name: "Algemene voorwaarden", href: "#" },
    { name: "Cookiebeleid", href: "#" },
    { name: "Disclaimer", href: "#" }
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="py-8 grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Company info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 font-bold text-xl">
              <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Car className="h-5 w-5 text-white" />
              </div>
              Rijschool Adviesbureau
            </Link>
            <p className="text-sm text-background/80 leading-relaxed">
              Al sinds 2014 helpen wij mensen bij het vinden van de beste rijschool. 
              Wij zoeken en vinden de beste rijscholen voor u.
            </p>
            
            {/* Social links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="h-8 w-8 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation links - horizontal layout for mobile too */}
          <div className="col-span-2 grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6">
            {/* Quick links */}
            <div className="space-y-2 md:space-y-3">
              <h3 className="font-semibold text-sm md:text-base">Snelle links</h3>
              <nav className="flex flex-col space-y-1 md:space-y-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-xs md:text-sm text-background/80 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div className="space-y-2 md:space-y-3">
              <h3 className="font-semibold text-sm md:text-base">Onze diensten</h3>
              <nav className="flex flex-col space-y-1 md:space-y-2">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-xs md:text-sm text-background/80 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Contact info */}
          <div className="space-y-3">
            <h3 className="font-semibold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-background/60" />
                <span className="text-sm text-background/80">+31 638901956</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-background/60" />
                <span className="text-sm text-background/80">info@rijscholenadvies.nl</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-background/60 mt-0.5" />
                <div className="text-sm text-background/80">
                  Maandag t/m vrijdag 8:00 - 17:30
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-background/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-background/60">
              © {currentYear} Rijschool Adviesbureau. Alle rechten voorbehouden.
            </div>
            
            <nav className="flex flex-wrap gap-6">
              {legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-background/60 hover:text-background/80 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="border-t border-background/20 py-6">
          <div className="text-center">
            <div className="text-sm text-background/60 mb-4">
              Vertrouwd door 10,000+ tevreden klanten
            </div>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <div className="text-xs">Gecertificeerd KVK</div>
              <div className="text-xs">SSL beveiligd</div>
              <div className="text-xs">Maandag t/m vrijdag 8:00-17:30</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};