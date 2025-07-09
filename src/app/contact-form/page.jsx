import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import ContactForm from '@/components/contact-form/ContactForm'
import React from 'react'
export const metadata = {
  title: "Pupilo",
  description: "Let's Connect.Build. Empower.",
  metadataBase: new URL("https://www.pupiloinc.com/contact-form"),
  openGraph: {
    type: "website",
    title: "Pupilo",
    description: "Let's Connect.Build. Empower.",
    images: "https://www.pupiloinc.com/assets/meta-contact-form.webp",
  },
  twitter: {
    title: "Pupilo",
    description: "Let's Connect. Build. Empower.",
    images: ["https://www.pupiloinc.com/assets/meta-contact-form.webp"],
  },
  alternates: {
    canonical: "https://www.pupiloinc.com/contact-form",
  }

};
const page = () => {
  return (
    <>
      <Header />
      <ContactForm />
      <Footer />
    </>
  )
}

export default page