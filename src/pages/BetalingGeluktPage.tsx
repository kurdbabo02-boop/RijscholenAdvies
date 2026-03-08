import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CheckCircle, Phone, Mail, Clock, PartyPopper } from "lucide-react";

const BetalingGeluktPage = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-subtle flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Betaling wordt verwerkt...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main className="container mx-auto px-4 py-8 pt-28 md:pt-32">
        <div className="max-w-xl mx-auto">
          <Card className="shadow-card border-0 rounded-2xl animate-fade-in">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto mb-4 h-16 w-16 rounded-2xl bg-success/5 flex items-center justify-center">
                <PartyPopper className="h-8 w-8 text-success" />
              </div>
              <CardTitle className="text-2xl text-success">Betaling gelukt!</CardTitle>
              <CardDescription className="text-base">
                Uw betaling is succesvol verwerkt. Wij nemen vandaag nog contact met u op.
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-5">
              <div className="bg-success/5 rounded-2xl p-5">
                <div className="space-y-2.5 text-sm">
                  {["Betaling van €41,90 is succesvol verwerkt", "Uw persoonlijke rijschooladvies wordt voorbereid", "Ons team neemt vandaag nog contact met u op"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-sm">Wat gebeurt er nu?</h3>
                {["Ons team analyseert uw wensen", "U ontvangt uw persoonlijke advies", "Wij helpen u bij contact met de rijschool", "Gratis nazorg en ondersteuning"].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/5 flex items-center justify-center text-primary text-xs font-bold mt-0.5 flex-shrink-0">{i + 1}</div>
                    <span className="text-sm">{step}</span>
                  </div>
                ))}
              </div>

              <div className="bg-muted/30 rounded-2xl p-5">
                <h3 className="font-semibold text-sm mb-3">Contact voor vragen</h3>
                <div className="space-y-2.5">
                  <a href="tel:+31684646176" className="flex items-center gap-3 text-sm hover:text-primary transition-colors">
                    <Phone className="h-4 w-4 text-primary" /><span>+31 6 84646176</span>
                  </a>
                  <a href="mailto:info@rijscholenadvies.nl" className="flex items-center gap-3 text-sm hover:text-primary transition-colors">
                    <Mail className="h-4 w-4 text-secondary" /><span>info@rijscholenadvies.nl</span>
                  </a>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" /><span>Ma t/m vr 8:00 - 17:30</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <Button asChild variant="hero" size="lg" className="w-full">
                  <Link to="/">Terug naar homepage</Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/contact">Contact opnemen</Link>
                </Button>
              </div>

              {sessionId && (
                <p className="text-center text-xs text-muted-foreground">
                  Referentie: {sessionId.slice(-8).toUpperCase()}
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BetalingGeluktPage;
