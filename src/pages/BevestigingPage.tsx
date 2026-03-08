import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CheckCircle, Car, CreditCard, Mail, Phone, Shield } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const BevestigingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (location.state?.formData) {
      setFormData(location.state.formData);
    } else {
      navigate("/aanvraag");
    }
  }, [location.state, navigate]);

  const handlePayment = async () => {
    setIsProcessing(true);
    try {
      const { data, error } = await supabase.functions.invoke('create-payment', { body: formData });
      if (error) throw error;
      if (!data?.url) throw new Error("No payment URL received");
      window.location.href = data.url;
    } catch (error) {
      console.error('Payment error:', error);
      alert('Er is een fout opgetreden bij het starten van de betaling. Probeer het opnieuw.');
      setIsProcessing(false);
    }
  };

  if (!formData) return null;

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main className="container mx-auto px-4 py-8 pt-28 md:pt-32">
        <div className="max-w-xl mx-auto">
          <Card className="shadow-card border-0 rounded-2xl animate-fade-in">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto mb-4 h-14 w-14 rounded-2xl bg-secondary/5 flex items-center justify-center">
                <CreditCard className="h-7 w-7 text-secondary" />
              </div>
              <CardTitle className="text-2xl">Betaling</CardTitle>
              <CardDescription>U bent bijna klaar! Betaal veilig voor persoonlijk rijschooladvies.</CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-5">
              {/* Order summary */}
              <div className="bg-muted/30 rounded-2xl p-5">
                <h3 className="font-semibold mb-3 text-sm">Uw aanvraag</h3>
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-primary/5 flex items-center justify-center">
                    <Car className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">Persoonlijk Rijschooladvies</div>
                    <div className="text-xs text-muted-foreground">{formData.typeRijles} rijles in {formData.stad}</div>
                  </div>
                </div>
              </div>

              {/* Contact details */}
              <div className="bg-muted/30 rounded-2xl p-5">
                <h3 className="font-semibold mb-3 text-sm">Uw gegevens</h3>
                <div className="space-y-2.5 text-sm">
                  <div className="flex items-center gap-3"><Car className="h-4 w-4 text-muted-foreground" /><span>{formData.naam}</span></div>
                  <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-muted-foreground" /><span>{formData.email}</span></div>
                  <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-muted-foreground" /><span>{formData.telefoon}</span></div>
                </div>
              </div>

              {/* Price breakdown */}
              <div className="bg-primary/5 rounded-2xl p-5 space-y-3">
                <div className="flex justify-between items-center">
                  <div><div className="font-semibold text-sm">Persoonlijk advies</div><div className="text-xs text-muted-foreground">Eenmalige kosten</div></div>
                  <div className="text-right"><div className="font-semibold">€34,50</div><div className="text-xs text-muted-foreground">excl. BTW</div></div>
                </div>
                <div className="flex justify-between items-center text-sm"><span className="text-muted-foreground">BTW (21%)</span><span>€7,40</span></div>
                <div className="border-t pt-3"><div className="flex justify-between items-center"><span className="font-semibold">Totaal</span><span className="text-2xl font-bold text-primary">€41,90</span></div></div>
              </div>

              {/* Benefits */}
              <div className="space-y-2">
                {["Persoonlijk advies van experts", "Best passende rijscholen", "Gratis nazorg"].map((b, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm"><CheckCircle className="h-4 w-4 text-success flex-shrink-0" /><span>{b}</span></div>
                ))}
              </div>

              {/* Payment buttons */}
              <div className="pt-4 space-y-3">
                <Button onClick={handlePayment} variant="hero" size="lg" className="w-full" disabled={isProcessing}>
                  <Shield className="h-4 w-4 mr-2" />
                  {isProcessing ? "Bezig met verwerken..." : "Veilig betalen"}
                </Button>
                <Button variant="outline" onClick={() => navigate("/aanvraag")} className="w-full" disabled={isProcessing}>
                  Gegevens wijzigen
                </Button>
              </div>

              <p className="text-center text-xs text-muted-foreground">
                Veilig betalen met iDEAL of creditcard • 256-bit SSL encryptie
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BevestigingPage;
