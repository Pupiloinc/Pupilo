export const BREVO_API_KEY = process.env.BREVO_API_KEY || null;
export const BREVO_API_HOST = "https://api.brevo.com/v3";
export const BREVO_ADMIN_EMAIL = "hello@pupiloinc.com";

// List ID for the waitlist
export const WAITLIST_LIST_ID = 2;
// List ID for the newsletter
export const NEWSLETTER_LIST_ID = 3;

export const DEFAULT_SENDER = {
  name: "Pupilo Team",
  email: "hello@pupiloinc.com",
};

export const generateAdminEmailTemplate = (formData) => {
  return `
    <h1>New Contact Form Submission</h1>
    <p><strong>Parent Name:</strong> ${formData.parentName}</p>
    <p><strong>Phone:</strong> ${formData.countryCode} ${formData.phone}</p>
    <p><strong>Email:</strong> ${formData.email}</p>
    <p><strong>Child Name:</strong> ${formData.childName}</p>
    <p><strong>Child Age:</strong> ${formData.childAge}</p>
    <p><strong>Date for Trial:</strong> ${formData.date}</p>
    <p><strong>Time for Trial:</strong> ${formData.time}</p>
    <p><strong>Notes:</strong> ${formData.notes || "No additional notes provided."}</p>
  `;
};
