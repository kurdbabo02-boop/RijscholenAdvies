import { Link } from "react-router-dom";
import { Car, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Aanvraag indienen", href: "/aanvraag" },
    { name: "Diensten", href: "/diensten" },
    { name: "Over ons", href: "/over-ons" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" }
  ];

  const serviceLinks = [
    { name: "Rijschooladvies", href: "/diensten" },
    { name: "Veelgestelde vragen", href: "/faq" },
    { name: "Klachten", href: "/klachten" },
    { name: "Prijzen", href: "/aanvraag" }
  ];

  const legalLinks = [
    { name: "Privacybeleid", href: "/privacy" },
    { name: "Algemene voorwaarden", href: "/algemene-voorwaarden" },
  ];

  const socialLinks = [
    { 
      name: "Facebook", 
      icon: Facebook, 
      href: "https://www.facebook.com/profile.php?id=61579752631864&locale=nl_NL" 
    },
    { 
      name: "TikTok", 
      icon: TikTokIcon, 
      href: "https://www.tiktok.com/@rijscholenadvies.nl" 
    },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="py-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="space-y-5">
            <Link to="/" className="flex items-center gap-2.5 font-bold text-xl">
              <div className="h-9 w-9 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Car className="h-5 w-5 text-white" />
              </div>
              Rijscholen Advies
            </Link>
            <p className="text-sm text-background/70 leading-relaxed">
              Wij helpen u bij het vinden van de beste én goedkoopste rijschool. 
              Persoonlijk advies op maat, gecertificeerde rijscholen en begeleiding bij aanmelding.
            </p>
            
            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 rounded-xl bg-background/10 hover:bg-background/20 flex items-center justify-center transition-all duration-200 hover:scale-105"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation links */}
          <div className="col-span-2 grid grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-semibold text-sm uppercase tracking-wider text-background/50">Snelle links</h3>
              <nav className="flex flex-col space-y-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-sm uppercase tracking-wider text-background/50">Onze diensten</h3>
              <nav className="flex flex-col space-y-2">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Contact info */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm uppercase tracking-wider text-background/50">Contact</h3>
            <div className="space-y-3">
              <a href="tel:+31684646176" className="flex items-center gap-3 text-background/70 hover:text-background transition-colors">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+31 6 84646176</span>
              </a>
              <a href="mailto:info@rijscholenadvies.nl" className="flex items-center gap-3 text-background/70 hover:text-background transition-colors">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@rijscholenadvies.nl</span>
              </a>
              <div className="flex items-start gap-3 text-background/70">
                <Clock className="h-4 w-4 mt-0.5" />
                <span className="text-sm">Ma t/m vr 8:00 - 17:30</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-background/15 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-background/50">
              © {currentYear} Rijscholen Advies. Alle rechten voorbehouden.
            </div>
            
            <nav className="flex flex-wrap gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm text-background/50 hover:text-background/80 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 448 512"
  >
    <path d="M448,209.9c-17.5,0-34.5-2.9-50.2-8.2c-9.4-3.2-18.3-7.3-26.8-12.3v163.1c0,82.5-66.9,149.5-149.5,149.5
    S72,435,72,352.5S138.9,203,221.5,203c7.1,0,14.1.5,21,1.4v76.6c-6.9-2.3-14.2-3.5-21.9-3.5c-39,0-70.7,31.7-70.7,70.7
    s31.7,70.7,70.7,70.7s70.7-31.7,70.7-70.7V0h75.9c1.3,9.2,3.5,18.2,6.6,26.8c7.5,21.4,20.3,40.1,37.5,55.3
    c17.2,15.1,38.1,25.3,60.9,29.7c7.8,1.5,15.8,2.3,24,2.3V209.9z"/>
  </svg>
);
