import { thankYouTemplate } from "../../../../utils/thankYouTemplate";

export async function POST(request) {
  try {
    const { toEmail, toName } = await request.json();
    const htmlContent = thankYouTemplate(toName);

    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": process.env.BREVO_API_KEY,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: {
          name: "Muskan Saini",
          email: "muskansaini758@gmail.com",
        },
        to: [
          {
            email: toEmail,
            name: toName,
          },
        ],
        subject: "Thank You for Reaching Out",
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
