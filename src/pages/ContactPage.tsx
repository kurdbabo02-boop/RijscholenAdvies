import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
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
          onderwerp: (form as any).onderwerp.value,
          bericht: (form as any).bericht.value
        }
      });
      if (error) throw error;
      toast({ title: "Bericht succesvol verzonden!", description: "Ons team neemt zo spoedig mogelijk contact met u op." });
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
            <div className="inline-flex items-center gap-2 bg-primary/5 text-primary text-sm font-medium px-4 py-2 rounded-full mb-4">
              <MessageCircle className="h-4 w-4" />
              Contact
            </div>
            <h1 className="text-4xl font-bold mb-4">Contact opnemen</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Heeft u vragen over ons advies? Wij helpen u graag verder!
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="shadow-card border-0 rounded-2xl">
                  <CardHeader>
                    <CardTitle>Contactgegevens</CardTitle>
                    <CardDescription>Neem contact op — voor spoed ook buiten kantooruren bereikbaar</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { href: "tel:+31684646176", icon: Phone, label: "Telefoon", value: "+31 6 84646176", color: "bg-primary/5" },
                      { href: "mailto:info@rijscholenadvies.nl", icon: Mail, label: "E-mail", value: "info@rijscholenadvies.nl", color: "bg-secondary/5" },
                    ].map((item, i) => (
                      <a key={i} href={item.href} className="flex items-center gap-4 group p-3 rounded-xl hover:bg-muted/50 transition-colors">
                        <div className={`h-10 w-10 rounded-xl ${item.color} flex items-center justify-center`}>
                          <item.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium text-sm">{item.label}</div>
                          <div className="text-muted-foreground text-sm">{item.value}</div>
                        </div>
                      </a>
                    ))}
                    <div className="flex items-center gap-4 p-3">
                      <div className="h-10 w-10 rounded-xl bg-accent/5 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">Bereikbaarheid</div>
                        <div className="text-muted-foreground text-sm">Ma t/m vr 8:00 - 17:30</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card border-0 rounded-2xl">
                  <CardHeader><CardTitle>Veelgestelde vragen</CardTitle></CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { q: "Hoe snel krijg ik advies?", a: "Ons team neemt dezelfde dag nog contact met u op." },
                      { q: "Welke rijscholen adviseren jullie?", a: "Uitsluitend gecertificeerde rijscholen met de beste kwaliteit." },
                      { q: "Kan ik mijn geld terugkrijgen?", a: "Ja, binnen 14 dagen volledige geld-terug-garantie." }
                    ].map((item, i) => (
                      <div key={i} className="p-3 bg-muted/30 rounded-xl">
                        <div className="font-medium text-sm mb-1">{item.q}</div>
                        <div className="text-xs text-muted-foreground">{item.a}</div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <Card className="shadow-card border-0 rounded-2xl">
                <CardHeader>
                  <CardTitle>Stuur ons een bericht</CardTitle>
                  <CardDescription>Ons team beantwoordt uw vraag zo snel mogelijk</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="voornaam">Voornaam *</Label>
                        <Input id="voornaam" placeholder="Jan" required className="rounded-xl h-11" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="achternaam">Achternaam *</Label>
                        <Input id="achternaam" placeholder="van der Berg" required className="rounded-xl h-11" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mailadres *</Label>
                      <Input id="email" type="email" placeholder="jan@voorbeeld.nl" required className="rounded-xl h-11" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telefoon">Telefoonnummer</Label>
                      <Input id="telefoon" placeholder="06-12345678" className="rounded-xl h-11" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="onderwerp">Onderwerp *</Label>
                      <Input id="onderwerp" placeholder="Vraag over rijschooladvies" required className="rounded-xl h-11" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bericht">Bericht *</Label>
                      <Textarea id="bericht" placeholder="Typ hier uw vraag of opmerking..." rows={5} required className="rounded-xl" />
                    </div>
                    <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                      <Send className="mr-2 h-4 w-4" />
                      {isSubmitting ? "Verzenden..." : "Verstuur bericht"}
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

export default ContactPage;
