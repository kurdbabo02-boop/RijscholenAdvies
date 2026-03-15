import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CheckCircle, Car, Copy, Mail, Phone, Landmark } from "lucide-react";
import { toast } from "sonner";


const BevestigingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<any>(null);

  useEffect(() => {
    if (location.state?.formData) {
      setFormData(location.state.formData);
    } else {
      navigate("/aanvraag");
    }
  }, [location.state, navigate]);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text.replace(/\s/g, ""));
    toast.success(`${label} gekopieerd!`);
  };

  if (!formData) return null;

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main className="container mx-auto px-4 py-8 pt-24">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-smooth animate-fade-in">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-secondary flex items-center justify-center">
                <Landmark className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl">Betaling via overboeking</CardTitle>
              <CardDescription>
                Maak het bedrag over naar onderstaande rekening. Na ontvangst gaan wij direct voor u aan de slag.
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Order summary */}
              <div className="bg-muted/50 rounded-lg p-6">
                <h3 className="font-semibold mb-4">Uw aanvraag</h3>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Car className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Persoonlijk Rijschooladvies</div>
                    <div className="text-sm text-muted-foreground">
                      {formData.typeRijles} rijles in {formData.stad}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bank details */}
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 space-y-4">
                <h3 className="font-semibold flex items-center gap-2">
                  <Landmark className="h-5 w-5 text-primary" />
                  Bankgegevens
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-muted-foreground">IBAN</div>
                      <div className="font-mono font-semibold text-lg">{IBAN}</div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard(IBAN, "IBAN")}
                    >
                      <Copy className="h-4 w-4 mr-1" />
                      Kopieer
                    </Button>
                  </div>

                  <div>
                    <div className="text-sm text-muted-foreground">Ten name van</div>
                    <div className="font-semibold">{TENAAMSTELLING}</div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-muted-foreground">Bedrag</div>
                      <div className="font-semibold text-lg text-primary">€41,90</div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => copyToClipboard("41.90", "Bedrag")}
                    >
                      <Copy className="h-4 w-4 mr-1" />
                      Kopieer
                    </Button>
                  </div>

                  <div>
                    <div className="text-sm text-muted-foreground">Omschrijving</div>
                    <div className="font-medium">Rijschooladvies - {formData.naam}</div>
                  </div>
                </div>
              </div>

              {/* Price breakdown */}
              <div className="bg-muted/50 rounded-lg p-6 space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold">Persoonlijk advies</div>
                    <div className="text-sm text-muted-foreground">Eenmalige kosten</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold">€34,50</div>
                    <div className="text-xs text-muted-foreground">excl. BTW</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center text-sm">
                  <div className="text-muted-foreground">BTW (21%)</div>
                  <div>€7,40</div>
                </div>
                
                <div className="border-t pt-3">
                  <div className="flex justify-between items-center">
                    <div className="font-semibold">Totaal</div>
                    <div className="text-2xl font-bold text-primary">€41,90</div>
                  </div>
                </div>
              </div>

              {/* What you get */}
              <div className="space-y-4">
                <h3 className="font-semibold">Wat krijgt u?</h3>
                <div className="grid gap-3">
                  {[
                    "Persoonlijk advies van rijschoolexperts",
                    "Best passende rijscholen in uw omgeving",
                    "Vergelijking van prijzen en lesaanbod",
                    "Wij leggen contact met rijscholen voor u",
                    "Gratis nazorg en ondersteuning"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact details */}
              <div className="bg-muted/50 rounded-lg p-6">
                <h3 className="font-semibold mb-4">Uw gegevens</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-secondary/10 flex items-center justify-center">
                      <Car className="h-4 w-4 text-secondary" />
                    </div>
                    <div className="font-medium">{formData.naam}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center">
                      <Mail className="h-4 w-4 text-accent" />
                    </div>
                    <div className="text-sm">{formData.email}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="h-4 w-4 text-primary" />
                    </div>
                    <div className="text-sm">{formData.telefoon}</div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-6 space-y-4">
                <Button 
                  variant="outline" 
                  onClick={() => navigate("/aanvraag")} 
                  className="w-full"
                >
                  Gegevens wijzigen
                </Button>
              </div>

              <div className="text-center text-xs text-muted-foreground pt-4">
                Na ontvangst van uw betaling nemen wij dezelfde dag nog contact met u op.
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BevestigingPage;
