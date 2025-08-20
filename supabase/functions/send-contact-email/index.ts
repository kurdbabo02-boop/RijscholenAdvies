import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  naam: string;
  email: string;
  telefoon: string;
  stad: string;
  typeRijles: string;
  rijbewijsType: string;
  onderwerp?: string;
  bericht?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();

    // Send email to the business
    const businessEmailResponse = await resend.emails.send({
      from: "Rijscholen Advies <info@rijscholenadvies.nl>",
      to: ["info@rijscholenadvies.nl"],
      subject: `Nieuwe aanvraag van ${formData.naam}`,
      html: `
        <h2>Nieuwe rijschooladvies aanvraag</h2>
        <div style="font-family: Arial, sans-serif; line-height: 1.5;">
          <h3>Contactgegevens:</h3>
          <p><strong>Naam:</strong> ${formData.naam}</p>
          <p><strong>E-mail:</strong> ${formData.email}</p>
          <p><strong>Telefoon:</strong> ${formData.telefoon}</p>
          
          <h3>Rijlesvoorkeuren:</h3>
          <p><strong>Stad:</strong> ${formData.stad}</p>
          <p><strong>Type rijbewijs:</strong> ${formData.rijbewijsType}</p>
          <p><strong>Type rijles:</strong> ${formData.typeRijles}</p>
          
          ${formData.onderwerp ? `<h3>Bericht:</h3>
          <p><strong>Onderwerp:</strong> ${formData.onderwerp}</p>` : ''}
          ${formData.bericht ? `<p><strong>Bericht:</strong> ${formData.bericht}</p>` : ''}
          
          <hr>
          <p><small>Deze e-mail is automatisch gegenereerd via de website.</small></p>
        </div>
      `,
    });

    // Send confirmation email to the customer
    const customerEmailResponse = await resend.emails.send({
      from: "Rijscholen Advies <info@rijscholenadvies.nl>",
      to: [formData.email],
      subject: "Bevestiging van uw rijschooladvies aanvraag",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #2563eb;">Bedankt voor uw aanvraag!</h1>
          
          <p>Beste ${formData.naam},</p>
          
          <p>Wij hebben uw aanvraag voor rijschooladvies ontvangen. Ons team neemt vandaag nog contact met u op om uw persoonlijke advies te bespreken.</p>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Uw aanvraag:</h3>
            <p><strong>Stad:</strong> ${formData.stad}</p>
            <p><strong>Type rijbewijs:</strong> ${formData.rijbewijsType}</p>
            <p><strong>Type rijles:</strong> ${formData.typeRijles}</p>
          </div>
          
          <p>Heeft u nog vragen? Neem gerust contact met ons op:</p>
          <ul>
            <li><strong>Telefoon:</strong> +31 638901956</li>
            <li><strong>E-mail:</strong> info@rijscholenadvies.nl</li>
            <li><strong>Bereikbaarheid:</strong> Maandag t/m vrijdag van 8:00 tot 17:30</li>
          </ul>
          
          <p>Met vriendelijke groet,<br>
          Het team van Rijscholen Advies</p>
          
          <hr style="margin: 30px 0;">
          <p style="font-size: 12px; color: #6b7280;">
            Dit is een automatisch gegenereerde e-mail. Voor vragen kunt u contact opnemen via bovenstaande gegevens.
          </p>
        </div>
      `,
    });

    console.log("Emails sent successfully:", { businessEmailResponse, customerEmailResponse });

    return new Response(JSON.stringify({ 
      success: true,
      businessEmailId: businessEmailResponse.data?.id,
      customerEmailId: customerEmailResponse.data?.id
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);