import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Award, Target, Heart, Clock, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import teamBackground from "@/assets/team-background.jpg";

const OverOnsPage = () => {
  const stats = [
    { number: "Persoonlijk", label: "Advies op maat", icon: Phone },
    { number: "Kwaliteit", label: "Gecertificeerde rijscholen", icon: Clock },
    { number: "Betrouwbaar", label: "Ervaren team", icon: Award },
    { number: "Direct hulp", label: "Bij aanmelding", icon: Target }
  ];

  const values = [
    {
      icon: Shield,
      title: "Betrouwbaarheid",
      description: "Alleen gecertificeerde rijscholen met bewezen kwaliteit en hoge slaagpercentages."
    },
    {
      icon: Heart,
      title: "Persoonlijk advies",
      description: "Elk advies is op maat, gebaseerd op uw specifieke wensen en situatie."
    },
    {
      icon: Target,
      title: "Resultaatgericht",
      description: "Ons doel is uw rijbewijs halen: snel, efficiënt en met plezier."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-28 md:pt-32">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-primary/5 text-primary text-sm font-medium px-4 py-2 rounded-full mb-4">
              <Heart className="h-4 w-4" />
              Over ons
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Wij zoeken de beste
              <span className="text-primary"> rijschool voor u</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Wij verbinden u met de goedkoopste én beste rijscholen én helpen u persoonlijk bij de aanmelding.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center shadow-card border-0 rounded-2xl hover:shadow-float transition-all duration-300">
                  <CardContent className="pt-6 p-5">
                    <div className="mx-auto mb-3 h-12 w-12 rounded-2xl bg-primary/5 flex items-center justify-center">
                      <stat.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-lg md:text-xl font-bold text-primary mb-1">{stat.number}</div>
                    <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Onze waarden</h2>
              <p className="text-lg text-muted-foreground">Waar wij voor staan en wat ons drijft</p>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {values.map((value, index) => (
                <Card key={index} className="shadow-card border-0 rounded-2xl hover:shadow-float transition-all duration-300 group">
                  <CardHeader className="text-center p-6">
                    <div className="mx-auto mb-4 h-14 w-14 rounded-2xl bg-secondary/5 flex items-center justify-center group-hover:bg-secondary/10 group-hover:scale-105 transition-all duration-300">
                      <value.icon className="h-7 w-7 text-secondary" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="px-6 pb-6 pt-0">
                    <p className="text-muted-foreground text-center leading-relaxed text-sm">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0">
            <img src={teamBackground} alt="Team achtergrond" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-primary/85 backdrop-blur-sm" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Klaar om te starten?</h2>
            <p className="text-lg mb-8 text-white/80 max-w-lg mx-auto">
              Ons professionele team staat voor u klaar met persoonlijk advies en volledige begeleiding.
            </p>
            <div className="flex gap-3 justify-center">
              <Button asChild variant="secondary" size="lg">
                <Link to="/aanvraag">
                  Vraag advies aan
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
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

export default OverOnsPage;
