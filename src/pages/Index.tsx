import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Car, Shield, Star, Clock, CheckCircle, Users, Award, ArrowRight, Search, Target, Heart } from "lucide-react";
import heroImage from "@/assets/real-instructor-photo.jpg";
import teamBackground from "@/assets/team-background.jpg";
import ctaBackground from "@/assets/cta-background.jpg";

const Index = () => {
  const features = [{
    icon: Search,
    title: "Persoonlijk zoeken",
    description: "Wij vinden de perfect passende rijschool op basis van Uw wensen en locatie."
  }, {
    icon: Shield,
    title: "Alleen kwaliteit",
    description: "Alle rijscholen in ons netwerk zijn gecertificeerd en goedkoopste én beste."
  }, {
    icon: Clock,
    title: "Snel advies",
    description: "Binnen 24 uur ontvangt U ons persoonlijke advies met de beste opties."
  }, {
    icon: Target,
    title: "Doelgericht",
    description: "Ons doel is Uw rijbewijs: snel, efficiënt en met plezier leren rijden."
  }];
  const benefits = ["Vergelijking van prijzen en lesaanbod", "Gecertificeerde rijscholen met hoge slaagkans", "Persoonlijk advies op maat", "Gratis nazorg en ondersteuning", "Wij leggen contact met rijscholen voor u"];
  const testimonials = [{
    name: "Emma van Dijk",
    location: "Amsterdam",
    text: "Dankzij hun professionele advies heb ik de perfecte rijschool gevonden. In 6 weken geslaagd!",
    rating: 5,
    type: "Automaat"
  }, {
    name: "Lars Bakker",
    location: "Rotterdam",
    text: "Uitstekende service! Ze hebben echt tijd genomen om mijn wensen te begrijpen.",
    rating: 5,
    type: "Schakel"
  }, {
    name: "Sophie Vermeer",
    location: "Utrecht",
    text: "Eerlijk advies zonder commerciële belangen. Precies wat ik zocht!",
    rating: 5,
    type: "Automaat"
  }, {
    name: "Mike de Jong",
    location: "Eindhoven",
    text: "Snelle reactie en deskundig advies. Binnen 2 dagen had ik contact met mijn ideale rijschool!",
    rating: 5,
    type: "Schakel"
  }];
  const stats = [{
    number: "Kwaliteit",
    label: "Gecertificeerde rijscholen"
  }, {
    number: "Persoonlijk",
    label: "Advies op maat"
  }, {
    number: "Snel",
    label: "Direct contact"
  }, {
    number: "Betrouwbaar",
    label: "Al sinds 2014"
  }];
  return <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-8">
                  <span className="text-primary">Ons team</span> zoekt
                  <span className="text-primary"> de beste rijschool </span>
                  <br />voor U
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">Persoonlijk advies voor de goedkoopste én beste rijschool in uw omgeving. Wij helpen u ook direct bij aanmelding.</p>
              </div>

              <div className="flex gap-3">
                <Button asChild variant="hero" size="sm" className="group flex-1">
                  <Link to="/aanvraag">
                    Vraag offerte aan
                    <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm" className="flex-1">
                  <Link to="/over-ons">
                    Meer info
                  </Link>
                </Button>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-2 gap-4 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">Persoonlijk</div>
                  <div className="text-sm text-muted-foreground">Advies op maat</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">Kwaliteit</div>
                  <div className="text-sm text-muted-foreground">Gegarandeerd</div>
                </div>
              </div>
            </div>

            <div className="relative animate-float">
              <img src={heroImage} alt="Professionele rijinstructeur tijdens rijles" className="rounded-2xl shadow-hero object-cover w-full h-[400px]" />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-secondary flex items-center justify-center">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Kwaliteit rijscholen</div>
                    <div className="text-sm text-muted-foreground">Alleen de beste voor U</div>
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
              Hoe kunnen wij u helpen?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Snel en betrouwbaar de juiste rijschool vinden
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {features.map((feature, index) => <Card key={index} className="shadow-smooth hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="text-center p-3 md:p-6">
                  <div className="mx-auto mb-3 md:mb-4 h-8 w-8 md:h-12 md:w-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-4 w-4 md:h-6 md:w-6 text-white" />
                  </div>
                  <CardTitle className="text-sm md:text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-3 md:p-6 pt-0">
                  <p className="text-muted-foreground text-center text-xs md:text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>)}
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
            <p className="text-lg text-muted-foreground">3 stappen naar het best passend rijschool</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {[{
            step: "1",
            title: "Vertel over uzelf",
            description: "Deel Uw voorkeuren"
          }, {
            step: "2",
            title: "Ontvangt advies",
            description: "Binnen 24 uur persoonlijk advies"
          }, {
            step: "3",
            title: "Begint met lessen",
            description: "Direct starten bij beste rijschool!"
          }].map((item, index) => <div key={index} className="text-center relative">
                <div className="mx-auto mb-3 md:mb-6 h-12 w-12 md:h-16 md:w-16 rounded-full bg-gradient-primary flex items-center justify-center text-white text-lg md:text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-sm font-semibold mb-2 md:mb-3 mx-0 md:text-lg">{item.title}</h3>
                <p className="text-muted-foreground text-xs md:text-sm">{item.description}</p>
                {index < 2 && <ArrowRight className="hidden md:block absolute top-8 -right-4 h-6 w-6 text-muted-foreground" />}
              </div>)}
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
                  Wat bieden wij aan?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Professioneel en persoonlijk advies van rijschoolexperts voor de goedkoopste én beste rijscholen.
                </p>
                
                <div className="space-y-4">
                  {benefits.map((benefit, index) => <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>{benefit}</span>
                    </div>)}
                </div>

                <Button asChild variant="hero" size="lg" className="mt-8">
                  <Link to="/aanvraag">Vraag offerte aan</Link>
                </Button>
              </div>

              <Card className="shadow-smooth">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-accent" />
                    Persoonlijke begeleiding
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Ons team staat altijd voor U klaar met persoonlijk advies 
                    en volledige ondersteuning bij het vinden van de perfecte rijschool.
                  </p>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary mb-2">100%</div>
                      <div className="text-sm text-muted-foreground">Persoonlijke service</div>
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
            <p className="text-lg text-muted-foreground">
              Meer dan 2,500 tevreden klanten
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {testimonials.map((testimonial, index) => <Card key={index} className="shadow-smooth">
                <CardContent className="pt-4 md:pt-6 p-3 md:p-6">
                  <div className="flex items-center gap-1 mb-3 md:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-3 w-3 md:h-4 md:w-4 fill-accent text-accent" />)}
                  </div>
                  <p className="text-muted-foreground mb-4 md:mb-6 italic text-xs md:text-sm">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-xs md:text-sm">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                    </div>
                    <div className="text-xs bg-muted px-2 py-1 rounded">
                      {testimonial.type}
                    </div>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Stats - moved above footer */}
      <section className="py-12 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={teamBackground} alt="Professioneel rijschool adviesteam" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">Professioneel adviesteam</h2>
            <p className="opacity-90 text-white">Maandag t/m vrijdag 8:00-17:30 voor U beschikbaar</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[{
              number: "Persoonlijk",
              label: "Advies op maat"
            }, {
              number: "Kwaliteit",
              label: "Gecertificeerde rijscholen"
            }, {
              number: "Betrouwbaar",
              label: "Expertise sinds 2014"
            }, {
              number: "Direct hulp",
              label: "Bij aanmelding"
            }].map((stat, index) => <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold mb-1 text-white">{stat.number}</div>
                <div className="text-sm opacity-80 text-white">{stat.label}</div>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section - moved higher */}
      <section className="py-12 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={teamBackground} alt="Professioneel rijschool advies" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/90"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Card className="max-w-3xl mx-auto shadow-hero bg-background/95">
            <CardContent className="py-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Klaar om te starten?</h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Ons professionele team helpt U persoonlijk bij het vinden van de perfecte rijschool in uw omgeving.
              </p>
              
              <div className="flex gap-3 justify-center">
                <Button asChild variant="hero" size="sm" className="flex-1 max-w-[200px]">
                  <Link to="/aanvraag">
                    Vraag offerte aan
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm" className="flex-1 max-w-[200px]">
                  <Link to="/over-ons">
                    Meer info
                  </Link>
                </Button>
              </div>

              <p className="text-xs text-muted-foreground mt-4">
                ✓ Geen verborgen kosten ✓ Persoonlijke service
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Index;