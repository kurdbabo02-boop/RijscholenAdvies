import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface PaymentRequest {
  naam: string;
  email: string;
  telefoon: string;
  stad: string;
  rijbewijsType: string;
  typeRijles: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Payment request received");
    
    const paymentData: PaymentRequest = await req.json();
    console.log("Payment data:", paymentData);

    // Initialize Stripe
    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2023-10-16",
    });

    // Check if a Stripe customer record exists for this email
    const customers = await stripe.customers.list({ 
      email: paymentData.email, 
      limit: 1 
    });
    
    let customerId;
    if (customers.data.length > 0) {
      customerId = customers.data[0].id;
      console.log("Existing customer found:", customerId);
    } else {
      console.log("Creating new customer for:", paymentData.email);
    }

    // Create description based on the service details
    const description = `Rijschooladvies voor ${paymentData.rijbewijsType} rijbewijs in ${paymentData.stad}`;

    // Create a one-time payment session - €41.90 total (€34.50 + €8.40 BTW)
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      customer_email: customerId ? undefined : paymentData.email,
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: { 
              name: "Persoonlijk Rijschooladvies",
              description: description
            },
            unit_amount: 4190, // €41.90 in cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${req.headers.get("origin")}/betaling-gelukt?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get("origin")}/aanvraag`,
      metadata: {
        naam: paymentData.naam,
        telefoon: paymentData.telefoon,
        stad: paymentData.stad,
        rijbewijsType: paymentData.rijbewijsType,
        typeRijles: paymentData.typeRijles || "Niet gespecificeerd"
      }
    });

    console.log("Stripe session created:", session.id);

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error: any) {
    console.error("Error in create-payment function:", error);
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