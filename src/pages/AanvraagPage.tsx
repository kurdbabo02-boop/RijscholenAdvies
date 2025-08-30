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
    } else {
      setIsSubmitting(true);
      try {
        // Send email notification first
        const { error: emailError } = await supabase.functions.invoke('send-contact-email', {
          body: { ...formData }
        });

        if (emailError) {
          console.error('Email error:', emailError);
          // Continue with payment even if email fails
        }

        // Create Stripe payment session
        const { data: paymentData, error: paymentError } = await supabase.functions.invoke('create-payment', {
          body: { ...formData }
        });

        if (paymentError) throw paymentError;

        if (paymentData?.url) {
          // Redirect to Stripe checkout
          window.location.href = paymentData.url;
        } else {
          throw new Error("Geen betaling URL ontvangen");
        }
      } catch (error) {
        console.error('Error processing payment:', error);
        toast({
          title: "Betaling kon niet worden gestart",
          description: "Probeer het opnieuw of neem telefonisch contact op.",
          variant: "destructive"
        });
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
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="naam">Volledige naam *</Label>
              <Input
                id="naam"
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
                value={formData.telefoon}
                onChange={(e) => handleInputChange("telefoon", e.target.value)}
                placeholder="06-12345678"
                required
              />
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label>Stad *</Label>
              <Select value={formData.stad} onValueChange={(value) => handleInputChange("stad", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecteer uw stad" />
                </SelectTrigger>
                <SelectContent>
                  {stedenDorpen.map((stad) => (
                    <SelectItem key={stad} value={stad}>
                      {stad}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Type rijbewijs *</Label>
              <Select value={formData.rijbewijsType} onValueChange={(value) => handleInputChange("rijbewijsType", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecteer het type rijbewijs" />
                </SelectTrigger>
                <SelectContent>
                  {rijbewijsTypes.map((type) => {
                    const IconComponent = type.icon;
                    return (
                      <SelectItem key={type.value} value={type.value} className="flex items-center gap-2">
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
            
            
            <div className="space-y-4">
              <Label>Type rijles voorkeuren *</Label>
              {formData.rijbewijsType && ['B', 'BE'].includes(formData.rijbewijsType) && (
                <RadioGroup 
                  value={formData.typeRijles} 
                  onValueChange={(value) => handleInputChange("typeRijles", value)}
                  className="grid grid-cols-1 gap-4"
                >
                  <div className="flex items-center space-x-3 border-2 rounded-lg p-4 hover:border-primary/50 transition-all duration-200">
                    <RadioGroupItem value="automaat" id="automaat" />
                    <Label htmlFor="automaat" className="flex-1 cursor-pointer">
                      <div className="font-medium text-foreground">Automaat</div>
                      <div className="text-sm text-muted-foreground">Eenvoudiger te leren, geen koppeling</div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 border-2 rounded-lg p-4 hover:border-primary/50 transition-all duration-200">
                    <RadioGroupItem value="schakel" id="schakel" />
                    <Label htmlFor="schakel" className="flex-1 cursor-pointer">
                      <div className="font-medium text-foreground">Schakel</div>
                      <div className="text-sm text-muted-foreground">Traditioneel, meer controle</div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 border-2 rounded-lg p-4 hover:border-primary/50 transition-all duration-200">
                    <RadioGroupItem value="nog-niet-zeker" id="nog-niet-zeker" />
                    <Label htmlFor="nog-niet-zeker" className="flex-1 cursor-pointer">
                      <div className="font-medium text-foreground">Nog niet zeker</div>
                      <div className="text-sm text-muted-foreground">Neem contact op en wij helpen u kiezen welke het beste bij u past - gratis hulp</div>
                    </Label>
                  </div>
                </RadioGroup>
              )}
              
              {formData.rijbewijsType && !['B', 'BE'].includes(formData.rijbewijsType) && (
                <div className="p-4 bg-muted/50 rounded-lg border">
                  <p className="text-sm text-muted-foreground">
                    Dit type rijles voorkeuren is niet voor dit type rijbewijs nodig. 
                    Wij vinden automatisch de juiste rijschool voor u.
                  </p>
                </div>
              )}
              
              {!formData.rijbewijsType && (
                <p className="text-sm text-muted-foreground">Selecteer eerst uw rijbewijstype om de opties te zien.</p>
              )}
              
              {formData.typeRijles === "nog-niet-zeker" && (
                <div className="mt-4 p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="text-sm text-muted-foreground mb-3">
                    Twijfelt u tussen automaat of schakel? Ons team helpt u graag bij deze keuze!
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link to="/contact">
                      Direct contact opnemen
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        );
        
      case 3:
        return (
          <div className="space-y-6">
              <div className="bg-muted/30 rounded-lg p-6 border">
              <h3 className="font-semibold mb-4 text-foreground">Controleer uw gegevens</h3>
                <div className="space-y-2 text-sm">
                <div><span className="font-medium text-foreground">Naam:</span> <span className="text-muted-foreground">{formData.naam}</span></div>
                <div><span className="font-medium text-foreground">E-mail:</span> <span className="text-muted-foreground">{formData.email}</span></div>
                <div><span className="font-medium text-foreground">Telefoon:</span> <span className="text-muted-foreground">{formData.telefoon}</span></div>
                <div><span className="font-medium text-foreground">Stad:</span> <span className="text-muted-foreground">{formData.stad}</span></div>
                <div><span className="font-medium text-foreground">Rijbewijs:</span> <span className="text-muted-foreground">{formData.rijbewijsType}</span></div>
                <div><span className="font-medium text-foreground">Type rijles:</span> <span className="text-muted-foreground">{formData.typeRijles}</span></div>
                </div>
            </div>
            
            <div className="grid grid-cols-3 md:grid-cols-1 gap-4">
              <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg border border-primary/10">
                <Shield className="h-8 w-8 text-primary" />
                <div>
                  <div className="font-medium text-foreground">Betrouwbaar</div>
                  <div className="text-sm text-muted-foreground">Gecertificeerde rijscholen</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-secondary/5 rounded-lg border border-secondary/10">
                <Clock className="h-8 w-8 text-secondary" />
                <div>
                  <div className="font-medium text-foreground">Direct advies</div>
                  <div className="text-sm text-muted-foreground">Ons team neemt vandaag nog contact op</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-accent/5 rounded-lg border border-accent/10">
                <Star className="h-8 w-8 text-accent" />
                <div>
                  <div className="font-medium text-foreground">Beste kwaliteit</div>
                  <div className="text-sm text-muted-foreground">Goedkoopste én beste rijscholen</div>
                </div>
              </div>
            </div>

            {/* Contact info for urgent questions */}
            <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
              <div className="flex items-center gap-3 mb-2">
                <Phone className="h-5 w-5 text-primary" />
                <div className="font-medium text-foreground">Voor spoedvragen</div>
              </div>
              <div className="text-sm text-muted-foreground">
                Bel direct <span className="font-medium text-primary">+31 638901956</span> - ook buiten kantooruren bereikbaar voor dringende vragen
              </div>
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
        return formData.stad && formData.rijbewijsType && (
          (['B', 'BE'].includes(formData.rijbewijsType) && formData.typeRijles) || 
          !['B', 'BE'].includes(formData.rijbewijsType)
        );
      case 3:
        return true;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main className="container mx-auto px-4 py-8 pt-24">
        <div className="max-w-2xl mx-auto">
          {/* Progress indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2 mt-8">
              <span className="text-sm font-medium text-foreground">Stap {currentStep} van {totalSteps}</span>
              <span className="text-sm text-muted-foreground">{Math.round((currentStep / totalSteps) * 100)}% voltooid</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              ></div>
            </div>
          </div>

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
                {currentStep === 1 && "Deel uw contactgegevens met ons zodat wij u persoonlijk kunnen helpen"}
                {currentStep === 2 && "Vertel ons over uw rijlesvoorkeuren en wensen"}
                {currentStep === 3 && "Controleer en bevestig uw aanvraag voor persoonlijk advies"}
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {renderStep()}
                
                <div className="flex gap-4 pt-6">
                  {currentStep > 1 && (
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setCurrentStep(currentStep - 1)}
                      className="flex-1"
                      disabled={isSubmitting}
                    >
                      Vorige
                    </Button>
                  )}
                  <Button 
                    type="submit" 
                    disabled={!isStepValid() || isSubmitting}
                    className="flex-1"
                    variant={currentStep === totalSteps ? "default" : "default"}
                  >
                    {isSubmitting ? "Versturen..." : (currentStep === totalSteps ? "Naar betaling" : "Volgende")}
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