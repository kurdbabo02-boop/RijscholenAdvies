import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const AlgemeneVoorwaardenPage = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main className="container mx-auto px-4 py-8 pt-32 pb-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Algemene Voorwaarden</h1>
          <p className="text-muted-foreground mb-8">Laatst bijgewerkt: maart 2025</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Artikel 1 — Definities</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Rijscholen Advies:</strong> de aanbieder van rijschooladvies, gevestigd in Nederland.</li>
                <li><strong>Klant:</strong> de natuurlijke persoon die een aanvraag indient voor rijschooladvies.</li>
                <li><strong>Dienst:</strong> het persoonlijk rijschooladvies zoals aangeboden via de website.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Artikel 2 — Toepasselijkheid</h2>
              <p className="text-muted-foreground leading-relaxed">
                Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, overeenkomsten 
                en diensten van Rijscholen Advies. Door gebruik te maken van onze diensten gaat u 
                akkoord met deze voorwaarden.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Artikel 3 — De dienst</h2>
              <p className="text-muted-foreground leading-relaxed">
                Rijscholen Advies biedt persoonlijk advies bij het vinden van een geschikte rijschool. 
                Dit advies omvat:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Analyse van uw wensen en voorkeuren</li>
                <li>Vergelijking van rijscholen in uw omgeving</li>
                <li>Persoonlijk advies over de best passende rijschool</li>
                <li>Begeleiding bij het aanmeldingsproces</li>
                <li>Gratis nazorg en ondersteuning</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Artikel 4 — Prijzen en betaling</h2>
              <p className="text-muted-foreground leading-relaxed">
                De kosten voor het persoonlijk rijschooladvies bedragen €34,50 exclusief BTW 
                (€41,90 inclusief 21% BTW). Betaling geschiedt via iDEAL of creditcard via het 
                beveiligde betalingsplatform Stripe. Na betaling wordt uw aanvraag direct in behandeling genomen.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Artikel 5 — Herroepingsrecht</h2>
              <p className="text-muted-foreground leading-relaxed">
                U heeft het recht om binnen 14 dagen na aankoop zonder opgave van redenen de 
                overeenkomst te herroepen. In dat geval ontvangt u het volledige bedrag terug. 
                Dit herroepingsrecht vervalt zodra de dienst volledig is uitgevoerd met uw 
                uitdrukkelijke voorafgaande toestemming.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Artikel 6 — Aansprakelijkheid</h2>
              <p className="text-muted-foreground leading-relaxed">
                Rijscholen Advies geeft advies op basis van beschikbare informatie en ervaring. 
                Wij zijn niet aansprakelijk voor de kwaliteit van de rijlessen die door de 
                aanbevolen rijschool worden gegeven. De uiteindelijke keuze voor een rijschool 
                ligt altijd bij de klant.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Artikel 7 — Klachtenprocedure</h2>
              <p className="text-muted-foreground leading-relaxed">
                Heeft u een klacht over onze dienstverlening? Neem dan contact met ons op via 
                het klachtenformulier op onze website of per e-mail. Wij streven ernaar klachten 
                binnen 5 werkdagen te behandelen. U kunt ook een klacht indienen via ons 
                klachtenformulier op de website.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Artikel 8 — Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Wij verwerken uw persoonsgegevens in overeenstemming met onze privacyverklaring. 
                Uw gegevens worden uitsluitend gebruikt voor het verlenen van de gevraagde dienst 
                en worden niet aan derden verkocht.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Artikel 9 — Toepasselijk recht</h2>
              <p className="text-muted-foreground leading-relaxed">
                Op alle overeenkomsten tussen Rijscholen Advies en de klant is Nederlands recht 
                van toepassing. Geschillen worden voorgelegd aan de bevoegde rechter in Nederland.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Artikel 10 — Contact</h2>
              <div className="bg-muted/50 rounded-2xl p-6 space-y-2 text-muted-foreground">
                <p><strong>Rijscholen Advies</strong></p>
                <p>E-mail: info@rijscholenadvies.nl</p>
                <p>Telefoon: +31 6 84646176</p>
                <p>Bereikbaarheid: maandag t/m vrijdag 8:00 - 17:30</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AlgemeneVoorwaardenPage;
