import { BREVO_API_HOST } from "../../../../constants/brevo";
import { thankYouTemplate } from "../../../../utils/thankYouTemplate";

export async function POST(request) {
  try {
    const { toEmail, toName } = await request.json();
    const htmlContent = thankYouTemplate(toName);

    const res = await fetch(`${BREVO_API_HOST}/smtp/email`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": process.env.BREVO_API_KEY,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        to: [
          {
            email: toEmail,
            name: toName,
          },
        ],
        htmlContent,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Brevo API error:", data);
      return new Response(JSON.stringify({ error: data }), {
        status: res.status,
      });
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error("API Route Error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
