import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
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
  akkoord: boolean;
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
    rijbewijsType: "",
    akkoord: false,
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const totalSteps = 3;

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      return;
    }

    if (!formData.akoord) {
      toast({
        title: "Algemene voorwaarden",
        description: "U moet akkoord gaan met de algemene voorwaarden om verder te gaan.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      // Verstuur naar Netlify Forms
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "aanvraag",
          ...formData,
        }),
      });

      // Verstuur naar Supabase / Stripe
      const { error: emailError } = await supabase.functions.invoke("send-contact-email", { body: formData });
      if (emailError) console.error("Email error:", emailError);

      const { data: paymentData, error: paymentError } = await supabase.functions.invoke("create-payment", { body: formData });
      if (paymentError) throw paymentError;

      if (paymentData?.url) window.location.href = paymentData.url;

    } catch (error) {
      console.error(error);
      toast({
        title: "Fout bij verzenden",
        description: "Probeer opnieuw of bel ons",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
              <Input id="naam" value={formData.naam} onChange={(e) => handleInputChange("naam", e.target.value)} placeholder="Bijv. Jan van der Berg" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-mailadres *</Label>
              <Input id="email" type="email" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} placeholder="jan@voorbeeld.nl" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="telefoon">Telefoonnummer *</Label>
              <Input id="telefoon" value={formData.telefoon} onChange={(e) => handleInputChange("telefoon", e.target.value)} placeholder="06-12345678" required />
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="space-y-2">
              <Label>Stad *</Label>
              <Select value={formData.stad} onValueChange={(value) => handleInputChange("stad", value)}>
                <SelectTrigger><SelectValue placeholder="Selecteer uw stad" /></SelectTrigger>
                <SelectContent>
                  {stedenDorpen.map((stad) => <SelectItem key={stad} value={stad}>{stad}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Type rijbewijs *</Label>
              <Select value={formData.rijbewijsType} onValueChange={(value) => handleInputChange("rijbewijsType", value)}>
                <SelectTrigger><SelectValue placeholder="Selecteer het type rijbewijs" /></SelectTrigger>
                <SelectContent>
                  {rijbewijsTypes.map((type) => {
                    const IconComponent = type.icon;
                    return (
                      <SelectItem key={type.value} value={type.value}>
                        <div className="flex items-center gap-2"><IconComponent className="h-4 w-4" />{type.label}</div>
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>

            {formData.rijbewijsType && ['B', 'BE'].includes(formData.rijbewijsType) && (
              <RadioGroup value={formData.typeRijles} onValueChange={(value) => handleInputChange("typeRijles", value)} className="grid grid-cols-1 gap-4">
                <div className="flex items-center space-x-3 border-2 rounded-lg p-4">
                  <RadioGroupItem value="automaat" id="automaat" />
                  <Label htmlFor="automaat" className="flex-1 cursor-pointer">
                    <div className="font-medium">Automaat</div>
                    <div className="text-sm text-muted-foreground">Eenvoudiger te leren, geen koppeling</div>
                  </Label>
                </div>
                <div className="flex items-center space-x-3 border-2 rounded-lg p-4">
                  <RadioGroupItem value="schakel" id="schakel" />
                  <Label htmlFor="schakel" className="flex-1 cursor-pointer">
                    <div className="font-medium">Schakel</div>
                    <div className="text-sm text-muted-foreground">Traditioneel, meer controle</div>
                  </Label>
                </div>
                <div className="flex items-center space-x-3 border-2 rounded-lg p-4">
                  <RadioGroupItem value="nog-niet-zeker" id="nog-niet-zeker" />
                  <Label htmlFor="nog-niet-zeker" className="flex-1 cursor-pointer">
                    <div className="font-medium">Nog niet zeker</div>
                    <div className="text-sm text-muted-foreground">Ons team helpt u kiezen welke het beste bij u past.</div>
                  </Label>
                </div>
              </RadioGroup>
            )}
          </>
        );
      case 3:
        return (
          <>
            <div className="space-y-4">
              <h3 className="font-semibold">Controleer uw gegevens</h3>
              <div>Naam: {formData.naam}</div>
              <div>Email: {formData.email}</div>
              <div>Telefoon: {formData.telefoon}</div>
              <div>Stad: {formData.stad}</div>
              <div>Rijbewijs: {formData.rijbewijsType}</div>
              <div>Type rijles: {formData.typeRijles}</div>
            </div>

            <div className="flex items-center mt-4">
              <Checkbox id="akoord" checked={formData.akoord} onCheckedChange={(checked) => handleInputChange("akoord", checked)} />
              <Label htmlFor="akoord" className="ml-2 text-sm">Ik ga akkoord met de <Link to="/algemene-voorwaarden" className="text-primary underline">algemene voorwaarden</Link></Label>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1: return formData.naam && formData.email && formData.telefoon;
      case 2
