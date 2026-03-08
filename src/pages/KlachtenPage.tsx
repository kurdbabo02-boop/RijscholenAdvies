import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Clock, AlertCircle, Send } from "lucide-react";
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
          stad: 'Niet opgegeven', typeRijles: 'Niet opgegeven', rijbewijsType: 'Niet opgegeven',
          onderwerp: 'Klacht: ' + (form as any).onderwerp.value,
          bericht: (form as any).bericht.value
        }
      });
      if (error) throw error;
      toast({ title: "Klacht succesvol ingediend!", description: "Ons team behandelt uw klacht en neemt zo spoedig mogelijk contact met u op." });
      form.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      toast({ title: "Er is iets misgegaan", description: "Probeer het opnieuw of bel ons direct op +31 6 84646176.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-28 md:pt-32">
        <section className="py-12 bg-gradient-subtle">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-destructive/5 text-destructive text-sm font-medium px-4 py-2 rounded-full mb-4">
              <AlertCircle className="h-4 w-4" />
              Klachten
            </div>
            <h1 className="text-4xl font-bold mb-4">Klacht indienen</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Heeft u een klacht? Wij nemen elke klacht serieus en helpen u verder.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <Card className="shadow-card border-0 rounded-2xl">
                  <CardHeader><CardTitle>Contactgegevens</CardTitle><CardDescription>Voor spoed ook buiten kantooruren bereikbaar</CardDescription></CardHeader>
                  <CardContent className="space-y-4">
                    <a href="tel:+31684646176" className="flex items-center gap-4 p-3 rounded-xl hover:bg-muted/50 transition-colors">
                      <div className="h-10 w-10 rounded-xl bg-primary/5 flex items-center justify-center"><Phone className="h-5 w-5 text-primary" /></div>
                      <div><div className="font-medium text-sm">Telefoon</div><div className="text-muted-foreground text-sm">+31 6 84646176</div></div>
                    </a>
                    <a href="mailto:info@rijscholenadvies.nl" className="flex items-center gap-4 p-3 rounded-xl hover:bg-muted/50 transition-colors">
                      <div className="h-10 w-10 rounded-xl bg-secondary/5 flex items-center justify-center"><Mail className="h-5 w-5 text-secondary" /></div>
                      <div><div className="font-medium text-sm">E-mail</div><div className="text-muted-foreground text-sm">info@rijscholenadvies.nl</div></div>
                    </a>
                    <div className="flex items-center gap-4 p-3">
                      <div className="h-10 w-10 rounded-xl bg-accent/5 flex items-center justify-center"><Clock className="h-5 w-5 text-accent" /></div>
                      <div><div className="font-medium text-sm">Bereikbaarheid</div><div className="text-muted-foreground text-sm">Ma t/m vr 8:00 - 17:30</div></div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card border-0 rounded-2xl">
                  <CardHeader><CardTitle>Klachtenprocedure</CardTitle></CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { q: "Hoe wordt mijn klacht behandeld?", a: "Wij nemen uw klacht binnen 24 uur in behandeling." },
                      { q: "Kan ik ook telefonisch klagen?", a: "Ja, bel ons direct op +31 6 84646176." },
                      { q: "Wat als ik niet tevreden ben?", a: "Wij zoeken altijd samen naar een oplossing." }
                    ].map((item, i) => (
                      <div key={i} className="p-3 bg-muted/30 rounded-xl">
                        <div className="font-medium text-sm mb-1">{item.q}</div>
                        <div className="text-xs text-muted-foreground">{item.a}</div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              <Card className="shadow-card border-0 rounded-2xl">
                <CardHeader><CardTitle>Dien uw klacht in</CardTitle><CardDescription>Ons team behandelt uw klacht zo snel mogelijk</CardDescription></CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2"><Label htmlFor="voornaam">Voornaam *</Label><Input id="voornaam" placeholder="Jan" required className="rounded-xl h-11" /></div>
                      <div className="space-y-2"><Label htmlFor="achternaam">Achternaam *</Label><Input id="achternaam" placeholder="van der Berg" required className="rounded-xl h-11" /></div>
                    </div>
                    <div className="space-y-2"><Label htmlFor="email">E-mailadres *</Label><Input id="email" type="email" placeholder="jan@voorbeeld.nl" required className="rounded-xl h-11" /></div>
                    <div className="space-y-2"><Label htmlFor="telefoon">Telefoonnummer</Label><Input id="telefoon" placeholder="06-12345678" className="rounded-xl h-11" /></div>
                    <div className="space-y-2"><Label htmlFor="onderwerp">Onderwerp *</Label><Input id="onderwerp" placeholder="Klacht over rijschool" required className="rounded-xl h-11" /></div>
                    <div className="space-y-2"><Label htmlFor="bericht">Beschrijving *</Label><Textarea id="bericht" placeholder="Beschrijf hier uw klacht..." rows={5} required className="rounded-xl" /></div>
                    <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                      <Send className="mr-2 h-4 w-4" />
                      {isSubmitting ? "Verzenden..." : "Verstuur klacht"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default KlachtenPage;
