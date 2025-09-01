import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Users, Award, Target, Heart, Star, Clock, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import calmingBackground from "@/assets/calming-background.jpg";
import teamBackground from "@/assets/team-background.jpg";

const OverOnsPage = () => {
  const stats = [
    { number: "Persoonlijk", label: "Advies op maat", icon: Phone },
    { number: "Kwaliteit", label: "Gecertificeerde rijscholen", icon: Clock },
    { number: "Betrouwbaar", label: "Expertise sinds 2025", icon: Award },
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
      description: "Elk advies is op maat, gebaseerd op jouw specifieke wensen en situatie."
    },
    {
      icon: Target,
      title: "Resultaatgericht",
      description: "Ons doel is jouw rijbewijs halen: snel, efficiënt en met plezier."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main className="container mx-auto px-4 py-8 pt-32">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Wij zoeken de beste
            <span className="text-primary"> rijschool voor U</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Wij verbinden U met de goedkoopste én beste rijscholen én helpen U persoonlijk bij de aanmelding. 
            Ons professionele team helpt U graag verder.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center shadow-smooth hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-3 md:pt-6 p-3 md:p-6">
                <div className="mx-auto mb-3 md:mb-4 h-8 w-8 md:h-12 md:w-12 rounded-full bg-gradient-primary flex items-center justify-center">
                  <stat.icon className="h-4 w-4 md:h-6 md:w-6 text-white" />
                </div>
                <div className="text-lg md:text-2xl font-bold text-primary mb-1 md:mb-2">{stat.number}</div>
                <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

       
        {/* Our Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Onze waarden</h2>
            <p className="text-xl text-muted-foreground">
              Waar wij voor staan en wat ons drijft
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {values.map((value, index) => (
              <Card key={index} className="shadow-smooth hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="text-center p-3 md:p-6">
                  <div className="mx-auto mb-3 md:mb-4 h-12 w-12 md:h-16 md:w-16 rounded-full bg-gradient-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg md:text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-3 md:p-6 pt-0">
                  <p className="text-muted-foreground text-center leading-relaxed text-sm md:text-base">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>


        {/* CTA Section */}
        <div className="text-center">
          <Card className="relative overflow-hidden shadow-hero">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{ backgroundImage: `url(${teamBackground})` }}
            />
            <div className="absolute inset-0 bg-gradient-primary opacity-60" />
            <CardContent className="relative py-12 text-white">
              <h2 className="text-3xl font-bold mb-4">
                Klaar om te starten?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Ons professionele team staat voor U klaar met persoonlijk advies en volledige begeleiding.
              </p>
              <div className="flex gap-3 justify-center">
                <Button asChild variant="secondary" size="lg">
                  <Link to="/aanvraag">
                    Vraag offerte aan
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-blue-900 border-white hover:bg-white hover:text-blue-900">
                  <Link to="/over-ons">
                    Meer info
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default OverOnsPage;
