
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Car, Clock, Shield, Star } from "lucide-react";

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
  const [formData, setFormData] = useState<FormData>({
    naam: "",
    email: "",
    telefoon: "",
    stad: "",
    typeRijles: "",
    rijbewijsType: ""
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Navigate to confirmation with form data
      navigate("/bevestiging", { state: { formData } });
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
              <Label>Stad of dorp *</Label>
              <Select value={formData.stad} onValueChange={(value) => handleInputChange("stad", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecteer jouw stad of dorp" />
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
                  <SelectItem value="B">Rijbewijs B - Personenauto</SelectItem>
                  <SelectItem value="AM">Rijbewijs AM - Bromfiets</SelectItem>
                  <SelectItem value="A1">Rijbewijs A1 - Lichte motorfiets</SelectItem>
                  <SelectItem value="A2">Rijbewijs A2 - Middelzware motorfiets</SelectItem>
                  <SelectItem value="A">Rijbewijs A - Zware motorfiets</SelectItem>
                  <SelectItem value="C1">Rijbewijs C1 - Lichte vrachtwagen</SelectItem>
                  <SelectItem value="C">Rijbewijs C - Vrachtwagen</SelectItem>
                  <SelectItem value="D1">Rijbewijs D1 - Minibus</SelectItem>
                  <SelectItem value="D">Rijbewijs D - Bus</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-4">
              <Label>Type rijles *</Label>
              <RadioGroup 
                value={formData.typeRijles} 
                onValueChange={(value) => handleInputChange("typeRijles", value)}
                className="grid grid-cols-1 gap-4 sm:grid-cols-2"
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
              </RadioGroup>
            </div>
          </div>
        );
        
      case 3:
        return (
          <div className="space-y-6">
            <div className="bg-muted/30 rounded-lg p-6 border">
              <h3 className="font-semibold mb-4 text-foreground">Controleer jouw gegevens</h3>
              <div className="space-y-2 text-sm">
                <div><span className="font-medium text-foreground">Naam:</span> <span className="text-muted-foreground">{formData.naam}</span></div>
                <div><span className="font-medium text-foreground">E-mail:</span> <span className="text-muted-foreground">{formData.email}</span></div>
                <div><span className="font-medium text-foreground">Telefoon:</span> <span className="text-muted-foreground">{formData.telefoon}</span></div>
                <div><span className="font-medium text-foreground">Stad/dorp:</span> <span className="text-muted-foreground">{formData.stad}</span></div>
                <div><span className="font-medium text-foreground">Rijbewijs:</span> <span className="text-muted-foreground">{formData.rijbewijsType}</span></div>
                <div><span className="font-medium text-foreground">Type rijles:</span> <span className="text-muted-foreground">{formData.typeRijles}</span></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                  <div className="font-medium text-foreground">Snel advies</div>
                  <div className="text-sm text-muted-foreground">Binnen 24 uur reactie</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-accent/5 rounded-lg border border-accent/10">
                <Star className="h-8 w-8 text-accent" />
                <div>
                  <div className="font-medium text-foreground">Top kwaliteit</div>
                  <div className="text-sm text-muted-foreground">Alleen 5-sterren rijscholen</div>
                </div>
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
        return formData.stad && formData.typeRijles && formData.rijbewijsType;
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
            <div className="flex items-center justify-between mb-2">
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
                {currentStep === 1 && "Jouw gegevens"}
                {currentStep === 2 && "Rijles voorkeuren"}
                {currentStep === 3 && "Bevestiging"}
              </CardTitle>
              <CardDescription>
                {currentStep === 1 && "Deel jouw contactgegevens met ons zodat wij je persoonlijk kunnen helpen"}
                {currentStep === 2 && "Vertel ons over jouw rijlesvoorkeuren en wensen"}
                {currentStep === 3 && "Controleer en bevestig je aanvraag voor persoonlijk advies"}
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
                    >
                      Vorige
                    </Button>
                  )}
                  <Button 
                    type="submit" 
                    disabled={!isStepValid()}
                    className="flex-1"
                    variant={currentStep === totalSteps ? "default" : "default"}
                  >
                    {currentStep === totalSteps ? "Naar bevestiging" : "Volgende"}
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
