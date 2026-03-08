import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Car, Shield, Star, Clock, CheckCircle, ArrowRight, Search, Target, Heart, Users } from "lucide-react";
import heroImage from "@/assets/real-instructor-photo.jpg";
import teamBackground from "@/assets/team-background.jpg";

const Index = () => {
  const features = [
    {
      icon: Search,
      title: "Persoonlijk zoeken",
      description: "Wij vinden de perfect passende rijschool op basis van uw wensen en locatie."
    },
    {
      icon: Shield,
      title: "Alleen kwaliteit",
      description: "Alle rijscholen in ons netwerk zijn gecertificeerd — goedkoopst én het best."
    },
    {
      icon: Clock,
      title: "Snel advies",
      description: "Dezelfde dag nog ontvangt u ons persoonlijke advies met de beste opties."
    },
    {
      icon: Target,
      title: "Doelgericht",
      description: "Ons doel is uw rijbewijs: snel, efficiënt en met plezier leren rijden."
    }
  ];

  const benefits = [
    "Vergelijking van prijzen en lesaanbod",
    "Gecertificeerde rijscholen met hoge slaagkans",
    "Persoonlijk advies op maat",
    "Gratis nazorg en ondersteuning",
    "Wij leggen contact met rijscholen voor u"
  ];

  const testimonials = [
    {
      name: "Emma van Dijk",
      location: "Amsterdam",
      text: "Dankzij hun professionele advies heb ik de perfecte rijschool gevonden. Binnen 7 weken geslaagd!",
      rating: 5,
      type: "B - Automaat"
    },
    {
      name: "Lars Bakker",
      location: "Rotterdam",
      text: "Goede service, zij hebben de tijd genomen om mijn wensen te begrijpen.",
      rating: 4,
      type: "B - Schakel"
    },
    {
      name: "Sophie Vermeer",
      location: "Utrecht",
      text: "Eerlijk advies zonder commerciële belangen. Precies wat ik zocht!",
      rating: 5,
      type: "B - Automaat"
    },
    {
      name: "Mike de Jong",
      location: "Eindhoven",
      text: "Snelle reactie en deskundig advies. Kreeg binnen 2 dagen contact met een geschikte rijschool.",
      rating: 4,
      type: "A2 - Motor"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-28 md:pt-32 pb-20 overflow-hidden bg-gradient-subtle">
        {/* Decorative blobs */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8 animate-slide-up">
              <div className="inline-flex items-center gap-2 bg-primary/5 text-primary text-sm font-medium px-4 py-2 rounded-full">
                <Star className="h-4 w-4 fill-primary" />
                Persoonlijk rijschooladvies
              </div>
              
              <div className="space-y-5">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-balance">
                  Wij vinden de{" "}
                  <span className="text-primary">beste rijschool</span>
                  {" "}voor u
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                  Goedkoop én in één keer slagen — wij regelen uw rijopleiding én aanmelding!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild variant="hero" size="lg" className="group">
                  <Link to="/aanvraag">
                    Vraag advies aan
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/diensten">
                    Bekijk diensten
                  </Link>
                </Button>
              </div>

              {/* Trust badges */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground font-medium">Tevreden klanten</span>
                </div>
                <div className="h-4 w-px bg-border" />
                <div className="flex items-center gap-1.5">
                  <Shield className="h-4 w-4 text-secondary" />
                  <span className="text-sm text-muted-foreground font-medium">Gecertificeerd</span>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="relative rounded-3xl overflow-hidden shadow-float">
                <img 
                  src={heroImage} 
                  alt="Professionele rijinstructeur tijdens rijles" 
                  className="object-cover w-full h-[420px] md:h-[480px]" 
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>
              
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-4 md:-left-6 bg-background rounded-2xl p-4 shadow-float animate-float">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-xl bg-gradient-secondary flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Kwaliteit gegarandeerd</div>
                    <div className="text-xs text-muted-foreground">Alleen de beste rijscholen</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-secondary/5 text-secondary text-sm font-medium px-4 py-2 rounded-full mb-4">
              <Users className="h-4 w-4" />
              Onze aanpak
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Wat bieden wij aan?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Wij helpen u niet alleen een rijschool te vinden — wij vinden de beste voor u.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-card hover:shadow-float transition-all duration-300 group border-0 rounded-2xl">
                <CardHeader className="text-center p-4 md:p-6 pb-2">
                  <div className="mx-auto mb-3 h-12 w-12 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 group-hover:scale-105 transition-all duration-300">
                    <feature.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </div>
                  <CardTitle className="text-sm md:text-base">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 md:p-6 pt-0">
                  <p className="text-muted-foreground text-center text-xs md:text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Zo werkt het
            </h2>
            <p className="text-lg text-muted-foreground">3 eenvoudige stappen naar de beste rijschool</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "1", title: "Vertel over uzelf", description: "Vul uw voorkeuren in via ons eenvoudige formulier", icon: "📝" },
              { step: "2", title: "Ontvang advies", description: "Dezelfde dag nog persoonlijk advies van ons team", icon: "💬" },
              { step: "3", title: "Begin met lessen", description: "Start bij de best passende rijschool!", icon: "🚗" }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="mb-5">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <div className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary text-white text-sm font-bold">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
                {index < 2 && (
                  <ArrowRight className="hidden md:block absolute top-12 -right-6 h-5 w-5 text-muted-foreground/40" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/5 text-accent text-sm font-medium px-4 py-2 rounded-full mb-4">
                  <Heart className="h-4 w-4" />
                  Waarom wij?
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Persoonlijk advies dat werkt
                </h2>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                  Professioneel en persoonlijk advies van rijschoolexperts voor de goedkoopste én beste rijscholen.
                </p>
                
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3 bg-success/5 rounded-xl px-4 py-3">
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                      <span className="text-sm font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Button asChild variant="hero" size="lg" className="mt-8">
                  <Link to="/aanvraag">
                    Vraag advies aan
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <Card className="shadow-card border-0 rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="text-center space-y-6">
                    <div className="mx-auto h-16 w-16 rounded-2xl bg-primary/5 flex items-center justify-center">
                      <Heart className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Persoonlijke begeleiding</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Ons team staat altijd voor u klaar met persoonlijk advies 
                        en volledige ondersteuning bij het vinden van de perfecte rijschool.
                      </p>
                    </div>
                    <div className="bg-muted/50 rounded-2xl p-6">
                      <div className="text-3xl font-bold text-primary mb-1">100%</div>
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
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Wat zeggen onze klanten?
            </h2>
            <p className="text-lg text-muted-foreground">
              Tevreden klanten door heel Nederland
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-card hover:shadow-float transition-all duration-300 border-0 rounded-2xl">
                <CardContent className="p-5">
                  <div className="flex items-center gap-0.5 mb-4">
                    {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-5 italic text-sm leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div>
                      <div className="font-semibold text-sm">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                    </div>
                    <div className="text-xs bg-primary/5 text-primary font-medium px-2.5 py-1 rounded-lg">
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
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={teamBackground} alt="Professioneel rijschool adviesteam" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-primary/85 backdrop-blur-sm"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Professioneel adviesteam</h2>
            <p className="text-white/70">Ma t/m vr 8:00 - 17:30 voor u beschikbaar</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "Persoonlijk", label: "Advies op maat" },
              { number: "Kwaliteit", label: "Gecertificeerde rijscholen" },
              { number: "Betrouwbaar", label: "Ervaren team" },
              { number: "Direct hulp", label: "Bij aanmelding" }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-white/10 rounded-2xl p-5 backdrop-blur-sm">
                <div className="text-xl md:text-2xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto shadow-float border-0 rounded-3xl overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="py-14 px-8 text-center">
              <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-primary/10 mb-6">
                <Car className="h-7 w-7 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Klaar om te starten?</h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto text-lg">
                Ons team helpt u persoonlijk bij het vinden van de perfecte rijschool in uw omgeving.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild variant="hero" size="lg">
                  <Link to="/aanvraag">
                    Vraag advies aan
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">
                    Contact opnemen
                  </Link>
                </Button>
              </div>

              <div className="flex items-center justify-center gap-4 mt-6 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><CheckCircle className="h-3.5 w-3.5 text-success" /> Geen verborgen kosten</span>
                <span className="flex items-center gap-1"><CheckCircle className="h-3.5 w-3.5 text-success" /> Persoonlijke service</span>
                <span className="flex items-center gap-1"><CheckCircle className="h-3.5 w-3.5 text-success" /> Geld-terug-garantie</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
