import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle contact form submission
    alert("Bedankt voor je bericht! We nemen binnen 24 uur contact met je op.");
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main className="container mx-auto px-4 py-8 pt-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contact opnemen</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Heb je vragen over ons advies? We helpen je graag verder!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="shadow-smooth">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    Contactgegevens
                  </CardTitle>
                  <CardDescription>
                    Neem direct contact op of plan een telefoongesprek
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">Telefoon</div>
                        <div className="text-muted-foreground">085 - 123 4567</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                        <Mail className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <div className="font-medium">E-mail</div>
                        <div className="text-muted-foreground">info@rijschooladvies.nl</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <div className="font-medium">Adres</div>
                        <div className="text-muted-foreground">
                          Rijschoolstraat 123<br />
                          1234 AB Amsterdam
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">Openingstijden</div>
                        <div className="text-muted-foreground">
                          Maandag - Vrijdag: 09:00 - 18:00<br />
                          Zaterdag: 10:00 - 16:00
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-smooth">
                <CardHeader>
                  <CardTitle>Veelgestelde vragen</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="font-medium mb-2">Hoe snel krijg ik advies?</div>
                    <div className="text-sm text-muted-foreground">
                      Binnen 24 uur na je aanvraag en betaling ontvang je ons advies.
                    </div>
                  </div>
                  <div>
                    <div className="font-medium mb-2">Welke rijscholen adviseren jullie?</div>
                    <div className="text-sm text-muted-foreground">
                      Alleen gecertificeerde rijscholen met minimaal 4,5 sterren beoordeling.
                    </div>
                  </div>
                  <div>
                    <div className="font-medium mb-2">Kan ik mijn geld terugkrijgen?</div>
                    <div className="text-sm text-muted-foreground">
                      Ja, binnen 14 dagen volledige geld-terug-garantie zonder vragen.
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="shadow-smooth">
              <CardHeader>
                <CardTitle>Stuur ons een bericht</CardTitle>
                <CardDescription>
                  We beantwoorden je vraag binnen 24 uur
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="voornaam">Voornaam *</Label>
                      <Input
                        id="voornaam"
                        placeholder="Jan"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="achternaam">Achternaam *</Label>
                      <Input
                        id="achternaam"
                        placeholder="van der Berg"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mailadres *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="jan@voorbeeld.nl"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="telefoon">Telefoonnummer</Label>
                    <Input
                      id="telefoon"
                      placeholder="06-12345678"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="onderwerp">Onderwerp *</Label>
                    <Input
                      id="onderwerp"
                      placeholder="Vraag over rijschooladvies"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="bericht">Bericht *</Label>
                    <Textarea
                      id="bericht"
                      placeholder="Typ hier je vraag of opmerking..."
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Verstuur bericht
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;