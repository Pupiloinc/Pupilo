import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import ContactForm from "@/components/contact-form/ContactForm";
import React from "react";
export const metadata = {
  title: "Pupilo",
  description: "Let's Connect.Build. Empower.",
  metadataBase: new URL(`${process.env.PUPILO_HOST_URL}/contact-form`),
  openGraph: {
    type: "website",
    title: "Pupilo",
    description: "Let's Connect.Build. Empower.",
    images: [`${process.env.PUPILO_HOST_URL}/assets/meta-contact-form.webp`],
  },
  twitter: {
    title: "Pupilo",
    description: "Let's Connect. Build. Empower.",
    images: [`${process.env.PUPILO_HOST_URL}/assets/meta-contact-form.webp`],
  },
  alternates: {
    canonical: `${process.env.PUPILO_HOST_URL}/contact-form`,
  },
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
