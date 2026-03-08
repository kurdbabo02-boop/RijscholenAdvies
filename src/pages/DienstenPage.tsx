import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Car, Shield, Clock, Users, CheckCircle, ArrowRight } from "lucide-react";
import teamBackground from "@/assets/team-background.jpg";

const DienstenPage = () => {
  const services = [
    {
      icon: Car,
      color: "bg-primary/5 text-primary",
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
      icon: Shield,
      color: "bg-secondary/5 text-secondary",
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
      icon: Clock,
      color: "bg-accent/5 text-accent",
      title: "Snelle Service",
      description: "Dezelfde dag nog advies — bereikbaar voor persoonlijk advies en directe ondersteuning.",
      features: [
        "Ma t/m vr 8:00 - 17:30 bereikbaar",
        "Persoonlijke benadering",
        "Directe ondersteuning",
        "Deskundige begeleiding"
      ]
    },
    {
      icon: Users,
      color: "bg-primary/5 text-primary",
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
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-28 md:pt-32">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/5 text-primary text-sm font-medium px-4 py-2 rounded-full mb-4">
                <Car className="h-4 w-4" />
                Onze diensten
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Professioneel rijschooladvies
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Persoonlijke begeleiding bij het vinden van de perfecte rijschool — van advies tot aanmelding.
              </p>
              <Button asChild variant="hero" size="lg">
                <Link to="/aanvraag">
                  Vraag advies aan
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {services.map((service, index) => (
                <Card key={index} className="shadow-card border-0 rounded-2xl hover:shadow-float transition-all duration-300">
                  <CardHeader className="pb-2">
                    <div className={`h-12 w-12 rounded-2xl ${service.color} flex items-center justify-center mb-3`}>
                      <service.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2.5">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
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
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Hoe werkt ons advies?
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { step: "1", title: "Aanvraag indienen", description: "Vertel ons over uw wensen via ons eenvoudige formulier.", icon: "📝" },
                  { step: "2", title: "Persoonlijk advies", description: "Onze experts analyseren uw situatie en zoeken de beste rijscholen.", icon: "💬" },
                  { step: "3", title: "Directe begeleiding", description: "U ontvangt persoonlijk advies en hulp bij de complete aanmelding.", icon: "🎯" }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <div className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary text-white font-bold text-sm mb-3">
                      {item.step}
                    </div>
                    <h3 className="font-semibold mb-2 text-lg">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0">
            <img src={teamBackground} alt="Professioneel rijschool adviesteam" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-primary/85 backdrop-blur-sm"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Klaar om te starten?</h2>
            <p className="text-xl mb-8 text-white/80 max-w-lg mx-auto">
              Ons professionele team helpt u graag met persoonlijk advies
            </p>
            <div className="flex gap-3 justify-center">
              <Button asChild variant="secondary" size="lg">
                <Link to="/aanvraag">Vraag advies aan</Link>
              </Button>
              <Button asChild size="lg" className="bg-white/10 text-white border-white/20 border hover:bg-white/20">
                <Link to="/contact">Contact opnemen</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DienstenPage;
