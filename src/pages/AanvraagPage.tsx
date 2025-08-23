import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Car, Clock, Shield, Star, Bike, Truck, Bus, Tractor, Phone } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  naam: string;
  email: string;
  telefoon: string;
  stad: string;
  typeRijles: string;
  rijbewijsType: string;
}

const AanvraagPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    naam: "",
    email: "",
    telefoon: "",
    stad: "",
    typeRijles: "",
    rijbewijsType: ""
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const totalSteps = 3;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      return;
    }

    setIsSubmitting(true);
    try {
      // Verstuur eerst naar Supabase (mail via Edge Function)
      const { error: emailError } = await supabase.functions.invoke("send-contact-email", {
        body: { ...formData },
      });

      if (emailError) console.error("Email error:", emailError);

      // Maak daarna de Stripe sessie aan
      const { data: paymentData, error: paymentError } = await supabase.functions.invoke("create-payment", {
        body: { ...formData },
      });

      if (paymentError) throw paymentError;

      if (paymentData?.url) {
        window.location.href = paymentData.url;
      } else {
        throw new Error("Geen betaling URL ontvangen");
      }
    } catch (error) {
      console.error("Error processing payment:", error);
      toast({
        title: "Betaling kon niet worden gestart",
        description: "Probeer het opnieuw of neem telefonisch contact op.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const stedenDorpen = [
    "Amsterdam", "Rotterdam", "Den Haag", "Utrecht", "Eindhoven", "Groningen",
    "Tilburg", "Almere", "Breda", "Nijmegen", "Apeldoorn", "Haarlem",
    "Arnhem", "Zaanstad", "Haarlemmermeer", "Enschede", "Amersfoort", "Zwolle",
    "Leiden", "Maastricht", "Dordrecht", "Zoetermeer", "Emmen", "Venlo",
    "Deventer", "Delft", "Leeuwarden", "Alkmaar", "Heerlen", "Hilversum"
  ];

  const rijbewijsTypes = [
    { value: "AM", label: "AM - Bromfiets / Scooter / Brommobiel", icon: Bike },
    { value: "A1", label: "A1 - Lichte motorfiets", icon: Bike },
    { value: "A2", label: "A2 - Middelzware motorfiets", icon: Bike },
    { value: "A", label: "A - Zware motorfiets", icon: Bike },
    { value: "B", label: "B - Personenauto", icon: Car },
    { value: "BE", label: "BE - Auto met aanhanger", icon: Car },
    { value: "C1", label: "C1 - Kleine vrachtwagen", icon: Truck },
    { value: "C1E", label: "C1E - Kleine vrachtwagen met aanhanger", icon: Truck },
    { value: "C", label: "C - Vrachtwagen", icon: Truck },
    { value: "CE", label: "CE - Vrachtwagen met aanhanger", icon: Truck },
    { value: "D1", label: "D1 - Kleine bus", icon: Bus },
    { value: "D1E", label: "D1E - Kleine bus met aanhanger", icon: Bus },
    { value: "D", label: "D - Bus", icon: Bus },
    { value: "DE", label: "DE - Bus met aanhanger", icon: Bus },
    { value: "T", label: "T - Tractor / Landbouwvoertuigen", icon: Tractor }
  ];

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <div className="space-y-2">
              <Label htmlFor="naam">Volledige naam *</Label>
              <Input
                id="naam"
                name="naam"
                value={formData.naam}
                onChange={(e) => handleInputChange("naam", e.target.value)}
                placeholder="Bijv. Jan van der Berg"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-mailadres *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="jan@voorbeeld.nl"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="telefoon">Telefoonnummer *</Label>
              <Input
                id="telefoon"
                name="telefoon"
                value={formData.telefoon}
                onChange={(e) => handleInputChange("telefoon", e.target.value)}
                placeholder="06-12345678"
                required
              />
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="space-y-2">
              <Label>Stad *</Label>
              <Select
                value={formData.stad}
                onValueChange={(value) => handleInputChange("stad", value)}
                name="stad"
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecteer uw stad" />
                </SelectTrigger>
                <SelectContent>
                  {stedenDorpen.map((stad) => (
                    <SelectItem key={stad} value={stad}>{stad}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Type rijbewijs *</Label>
              <Select
                value={formData.rijbewijsType}
                onValueChange={(value) => handleInputChange("rijbewijsType", value)}
                name="rijbewijsType"
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecteer het type rijbewijs" />
                </SelectTrigger>
                <SelectContent>
                  {rijbewijsTypes.map((type) => {
                    const IconComponent = type.icon;
                    return (
                      <SelectItem key={type.value} value={type.value}>
                        <div className="flex items-center gap-2">
                          <IconComponent className="h-4 w-4" />
                          {type.label}
                        </div>
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>
          </>
        );
      case 3:
        return (
          <div className="bg-muted/30 rounded-lg p-6 border">
            <h3 className="font-semibold mb-4 text-foreground">Controleer uw gegevens</h3>
            <div className="space-y-2 text-sm">
              <div><strong>Naam:</strong> {formData.naam}</div>
              <div><strong>E-mail:</strong> {formData.email}</div>
              <div><strong>Telefoon:</strong> {formData.telefoon}</div>
              <div><strong>Stad:</strong> {formData.stad}</div>
              <div><strong>Rijbewijs:</strong> {formData.rijbewijsType}</div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.naam && formData.email && formData.telefoon;
      case 2:
        return formData.stad && formData.rijbewijsType;
      default:
        return true;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      <main className="container mx-auto px-4 py-8 pt-24">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-lg border animate-fade-in">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary flex items-center justify-center">
                <Car className="h-6 w-6 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl text-foreground">
                {currentStep === 1 && "Uw gegevens"}
                {currentStep === 2 && "Rijles voorkeuren"}
                {currentStep === 3 && "Bevestiging"}
              </CardTitle>
              <CardDescription>
                {currentStep === 1 && "Deel uw contactgegevens"}
                {currentStep === 2 && "Kies uw voorkeuren"}
                {currentStep === 3 && "Bevestig uw aanvraag"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form
                name="aanvraag"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="aanvraag" />
                <input type="hidden" name="bot-field" />
                {renderStep()}
                <div className="flex gap-4 pt-6">
                  {currentStep > 1 && (
                    <Button type="button" variant="outline" onClick={() => setCurrentStep(currentStep - 1)} disabled={isSubmitting} className="flex-1">
                      Vorige
                    </Button>
                  )}
                  <Button type="submit" disabled={!isStepValid() || isSubmitting} className="flex-1">
                    {isSubmitting ? "Versturen..." : currentStep === totalSteps ? "Naar betaling" : "Volgende"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AanvraagPage;
