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
  regio: string;
  typeRijles: string;
}

const AanvraagPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    naam: "",
    email: "",
    telefoon: "",
    regio: "",
    typeRijles: ""
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

  const regiOptions = [
    "Noord-Holland", "Zuid-Holland", "Utrecht", "Gelderland", 
    "Noord-Brabant", "Limburg", "Zeeland", "Friesland", 
    "Groningen", "Drenthe", "Overijssel", "Flevoland"
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
              <Label>Regio *</Label>
              <Select value={formData.regio} onValueChange={(value) => handleInputChange("regio", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecteer jouw provincie" />
                </SelectTrigger>
                <SelectContent>
                  {regiOptions.map((regio) => (
                    <SelectItem key={regio} value={regio}>
                      {regio}
                    </SelectItem>
                  ))}
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
                <div className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-muted transition-colors">
                  <RadioGroupItem value="automaat" id="automaat" />
                  <Label htmlFor="automaat" className="flex-1 cursor-pointer">
                    <div className="font-medium">Automaat</div>
                    <div className="text-sm text-muted-foreground">Eenvoudiger te leren, geen koppeling</div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border rounded-lg p-4 hover:bg-muted transition-colors">
                  <RadioGroupItem value="schakel" id="schakel" />
                  <Label htmlFor="schakel" className="flex-1 cursor-pointer">
                    <div className="font-medium">Schakel</div>
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
            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="font-semibold mb-4">Controleer jouw gegevens</h3>
              <div className="space-y-2 text-sm">
                <div><span className="font-medium">Naam:</span> {formData.naam}</div>
                <div><span className="font-medium">E-mail:</span> {formData.email}</div>
                <div><span className="font-medium">Telefoon:</span> {formData.telefoon}</div>
                <div><span className="font-medium">Regio:</span> {formData.regio}</div>
                <div><span className="font-medium">Type rijles:</span> {formData.typeRijles}</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg">
                <Shield className="h-8 w-8 text-primary" />
                <div>
                  <div className="font-medium">Betrouwbaar</div>
                  <div className="text-sm text-muted-foreground">Gecertificeerde rijscholen</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-secondary/5 rounded-lg">
                <Clock className="h-8 w-8 text-secondary" />
                <div>
                  <div className="font-medium">Snel advies</div>
                  <div className="text-sm text-muted-foreground">Binnen 24 uur reactie</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-4 bg-accent/5 rounded-lg">
                <Star className="h-8 w-8 text-accent" />
                <div>
                  <div className="font-medium">Top kwaliteit</div>
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
        return formData.regio && formData.typeRijles;
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
              <span className="text-sm font-medium">Stap {currentStep} van {totalSteps}</span>
              <span className="text-sm text-muted-foreground">{Math.round((currentStep / totalSteps) * 100)}% voltooid</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-gradient-primary h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              ></div>
            </div>
          </div>

          <Card className="shadow-smooth animate-fade-in">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-gradient-primary flex items-center justify-center">
                <Car className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-2xl">
                {currentStep === 1 && "Jouw gegevens"}
                {currentStep === 2 && "Rijles voorkeuren"}
                {currentStep === 3 && "Bevestiging"}
              </CardTitle>
              <CardDescription>
                {currentStep === 1 && "Laat ons weten wie je bent"}
                {currentStep === 2 && "Wat voor rijles zoek je?"}
                {currentStep === 3 && "Controleer en bevestig je aanvraag"}
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
                    variant={currentStep === totalSteps ? "hero" : "default"}
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