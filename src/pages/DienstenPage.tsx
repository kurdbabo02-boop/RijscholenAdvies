import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Car, Shield, Clock, Users, CheckCircle, Star } from "lucide-react";

const DienstenPage = () => {
  const services = [
    {
      icon: <Car className="h-8 w-8 text-primary" />,
      title: "Persoonlijk Advies",
      description: "Onze experts analyseren uw wensen en vinden de perfecte rijschool die bij u past.",
      features: [
        "Volledig op maat gemaakt advies",
        "Analyse van uw specifieke behoeften",
        "Vergelijking van meerdere rijscholen",
        "Transparante prijs-kwaliteit verhouding"
      ]
    },
    {
      icon: <Shield className="h-8 w-8 text-secondary" />,
      title: "Kwaliteitscontrole", 
      description: "Alle rijscholen in ons netwerk zijn gecertificeerd en hebben bewezen kwaliteit.",
      features: [
        "Alleen gecertificeerde rijscholen",
        "Regelmatige kwaliteitscontroles",
        "Hoge slagingspercentages",
        "Ervaren en gekwalificeerde instructeurs"
      ]
    },
    {
      icon: <Clock className="h-8 w-8 text-accent" />,
      title: "Snelle Service",
      description: "Binnen 24 uur ontvang je persoonlijk advies en directe contactmogelijkheden.",
      features: [
        "Maandag t/m vrijdag 8:00-17:30 bereikbaar",
        "Snelle reactietijd",
        "Directe doorverbinding",
        "Geen wachtlijsten"
      ]
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Begeleiding bij Aanmelding",
      description: "Wij helpen u niet alleen met kiezen, maar ook bij het complete aanmeldingsproces.",
      features: [
        "Hulp bij aanmeldformulieren",
        "Ondersteuning tijdens intake",
        "Begeleiding bij eerste les",
        "Gratis nazorg en ondersteuning"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Onze Diensten
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Professioneel advies en begeleiding bij het vinden van de perfecte rijschool
              </p>
              <Button asChild variant="hero" size="lg">
                <Link to="/aanvraag">Start je offerte</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <Card key={index} className="shadow-smooth">
                  <CardHeader>
                    <div className="mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-success" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Hoe werkt ons advies?
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    step: "1",
                    title: "Aanvraag indienen",
                    description: "Vertel ons over uw wensen en behoeften via ons eenvoudige formulier."
                  },
                  {
                    step: "2", 
                    title: "Persoonlijk advies",
                    description: "Onze experts analyseren uw situatie en zoeken de beste rijscholen."
                  },
                  {
                    step: "3",
                    title: "Directe begeleiding",
                    description: "U ontvangt persoonlijk advies en hulp bij de complete aanmelding."
                  }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
                      {item.step}
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Klaar om te starten?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Krijg binnen 24 uur persoonlijk advies
            </p>
            <Button asChild variant="hero" size="lg">
              <Link to="/aanvraag">Start nu je offerte</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DienstenPage;