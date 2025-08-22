import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const ContactPage = () => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Send contact email
    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          naam: (e.target as any).voornaam.value + ' ' + (e.target as any).achternaam.value,
          email: (e.target as any).email.value,
          telefoon: (e.target as any).telefoon.value,
          onderwerp: (e.target as any).onderwerp.value,
          bericht: (e.target as any).bericht.value
        }
      });

      if (error) throw error;

      // Show success message in UI instead of popup
      const successMessage = document.createElement('div');
      successMessage.className = 'fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg shadow-lg z-50';
      successMessage.innerHTML = `
        <div class="flex items-center gap-3">
          <svg class="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <div>
            <div class="font-medium">Bericht succesvol verzonden!</div>
            <div class="text-sm">Ons team neemt vandaag nog zo spoedig mogelijk contact met u op via telefoon of e-mail.</div>
          </div>
        </div>
      `;
      document.body.appendChild(successMessage);
      
      // Reset form
      (e.target as HTMLFormElement).reset();
      
      // Remove success message after 5 seconds
      setTimeout(() => {
        document.body.removeChild(successMessage);
      }, 5000);
      
    } catch (error) {
      console.error('Error sending email:', error);
      const errorMessage = document.createElement('div');
      errorMessage.className = 'fixed top-20 left-1/2 transform -translate-x-1/2 bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-lg shadow-lg z-50';
      errorMessage.innerHTML = `
        <div class="flex items-center gap-3">
          <svg class="h-5 w-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <div>
            <div class="font-medium">Er is iets misgegaan</div>
            <div class="text-sm">Probeer het opnieuw of bel ons direct.</div>
          </div>
        </div>
      `;
      document.body.appendChild(errorMessage);
      
      setTimeout(() => {
        document.body.removeChild(errorMessage);
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main className="container mx-auto px-4 py-8 pt-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contact opnemen</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Heeft U vragen over ons advies? Wij helpen U graag verder!
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
                    Heeft u vragen? Neem contact op voor spoed ook buiten kantooruren beschikbaar
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
                        <div className="text-muted-foreground">+31 638901956</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                        <Mail className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <div className="font-medium">E-mail</div>
                        <div className="text-muted-foreground">info@rijscholenadvies.nl</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">Bereikbaarheid</div>
                        <div className="text-muted-foreground">
                          Maandag t/m vrijdag 8:00 - 17:30<br />
                          Voor spoed advies en ondersteuning ook buiten kantooruren bereikbaar.<br />
                          
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
                    <div className="font-medium mb-2">Hoe snel krijgt U advies?</div>
                    <div className="text-sm text-muted-foreground">
                      Binnen 24 uur na Uw aanvraag en betaling ontvangt U ons professioneel advies.
                    </div>
                  </div>
                  <div>
                    <div className="font-medium mb-2">Welke rijscholen adviseren wij?</div>
                    <div className="text-sm text-muted-foreground">
                      Uitsluitend gecertificeerde rijscholen met de beste kwaliteit én goedkoopste prijzen.
                    </div>
                  </div>
                  <div>
                    <div className="font-medium mb-2">Wat kost het advies?</div>
                    <div className="text-sm text-muted-foreground">
                      Ons persoonlijk advies kost €34,50. Hiervoor ontvang u een volledig op maat gemaakt advies, vergelijking van de beste rijscholen in uw omgeving, en persoonlijke begeleiding bij de aanmelding.
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
                  Ons team beantwoordt uw vraag direct
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
