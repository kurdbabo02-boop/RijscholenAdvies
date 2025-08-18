import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { 
  Car, 
  Shield, 
  Star, 
  Clock, 
  CheckCircle, 
  Users, 
  Award, 
  ArrowRight,
  Search,
  Target,
  Heart
} from "lucide-react";
import heroImage from "@/assets/hero-driving-school.jpg";

const Index = () => {
  const features = [
    {
      icon: Search,
      title: "Persoonlijk zoeken",
      description: "We vinden de perfect passende rijschool op basis van jouw wensen en locatie."
    },
    {
      icon: Shield,
      title: "Alleen kwaliteit",
      description: "Alle rijscholen in ons netwerk zijn gecertificeerd met minimaal 4,5 sterren."
    },
    {
      icon: Clock,
      title: "Snel advies",
      description: "Binnen 24 uur ontvang je ons persoonlijke advies met de beste opties."
    },
    {
      icon: Target,
      title: "Doelgericht",
      description: "Ons doel is jouw rijbewijs: snel, efficiënt en met plezier leren rijden."
    }
  ];

  const benefits = [
    "Vergelijking van prijzen en lesaanbod",
    "Gecertificeerde rijscholen met hoge slaagkans",
    "Persoonlijk advies op maat",
    "Gratis nazorg en ondersteuning",
    "Direct contact met rijscholen"
  ];

  const testimonials = [
    {
      name: "Emma van Dijk",
      location: "Amsterdam",
      text: "Dankzij hun advies heb ik de perfecte rijschool gevonden. In 6 weken geslaagd!",
      rating: 5,
      type: "Automaat"
    },
    {
      name: "Lars Bakker",
      location: "Rotterdam", 
      text: "Super service! Ze hebben echt tijd genomen om mijn wensen te begrijpen.",
      rating: 5,
      type: "Schakel"
    },
    {
      name: "Sophie Vermeer",
      location: "Utrecht",
      text: "Eerlijk advies zonder commerciële belangen. Precies wat ik zocht!",
      rating: 5,
      type: "Automaat"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Tevreden klanten" },
    { number: "500+", label: "Rijscholen in netwerk" },
    { number: "4.9/5", label: "Klantbeoordeling" },
    { number: "95%", label: "Slaagkans verbetering" }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Vind de beste
                  <span className="bg-gradient-hero bg-clip-text text-transparent"> rijschool</span>
                  <br />die bij jou past
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Persoonlijk advies voor de perfecte rijschool in jouw regio. 
                  Binnen 24 uur weet je precies waar je het best kunt leren rijden.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="hero" size="lg" className="group">
                  <Link to="/aanvraag">
                    Start je aanvraag
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/over-ons">
                    Meer informatie
                  </Link>
                </Button>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-2 gap-4 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">10,000+</div>
                  <div className="text-sm text-muted-foreground">Tevreden klanten</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">4.9/5</div>
                  <div className="text-sm text-muted-foreground">Beoordeling</div>
                </div>
              </div>
            </div>

            <div className="relative animate-float">
              <img
                src={heroImage}
                alt="Gelukkige mensen met hun rijbewijs"
                className="rounded-2xl shadow-hero object-cover w-full h-[500px]"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-secondary flex items-center justify-center">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">95% slaagkans</div>
                    <div className="text-sm text-muted-foreground">Met ons advies</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Waarom kiezen voor ons advies?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Wij maken het vinden van de juiste rijschool eenvoudig en betrouwbaar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-smooth hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Zo werkt het
            </h2>
            <p className="text-xl text-muted-foreground">
              In 3 eenvoudige stappen naar jouw ideale rijschool
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Vertel over jezelf",
                description: "Vul je gegevens in en vertel wat je zoekt in een rijschool."
              },
              {
                step: "2", 
                title: "Ontvang advies",
                description: "Binnen 24 uur krijg je persoonlijk advies met de beste opties."
              },
              {
                step: "3",
                title: "Begin met lessen",
                description: "Neem direct contact op met jouw gekozen rijschool en start!"
              }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="mx-auto mb-6 h-16 w-16 rounded-full bg-gradient-primary flex items-center justify-center text-white text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
                {index < 2 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-4 h-6 w-6 text-muted-foreground" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Wat krijg je voor €40?
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Ons advies is meer dan alleen een lijst met rijscholen. 
                  Je krijgt persoonlijk advies van experts die de markt door en door kennen.
                </p>
                
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                <Button asChild variant="hero" size="lg" className="mt-8">
                  <Link to="/aanvraag">
                    Start nu voor €40
                  </Link>
                </Button>
              </div>

              <Card className="shadow-smooth">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-accent" />
                    Geld-terug-garantie
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Niet tevreden met ons advies? Binnen 14 dagen krijg je 
                    je geld volledig terug, zonder vragen.
                  </p>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-2">100%</div>
                      <div className="text-sm text-muted-foreground">Tevredenheidsgarantie</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Wat zeggen onze klanten?
            </h2>
            <p className="text-xl text-muted-foreground">
              Lees waarom meer dan 10,000 mensen ons vertrouwen
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-smooth">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    </div>
                    <div className="text-xs bg-muted px-2 py-1 rounded">
                      {testimonial.type}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Vertrouwd door duizenden
            </h2>
            <p className="text-lg opacity-90">
              Onze resultaten spreken voor zich
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto shadow-hero">
            <CardContent className="py-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Klaar om te beginnen?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Laat ons je helpen bij het vinden van de perfecte rijschool. 
                Start vandaag nog en rijd binnen een paar maanden met je eigen auto!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="hero" size="lg">
                  <Link to="/aanvraag">
                    Start je aanvraag - €40
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">
                    Stel een vraag
                  </Link>
                </Button>
              </div>

              <p className="text-sm text-muted-foreground mt-6">
                ✓ Geen verborgen kosten ✓ 14 dagen geld terug ✓ Persoonlijk advies
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;