export const POST = async (request) => {
  try {
    const { email } = await request.json();

    const res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        email,
        listIds: [3],
        updateEnabled: true,
      }),
    });

    const data = await res.json();
    if (!res.ok) {
      return new Response(
        JSON.stringify({ message: data.message || "Brevo API Error" }),
        { status: res.status }
      );
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error("Brevo Error:", error.message);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
};
