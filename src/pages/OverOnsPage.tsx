import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Users, Award, Target, Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";

const OverOnsPage = () => {
  const stats = [
    { number: "10,000+", label: "Tevreden klanten", icon: Users },
    { number: "500+", label: "Rijscholen in netwerk", icon: Award },
    { number: "4.9/5", label: "Klantbeoordeling", icon: Star },
    { number: "95%", label: "Slaagkans verbetering", icon: Target }
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
      
      <main className="container mx-auto px-4 py-8 pt-24">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            De beste rijschool
            <span className="bg-gradient-hero bg-clip-text text-transparent"> vinden?</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Wij helpen jou al meer dan 10 jaar bij het vinden van de perfecte rijschool. 
            Met onze expertise en uitgebreide netwerk zorgen we ervoor dat je de beste keuze maakt.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center shadow-smooth hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-gradient-primary flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our Story */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="shadow-smooth">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">Ons verhaal</CardTitle>
              <CardDescription className="text-lg">
                Hoe het allemaal begon
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                In 2014 startten we Rijschool Adviesbureau vanuit een simpele frustratie: 
                het was veel te moeilijk om een goede rijschool te vinden. Te veel keuzes, 
                onduidelijke prijzen en geen objectief advies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We besloten dit probleem op te lossen door een onafhankelijk platform te creëren 
                waar iedereen snel en eenvoudig de beste rijschool voor hun situatie kan vinden. 
                Geen verborgen kosten, geen commerciële belangen - gewoon eerlijk advies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Vandaag de dag hebben we meer dan 10.000 mensen geholpen bij het behalen van 
                hun rijbewijs. En daar zijn we trots op!
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Onze waarden</h2>
            <p className="text-xl text-muted-foreground">
              Waar wij voor staan en wat ons drijft
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="shadow-smooth hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="shadow-smooth">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">Ons team</CardTitle>
              <CardDescription className="text-lg">
                Rijschoolexperts met jarenlange ervaring
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="h-24 w-24 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Sarah de Vries</h3>
                  <p className="text-muted-foreground mb-4">Oprichter & Rijschoolexpert</p>
                  <p className="text-sm text-muted-foreground">
                    15+ jaar ervaring in de rijschoolbranche. Passie voor het helpen 
                    van mensen bij hun rijbewijs.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="h-24 w-24 mx-auto mb-4 rounded-full bg-gradient-secondary flex items-center justify-center">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Mark Janssen</h3>
                  <p className="text-muted-foreground mb-4">Senior Adviseur</p>
                  <p className="text-sm text-muted-foreground">
                    Expert in rijschoolkwaliteit en klantbegeleiding. Zorgt ervoor 
                    dat elk advies perfect aansluit.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-hero text-white shadow-hero">
            <CardContent className="py-12">
              <h2 className="text-3xl font-bold mb-4">
                Klaar om de beste rijschool te vinden?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Laat ons je helpen bij het maken van de juiste keuze
              </p>
              <Button asChild variant="secondary" size="lg">
                <Link to="/aanvraag">
                  Start je aanvraag
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default OverOnsPage;