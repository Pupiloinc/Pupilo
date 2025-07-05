export const POST = async (email) => {
  try {
    const res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        email,
        listIds: [2],
        updateEnabled: true,
      }),
    });
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || "Brevo API Error");
    }
    console.log("Contact added:", data);
    return data;
  } catch (error) {
    console.error("Brevo Error:", error.message);
    return null;
  }
};
