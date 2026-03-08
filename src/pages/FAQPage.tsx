import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { HelpCircle, ArrowRight } from "lucide-react";

const FAQPage = () => {
  const faqData = [
    {
      question: "Wat kost het advies?",
      answer: "Ons persoonlijk advies kost €34,50 exclusief BTW (€41,90 inclusief BTW). Hiervoor ontvangt u een volledig op maat gemaakt advies, vergelijking van de beste rijscholen in uw omgeving, en persoonlijke begeleiding bij de aanmelding."
    },
    {
      question: "Hoe snel ontvang ik het advies?",
      answer: "Ons team neemt dezelfde dag nog contact met u op na uw aanvraag. Wij zijn bereikbaar van maandag t/m vrijdag van 8:00 tot 17:30. Voor urgente vragen zijn wij ook buiten kantooruren beschikbaar."
    },
    {
      question: "Welke rijscholen bevelen jullie aan?",
      answer: "Wij werken alleen samen met gecertificeerde rijscholen die voldoen aan onze hoge kwaliteitseisen. We selecteren alleen de goedkoopste én beste rijscholen met bewezen resultaten en hoge slagingspercentages."
    },
    {
      question: "Is jullie advies betrouwbaar?",
      answer: "Absoluut. Ons team bestaat uit rijschoolexperts met uitgebreide kennis van de sector en een groot netwerk van betrouwbare rijscholen door heel Nederland."
    },
    {
      question: "Voor welke rijbewijzen kunnen jullie helpen?",
      answer: "Wij kunnen adviseren voor alle rijbewijzen: AM (bromfiets/scooter), A1/A2/A (motor), B (auto), BE (auto met aanhanger), C1/C1E/C/CE (vrachtwagens), D1/D1E/D/DE (bussen), en T (tractor/landbouwvoertuigen)."
    },
    {
      question: "Wat gebeurt er na het advies?",
      answer: "Na ons advies ontvangt u direct de contactgegevens van de aanbevolen rijscholen. Wij helpen u ook bij het aanmeldingsproces en bieden gratis nazorg."
    },
    {
      question: "Werken jullie landelijk?",
      answer: "Ja, wij hebben contact met rijscholen door heel Nederland. Ons netwerk is beschikbaar in alle grote steden en omliggende gebieden."
    },
    {
      question: "Kan ik het advies ook telefonisch krijgen?",
      answer: "Zeker! Na uw online aanvraag plannen wij graag een persoonlijk gesprek. U kunt ons ook direct bellen op +31 6 84646176."
    },
    {
      question: "Zijn er extra kosten na het advies?",
      answer: "Nee, er zijn geen verborgen kosten. Voor €41,90 (incl. BTW) krijgt u het complete advies en alle begeleiding. Geen automatische verlengingen."
    },
    {
      question: "Wat als ik niet tevreden ben?",
      answer: "Binnen 14 dagen bieden wij een volledige geld-terug-garantie. Uw tevredenheid staat voorop."
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
                <HelpCircle className="h-4 w-4" />
                FAQ
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Veelgestelde Vragen
              </h1>
              <p className="text-xl text-muted-foreground">
                Alle antwoorden op uw vragen over ons rijschooladvies
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-3">
                {faqData.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`} 
                    className="bg-card border-0 shadow-card rounded-2xl px-6 data-[state=open]:shadow-float transition-all duration-200"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Nog meer vragen?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
              Neem direct contact op — wij helpen u graag verder!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">
                  Contact opnemen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/aanvraag">Vraag advies aan</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQPage;
