import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const ContactPage = () => {
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
                          Voor spoed advies en ondersteuning ook buiten kantooruren bereikbaar.
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
                      Ons team neemt direct na Uw aanvraag en betaling contact met U op voor het beste gepaste advies.
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
                      Ons persoonlijk advies kost €34,50. Hiervoor ontvangt u een volledig op maat gemaakt advies, vergelijking van de beste rijscholen in uw omgeving, en persoonlijke begeleiding bij de aanmelding.
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
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="voornaam">Voornaam *</Label>
                      <Input
                        id="voornaam"
                        name="voornaam"
                        placeholder="Jan"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="achternaam">Achternaam *</Label>
                      <Input
                        id="achternaam"
                        name="achternaam"
                        placeholder="van der Berg"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-mailadres *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="jan@voorbeeld.nl"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="telefoon">Telefoonnummer</Label>
                    <Input
                      id="telefoon"
                      name="telefoon"
                      placeholder="06-12345678"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="onderwerp">Onderwerp *</Label>
                    <Input
                      id="onderwerp"
                      name="onderwerp"
                      placeholder="Vraag over rijschooladvies"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bericht">Bericht *</Label>
                    <Textarea
                      id="bericht"
                      name="bericht"
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
