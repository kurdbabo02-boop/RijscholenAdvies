import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CheckCircle, Car, CreditCard, Mail, Phone } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const BevestigingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    if (location.state?.formData) {
      setFormData(location.state.formData);
    } else {
      // Redirect to form if no data
      navigate("/aanvraag");
    }
  }, [location.state, navigate]);

  const handlePayment = async () => {
    try {
      const { data, error } = await supabase.functions.invoke('create-payment', {
        body: formData
      });

      if (error) throw error;

      // Redirect directly to Stripe checkout
      window.location.href = data.url;
    } catch (error) {
      console.error('Payment error:', error);
      alert('Er is een fout opgetreden bij het starten van de betaling. Probeer het opnieuw.');
    }
  };

  if (!formData) {
    return null;
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
              <CardTitle className="text-2xl">Betaling</CardTitle>
              <CardDescription>
                U bent bijna klaar! Betaal veilig voor persoonlijk rijschooladvies.
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Order summary */}
              <div className="bg-muted/50 rounded-lg p-6">
                <h3 className="font-semibold mb-4">Uw aanvraag</h3>
                <div className="space-y-3">
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
              </div>

              {/* Contact details */}
              <div className="bg-muted/50 rounded-lg p-6">
                <h3 className="font-semibold mb-4">Uw gegevens</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-secondary/10 flex items-center justify-center">
                      <Car className="h-4 w-4 text-secondary" />
                    </div>
                    <div>
                      <div className="font-medium">{formData.naam}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center">
                      <Mail className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <div className="text-sm">{formData.email}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm">{formData.telefoon}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Price breakdown */}
              <div className="bg-gradient-primary/5 rounded-lg p-6 space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold">Persoonlijk advies</div>
                    <div className="text-sm text-muted-foreground">Eenmalige kosten</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold">€33,50</div>
                    <div className="text-xs text-muted-foreground">excl. BTW</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center text-sm">
                  <div className="text-muted-foreground">BTW (21%)</div>
                  <div>€8,40</div>
                </div>
                
                <div className="border-t pt-3">
                  <div className="flex justify-between items-center">
                    <div className="font-semibold">Totaal te betalen</div>
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
                    "3 best passende rijscholen in uw omgeving",
                    "Vergelijking van prijzen en lesaanbod",
                    "Wij leggen contact met rijscholen voor u",
                    "Gratis nazorg en ondersteuning"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment buttons */}
              <div className="pt-6 space-y-4">
                <Button 
                  onClick={handlePayment}
                  variant="hero"
                  size="lg"
                  className="w-full"
                >
                  <CreditCard className="h-5 w-5 mr-2" />
                  Veilig betalen met iDEAL of creditcard
                </Button>
                
                <Button 
                  variant="outline" 
                  onClick={() => navigate("/aanvraag")} 
                  className="w-full"
                >
                  Gegevens wijzigen
                </Button>
              </div>

              <div className="text-center text-xs text-muted-foreground pt-4">
                Veilig betalen met 256-bit SSL encryptie. Geen automatische verlengingen.
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