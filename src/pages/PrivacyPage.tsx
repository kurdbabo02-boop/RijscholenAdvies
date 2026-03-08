import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main className="container mx-auto px-4 py-8 pt-32 pb-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacybeleid</h1>
          <p className="text-muted-foreground mb-8">Laatst bijgewerkt: maart 2025</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">1. Inleiding</h2>
              <p className="text-muted-foreground leading-relaxed">
                Rijscholen Advies respecteert uw privacy en zorgt ervoor dat uw persoonlijke gegevens 
                vertrouwelijk worden behandeld. In dit privacybeleid leggen wij uit welke gegevens wij 
                verzamelen, waarom wij deze verzamelen en hoe wij hiermee omgaan.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">2. Welke gegevens verzamelen wij?</h2>
              <p className="text-muted-foreground leading-relaxed">Wij verzamelen de volgende persoonsgegevens wanneer u ons contactformulier of aanvraagformulier invult:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Volledige naam</li>
                <li>E-mailadres</li>
                <li>Telefoonnummer</li>
                <li>Woonplaats/stad</li>
                <li>Voorkeuren met betrekking tot rijlessen (type rijbewijs, automaat/schakel)</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">3. Waarvoor gebruiken wij uw gegevens?</h2>
              <p className="text-muted-foreground leading-relaxed">Uw gegevens worden uitsluitend gebruikt voor:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Het verstrekken van persoonlijk rijschooladvies</li>
                <li>Contact opnemen om uw aanvraag te bespreken</li>
                <li>Het verwerken van uw betaling</li>
                <li>Het sturen van een bevestigingsmail</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">4. Hoe lang bewaren wij uw gegevens?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Wij bewaren uw persoonsgegevens niet langer dan strikt noodzakelijk is voor het doel 
                waarvoor ze zijn verzameld. Na afhandeling van uw aanvraag bewaren wij uw gegevens 
                maximaal 12 maanden voor eventuele nazorg.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">5. Delen wij uw gegevens met derden?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Wij delen uw gegevens alleen met de rijscholen die wij u adviseren, en alleen met uw 
                toestemming. Wij verkopen uw gegevens nooit aan derden. Voor de betalingsverwerking 
                maken wij gebruik van Stripe, dat eigen privacyregels hanteert.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">6. Beveiliging</h2>
              <p className="text-muted-foreground leading-relaxed">
                Wij nemen de bescherming van uw gegevens serieus. Onze website maakt gebruik van 
                SSL-encryptie (256-bit) om ervoor te zorgen dat uw gegevens veilig worden verzonden. 
                Betalingen worden verwerkt via het beveiligde platform van Stripe.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">7. Uw rechten</h2>
              <p className="text-muted-foreground leading-relaxed">U heeft het recht om:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Inzage te vragen in uw persoonsgegevens</li>
                <li>Correctie of verwijdering van uw gegevens te vragen</li>
                <li>Bezwaar te maken tegen de verwerking van uw gegevens</li>
                <li>Een klacht in te dienen bij de Autoriteit Persoonsgegevens</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">8. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Onze website maakt gebruik van functionele cookies die noodzakelijk zijn voor het 
                correct functioneren van de website. Wij gebruiken geen tracking cookies of 
                advertentiecookies.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">9. Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                Heeft u vragen over dit privacybeleid of wilt u uw rechten uitoefenen? 
                Neem dan contact met ons op:
              </p>
              <div className="bg-muted/50 rounded-2xl p-6 space-y-2 text-muted-foreground">
                <p><strong>Rijscholen Advies</strong></p>
                <p>E-mail: info@rijscholenadvies.nl</p>
                <p>Telefoon: +31 6 84646176</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPage;
