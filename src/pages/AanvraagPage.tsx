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
import { Car, Clock, Shield, Star, Bike, Truck, Bus, Tractor, Phone, ArrowRight, ArrowLeft } from "lucide-react";
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
    naam: "", email: "", telefoon: "", stad: "", typeRijles: "", rijbewijsType: ""
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const totalSteps = 3;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsSubmitting(true);
      try {
        const { error: emailError } = await supabase.functions.invoke('send-contact-email', {
          body: { ...formData }
        });
        if (emailError) console.error('Email error:', emailError);
        navigate('/bevestiging', { state: { formData } });
      } catch (error) {
        console.error('Error sending email:', error);
        toast({ title: "Fout bij versturen", description: "Probeer het opnieuw of neem telefonisch contact op.", variant: "destructive" });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const stedenDorpen = [
    "Amsterdam", "Rotterdam", "Den Haag", "Utrecht", "Eindhoven", "Groningen",
    "Tilburg", "Almere", "Breda", "Nijmegen", "Apeldoorn", "Haarlem",
    "Arnhem", "Zaanstad", "Haarlemmermeer", "Enschede", "Amersfoort", "Zwolle",
    "Leiden", "Maastricht", "Dordrecht", "Zoetermeer", "Emmen", "Venlo",
    "Deventer", "Delft", "Leeuwarden", "Alkmaar", "Heerlen", "Hilversum"
  ];

  const rijbewijsTypes = [
    { value: "AM", label: "AM - Bromfiets / Scooter", icon: Bike },
    { value: "A1", label: "A1 - Lichte motorfiets", icon: Bike },
    { value: "A2", label: "A2 - Middelzware motorfiets", icon: Bike },
    { value: "A", label: "A - Zware motorfiets", icon: Bike },
    { value: "B", label: "B - Personenauto", icon: Car },
    { value: "BE", label: "BE - Auto met aanhanger", icon: Car },
    { value: "C1", label: "C1 - Kleine vrachtwagen", icon: Truck },
    { value: "C", label: "C - Vrachtwagen", icon: Truck },
    { value: "CE", label: "CE - Vrachtwagen met aanhanger", icon: Truck },
    { value: "D1", label: "D1 - Kleine bus", icon: Bus },
    { value: "D", label: "D - Bus", icon: Bus },
    { value: "T", label: "T - Tractor", icon: Tractor }
  ];

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="naam">Volledige naam *</Label>
              <Input id="naam" value={formData.naam} onChange={(e) => handleInputChange("naam", e.target.value)} placeholder="Bijv. Jan van der Berg" required className="rounded-xl h-11" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-mailadres *</Label>
              <Input id="email" type="email" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} placeholder="jan@voorbeeld.nl" required className="rounded-xl h-11" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="telefoon">Telefoonnummer *</Label>
              <Input id="telefoon" value={formData.telefoon} onChange={(e) => handleInputChange("telefoon", e.target.value)} placeholder="06-12345678" required className="rounded-xl h-11" />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-5">
            <div className="space-y-2">
              <Label>Stad *</Label>
              <Select value={formData.stad} onValueChange={(value) => handleInputChange("stad", value)}>
                <SelectTrigger className="rounded-xl h-11"><SelectValue placeholder="Selecteer uw stad" /></SelectTrigger>
                <SelectContent>{stedenDorpen.map((stad) => (<SelectItem key={stad} value={stad}>{stad}</SelectItem>))}</SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Type rijbewijs *</Label>
              <Select value={formData.rijbewijsType} onValueChange={(value) => handleInputChange("rijbewijsType", value)}>
                <SelectTrigger className="rounded-xl h-11"><SelectValue placeholder="Selecteer het type rijbewijs" /></SelectTrigger>
                <SelectContent>{rijbewijsTypes.map((type) => (<SelectItem key={type.value} value={type.value}><div className="flex items-center gap-2"><type.icon className="h-4 w-4" />{type.label}</div></SelectItem>))}</SelectContent>
              </Select>
            </div>
            <div className="space-y-3">
              <Label>Type rijles voorkeuren *</Label>
              {formData.rijbewijsType && ['B', 'BE'].includes(formData.rijbewijsType) && (
                <RadioGroup value={formData.typeRijles} onValueChange={(value) => handleInputChange("typeRijles", value)} className="grid gap-3">
                  {[
                    { value: "automaat", label: "Automaat", desc: "Eenvoudiger te leren, geen koppeling" },
                    { value: "schakel", label: "Schakel", desc: "Traditioneel, meer controle" },
                    { value: "nog-niet-zeker", label: "Nog niet zeker", desc: "Wij helpen u kiezen — gratis hulp" }
                  ].map(option => (
                    <div key={option.value} className="flex items-center space-x-3 border-2 rounded-xl p-4 hover:border-primary/30 has-[:checked]:border-primary has-[:checked]:bg-primary/5 transition-all duration-200">
                      <RadioGroupItem value={option.value} id={option.value} />
                      <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                        <div className="font-medium">{option.label}</div>
                        <div className="text-sm text-muted-foreground">{option.desc}</div>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              )}
              {formData.rijbewijsType && !['B', 'BE'].includes(formData.rijbewijsType) && (
                <div className="p-4 bg-muted/50 rounded-xl border">
                  <p className="text-sm text-muted-foreground">Wij vinden automatisch de juiste rijschool voor dit rijbewijstype.</p>
                </div>
              )}
              {!formData.rijbewijsType && (
                <p className="text-sm text-muted-foreground">Selecteer eerst uw rijbewijstype.</p>
              )}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-5">
            <div className="bg-muted/30 rounded-2xl p-6 border">
              <h3 className="font-semibold mb-4">Controleer uw gegevens</h3>
              <div className="space-y-2.5 text-sm">
                {[
                  { label: "Naam", value: formData.naam },
                  { label: "E-mail", value: formData.email },
                  { label: "Telefoon", value: formData.telefoon },
                  { label: "Stad", value: formData.stad },
                  { label: "Rijbewijs", value: formData.rijbewijsType },
                  { label: "Type rijles", value: formData.typeRijles || "N.v.t." }
                ].map(item => (
                  <div key={item.label} className="flex justify-between">
                    <span className="font-medium">{item.label}</span>
                    <span className="text-muted-foreground">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: Shield, title: "Betrouwbaar", desc: "Gecertificeerde rijscholen", color: "bg-primary/5" },
                { icon: Clock, title: "Direct advies", desc: "Dezelfde dag nog", color: "bg-secondary/5" },
                { icon: Star, title: "Beste kwaliteit", desc: "Goedkoopst & best", color: "bg-accent/5" }
              ].map((item, i) => (
                <div key={i} className={`flex flex-col items-center gap-2 p-4 ${item.color} rounded-2xl border border-transparent text-center`}>
                  <item.icon className="h-6 w-6 text-primary" />
                  <div className="font-medium text-xs">{item.title}</div>
                </div>
              ))}
            </div>

            <div className="bg-primary/5 rounded-2xl p-4 border border-primary/10">
              <div className="flex items-center gap-3 mb-2">
                <Phone className="h-5 w-5 text-primary" />
                <div className="font-medium">Voor spoedvragen</div>
              </div>
              <div className="text-sm text-muted-foreground">
                Bel direct <a href="tel:+31684646176" className="font-medium text-primary hover:underline">+31 6 84646176</a>
              </div>
            </div>
          </div>
        );
      default: return null;
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1: return formData.naam && formData.email && formData.telefoon;
      case 2: return formData.stad && formData.rijbewijsType && ((['B', 'BE'].includes(formData.rijbewijsType) && formData.typeRijles) || !['B', 'BE'].includes(formData.rijbewijsType));
      case 3: return true;
      default: return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main className="container mx-auto px-4 py-8 pt-28 md:pt-32">
        <div className="max-w-xl mx-auto">
          {/* Progress indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium">Stap {currentStep} van {totalSteps}</span>
              <span className="text-sm text-muted-foreground">{Math.round((currentStep / totalSteps) * 100)}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-primary h-2 rounded-full transition-all duration-500 ease-out" style={{ width: `${(currentStep / totalSteps) * 100}%` }} />
            </div>
          </div>

          <Card className="shadow-card border-0 rounded-2xl animate-fade-in">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto mb-4 h-12 w-12 rounded-2xl bg-primary/5 flex items-center justify-center">
                <Car className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">
                {currentStep === 1 && "Uw gegevens"}
                {currentStep === 2 && "Rijles voorkeuren"}
                {currentStep === 3 && "Bevestiging"}
              </CardTitle>
              <CardDescription>
                {currentStep === 1 && "Deel uw contactgegevens zodat wij u persoonlijk kunnen helpen"}
                {currentStep === 2 && "Vertel ons over uw rijlesvoorkeuren"}
                {currentStep === 3 && "Controleer en bevestig uw aanvraag"}
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {renderStep()}
                
                <div className="flex gap-3 pt-4">
                  {currentStep > 1 && (
                    <Button type="button" variant="outline" onClick={() => setCurrentStep(currentStep - 1)} className="flex-1" disabled={isSubmitting}>
                      <ArrowLeft className="mr-2 h-4 w-4" /> Vorige
                    </Button>
                  )}
                  <Button type="submit" disabled={!isStepValid() || isSubmitting} className="flex-1" variant={currentStep === totalSteps ? "hero" : "default"}>
                    {isSubmitting ? "Versturen..." : (currentStep === totalSteps ? "Naar betaling" : "Volgende")}
                    {!isSubmitting && currentStep < totalSteps && <ArrowRight className="ml-2 h-4 w-4" />}
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
