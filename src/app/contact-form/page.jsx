import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import ContactForm from "@/components/contact-form/ContactForm";
import React from "react";
const HOST = process.env.PUPILO_HOST_URL;
export const metadata = {
  title: "Pupilo",
  description: "Let's Connect.Build. Empower.",
  ...(HOST ? { metadataBase: new URL(`${HOST}/contact-form`) } : {}),
  openGraph: {
    type: "website",
    title: "Pupilo",
    description: "Let's Connect.Build. Empower.",
    images: [HOST ? `${HOST}/assets/meta-contact-form.webp` : "/assets/meta-contact-form.webp"],
  },
  twitter: {
    title: "Pupilo",
    description: "Let's Connect. Build. Empower.",
    images: [HOST ? `${HOST}/assets/meta-contact-form.webp` : "/assets/meta-contact-form.webp"],
  },
  ...(HOST ? { alternates: { canonical: `${HOST}/contact-form` } } : {}),
};
const page = () => {
  return (
    <>
      <Header />
      <ContactForm />
      <Footer />
    </>
  );
};

export default page;
