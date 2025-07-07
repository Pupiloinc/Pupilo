import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import ContactForm from '@/components/contact-form/ContactForm'
import React from 'react'
export const metadata = {
  title: "Pupilo",
   description: "Learn with pupilo ",
  metadataBase: new URL("https://pupilo-cyan.vercel.app/contact-form"),
  openGraph: {
    type: "website",
    title: "Pupilo",
    description:
      "Courses",
    images: "https://pupilo-cyan.vercel.app/assets/meta-contact-form.webp",
  },
 
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