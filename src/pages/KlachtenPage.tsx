import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const KlachtenPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const form = e.target as HTMLFormElement;
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          naam: (form as any).voornaam.value + ' ' + (form as any).achternaam.value,
          email: (form as any).email.value,
          telefoon: (form as any).telefoon.value || 'Niet opgegeven',
          stad: 'Niet opgegeven',
          typeRijles: 'Niet opgegeven',
          rijbewijsType: 'Niet opgegeven',
          onderwerp: 'Klacht: ' + (form as any).onderwerp.value,
          bericht: (form as any).bericht.value
        }
      });

      if (error) throw error;

      toast({
        title: "Klacht succesvol ingediend!",
        description: "Ons team behandelt uw klacht en neemt zo spoedig mogelijk contact met u op.",
      });
      form.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Er is iets misgegaan",
        description: "Probeer het opnieuw of bel ons direct op +31 6 84646176.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main className="container mx-auto px-4 py-8 pt-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Klacht indienen</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Heeft u een klacht? Wij nemen elke klacht serieus en helpen u verder.
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
                    Heeft u een klacht? Neem contact op — ook buiten kantooruren bereikbaar
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <a href="tel:+31684646176" className="flex items-center gap-4 group">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">Telefoon</div>
                        <div className="text-muted-foreground">+31 6 84646176</div>
                      </div>
                    </a>
                    
                    <a href="mailto:info@rijscholenadvies.nl" className="flex items-center gap-4 group">
                      <div className="h-10 w-10 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                        <Mail className="h-5 w-5 text-secondary" />
                      </div>
                      <div>
                        <div className="font-medium">E-mail</div>
                        <div className="text-muted-foreground">info@rijscholenadvies.nl</div>
                      </div>
                    </a>
                    
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">Bereikbaarheid</div>
                        <div className="text-muted-foreground">
                          Maandag t/m vrijdag 8:00 - 17:30<br />
                          Voor spoed ook buiten kantooruren bereikbaar
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-smooth">
                <CardHeader>
                  <CardTitle>Klachtenprocedure</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="font-medium mb-2">Hoe wordt mijn klacht behandeld?</div>
                    <div className="text-sm text-muted-foreground">
                      Wij nemen uw klacht binnen 24 uur in behandeling en streven naar een snelle oplossing.
                    </div>
                  </div>
                  <div>
                    <div className="font-medium mb-2">Kan ik ook telefonisch klagen?</div>
                    <div className="text-sm text-muted-foreground">
                      Ja, u kunt ons direct bellen op +31 6 84646176 om uw klacht te bespreken.
                    </div>
                  </div>
                  <div>
                    <div className="font-medium mb-2">Wat als ik niet tevreden ben?</div>
                    <div className="text-sm text-muted-foreground">
                      Wij zoeken altijd samen naar een oplossing. Uw tevredenheid staat voorop.
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Complaint Form */}
            <Card className="shadow-smooth">
              <CardHeader>
                <CardTitle>Dien uw klacht in</CardTitle>
                <CardDescription>
                  Ons team behandelt uw klacht zo snel mogelijk
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="voornaam">Voornaam *</Label>
                      <Input id="voornaam" placeholder="Jan" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="achternaam">Achternaam *</Label>
                      <Input id="achternaam" placeholder="van der Berg" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mailadres *</Label>
                    <Input id="email" type="email" placeholder="jan@voorbeeld.nl" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="telefoon">Telefoonnummer</Label>
                    <Input id="telefoon" placeholder="06-12345678" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="onderwerp">Onderwerp *</Label>
                    <Input id="onderwerp" placeholder="Klacht over rijschool" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="bericht">Beschrijving klacht *</Label>
                    <Textarea id="bericht" placeholder="Beschrijf hier uw klacht zo uitgebreid mogelijk..." rows={5} required />
                  </div>
                  
                  <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Verzenden..." : "Verstuur klacht"}
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

export default KlachtenPage;
