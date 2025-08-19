import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const FAQPage = () => {
  const faqData = [
    {
      question: "Wat kost het advies?",
      answer: "Ons persoonlijk advies kost €40. Hiervoor ontvang je een volledig op maat gemaakt advies, vergelijking van de beste rijscholen in jouw regio, en persoonlijke begeleiding bij de aanmelding."
    },
    {
      question: "Hoe snel ontvang ik het advies?",
      answer: "Binnen 24 uur na je aanvraag nemen wij contact met je op. Ons team is 24/7 bereikbaar en garandeert een reactietijd van maximaal 30 minuten voor urgente vragen."
    },
    {
      question: "Welke rijscholen bevelen jullie aan?",
      answer: "Wij werken alleen samen met gecertificeerde rijscholen die voldoen aan onze hoge kwaliteitseisen. We selecteren alleen de goedkoopste én beste rijscholen met bewezen resultaten en hoge slagingspercentages."
    },
    {
      question: "Is jullie advies betrouwbaar?",
      answer: "Absoluut. Wij helpen al meer dan 10 jaar mensen bij het vinden van de perfecte rijschool. Ons team bestaat uit rijschoolexperts met uitgebreide kennis van de sector en een groot netwerk van betrouwbare rijscholen."
    },
    {
      question: "Voor welke rijbewijzen kunnen jullie helpen?",
      answer: "Wij kunnen adviseren voor alle gangbare rijbewijzen: B (personenauto), AM (bromfiets), A1, A2 en A (motorfietsen). Voor zowel handgeschakelde als automatische transmissie."
    },
    {
      question: "Wat gebeurt er na het advies?",
      answer: "Na ons advies ontvang je direct de contactgegevens van de aanbevolen rijscholen. Wij helpen je ook bij het aanmeldingsproces en bieden gratis nazorg. Je bent nergens toe verplicht en kunt vrijblijvend contact opnemen."
    },
    {
      question: "Werken jullie landelijk?",
      answer: "Ja, wij dekken heel Nederland af. Ons netwerk van rijscholen is beschikbaar in alle steden en dorpen, van Amsterdam tot Groningen en van Rotterdam tot Maastricht."
    },
    {
      question: "Kan ik het advies ook telefonisch krijgen?",
      answer: "Zeker! Na je online aanvraag plannen we graag een persoonlijk gesprek. Je kunt ons ook direct bellen op +31 685719049 voor vragen of om je aanvraag telefonisch door te nemen."
    },
    {
      question: "Zijn er extra kosten na het advies?",
      answer: "Nee, er zijn geen verborgen kosten. Voor €40 krijg je het complete advies en alle begeleiding. Er zijn geen automatische verlengingen of extra kosten."
    },
    {
      question: "Wat als ik niet tevreden ben?",
      answer: "Jouw tevredenheid staat voorop. Mocht je niet tevreden zijn met ons advies, dan zoeken we samen naar een oplossing. Ons doel is dat je de perfecte rijschool vindt die bij jou past."
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
                Veelgestelde Vragen
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Alle antwoorden op jouw vragen over ons rijschooladvies
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqData.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-background border rounded-lg px-6">
                    <AccordionTrigger className="text-left font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Nog meer vragen?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Neem direct contact op - wij helpen je graag verder!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">Direct contact</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/aanvraag">Start je offerte</Link>
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