import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CheckCircle, Phone, Mail, Clock } from "lucide-react";

const BetalingGeluktPage = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-subtle flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Betaling wordt verwerkt...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main className="container mx-auto px-4 py-8 pt-24">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-smooth animate-fade-in">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-secondary flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-success">Betaling gelukt!</CardTitle>
              <CardDescription>
                Uw betaling is succesvol verwerkt. Wij nemen vandaag nog contact met u op.
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Success confirmation */}
              <div className="bg-success/5 border border-success/20 rounded-lg p-6">
                <h3 className="font-semibold mb-4 text-success">Uw aanvraag is ontvangen</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Betaling van €41,90 is succesvol verwerkt</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Uw persoonlijke rijschooladvies wordt voorbereid</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Ons team neemt vandaag nog contact met u op</span>
                  </div>
                </div>
              </div>

              {/* What happens next */}
              <div className="space-y-4">
                <h3 className="font-semibold">Wat gebeurt er nu?</h3>
                <div className="grid gap-3">
                  {[
                    "Ons team analyseert uw wensen en zoekt de beste rijscholen",
                    "U ontvangt binnen enkele uren uw persoonlijke advies",
                    "Wij helpen u bij contact leggen met de gekozen rijschool",
                    "Gratis nazorg en ondersteuning tijdens uw leerproces"
                  ].map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold mt-0.5">
                        {index + 1}
                      </div>
                      <span className="text-sm">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact information */}
              <div className="bg-muted/50 rounded-lg p-6">
                <h3 className="font-semibold mb-4">Contact voor vragen</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">+31 638901956</div>
                      <div className="text-sm text-muted-foreground">Voor dringende vragen</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-secondary/10 flex items-center justify-center">
                      <Mail className="h-4 w-4 text-secondary" />
                    </div>
                    <div>
                      <div className="font-medium">info@rijscholenadvies.nl</div>
                      <div className="text-sm text-muted-foreground">Voor algemene vragen</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Maandag t/m vrijdag</div>
                      <div className="text-sm text-muted-foreground">8:00 - 17:30</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-6 space-y-4">
                <Button asChild variant="hero" size="lg" className="w-full">
                  <Link to="/">
                    Terug naar homepage
                  </Link>
                </Button>
                
                <Button asChild variant="outline" className="w-full">
                  <Link to="/contact">
                    Contact opnemen
                  </Link>
                </Button>
              </div>

              {sessionId && (
                <div className="text-center text-xs text-muted-foreground pt-4">
                  Referentienummer: {sessionId.slice(-8).toUpperCase()}
                </div>
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