import {
  BREVO_API_HOST,
  BREVO_API_KEY,
  BREVO_ADMIN_EMAIL,
  generateAdminEmailTemplate,
  DEFAULT_SENDER,
} from "../../../../constants/brevo";

export async function POST(request) {
  try {
    const { toEmail, formData } = await request.json();
    const res = await fetch(`${BREVO_API_HOST}/smtp/email`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": BREVO_API_KEY,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        to: [
          {
            email: toEmail,
          },
        ],
        params: {
          parentName: formData.parentName,
          date: formData.date,
          childName: formData.childName,
          time: formData.time,
        },
        templateId: 2,
      }),
    });

    // Send an Email to the admin at hello@pupiloinc.com
    await fetch(`${BREVO_API_HOST}/smtp/email`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": BREVO_API_KEY,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        to: [
          {
            email: BREVO_ADMIN_EMAIL,
            name: "Admin",
          },
        ],
        params: {
          parentName: formData.parentName,
          phone: `${formData.countryCode} ${formData.phone}`,
          email: formData.email,
          childName: formData.childName,
          childAge: formData.childAge,
          date: formData.date,
          time: formData.time,
          notes: formData.notes || "No additional notes provided.",
        },

        sender: DEFAULT_SENDER,
        subject: "Pupilo Update: New Contact Form Submission Received",
        htmlContent: generateAdminEmailTemplate(formData),
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
