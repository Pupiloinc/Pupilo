import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Title from "@/components/common/Title";
import Image from "next/image";
import Script from "next/script";
import TallyLazyEmbed from "@/components/common/TallyLazyEmbed";

const HOST = process.env.PUPILO_HOST_URL;

export const metadata = {
  title: "Enroll — Pupilo",
  description: "Enroll at Pupilo — Where Every Child can Code, Create and Thrive.",
  ...(HOST ? { metadataBase: new URL(`${HOST}`) } : {}),
  openGraph: {
    type: "website",
    title: "Enroll — Pupilo",
    description: "Enroll at Pupilo — Where Every Child can Code, Create and Thrive.",
    images: [HOST ? `${HOST}/assets/images/webp/pupilo-hero.webp` : "/assets/images/webp/pupilo-hero.webp"],
  },
  twitter: {
    title: "Enroll — Pupilo",
    description: "Enroll at Pupilo — Where Every Child can Code, Create and Thrive.",
    images: [HOST ? `${HOST}/assets/images/webp/pupilo-hero.webp` : "/assets/images/webp/pupilo-hero.webp"],
  },
  ...(HOST ? { alternates: { canonical: `${HOST}/enroll` } } : {}),
};

export default function Page() {
  return (
    <>
      <div className="bg-[url(/assets/images/webp/bg-hero.webp)] bg-cover bg-no-repeat bg-center relative">
        <Header />
        {/* Decorative ellipses from contact form background */}
        <Image
          src="/assets/images/png/form-ellips-start.png"
          alt="bottom-left"
          width={325}
          height={325}
          className="absolute bottom-0 left-0 pointer-events-none max-lg:hidden"
        />
        <Image
          src="/assets/images/png/form-ellipse.png"
          alt="right-ellipse"
          width={180}
          height={340}
          className="absolute top-1/3 right-0 pointer-events-none max-lg:hidden"
        />
        <Image
          src="/assets/images/png/form-ellips-start-yello.png"
          alt="top-ellipse"
          width={325}
          height={325}
          className="absolute top-0 left-[16%] pointer-events-none max-lg:hidden"
        />
        <div className="container max-w-[1140px] xl:px-0 px-4 md:px-6 mx-auto">
          <div className="py-8 md:py-12 lg:py-16">
            <div className="text-center max-w-[860px] mx-auto">
              <Title className="!text-4xl sm:!text-5xl" text={
                <>
                  <span className="bg-gradient-to-r from-purple to-blue-600 bg-clip-text text-transparent font-extrabold">ENROLL NOW</span>
                  {" "}TO START YOUR CHILD/TEEN CODING JOURNEY
                </>
              } />
              <p className="mt-3 text-black/70">
                Complete the enrollment form below. It takes less than 2 minutes!
              </p>
              {/* Trust chips */}
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                <span className="text-sm px-3 py-1.5 rounded-full bg-white-100 border border-black/10">✓ Secure & private</span>
                <span className="text-sm px-3 py-1.5 rounded-full bg-white-100 border border-black/10">✓ No payment required</span>
                <span className="text-sm px-3 py-1.5 rounded-full bg-white-100 border border-black/10">✓ Takes under 2 minutes</span>
              </div>
              {/* Help link */}
              <div className="mt-3 text-sm text-black/70">
                Questions? <a className="text-purple font-semibold hover:opacity-80" href="https://wa.me/+27738649689" target="_blank" rel="noopener noreferrer">Chat with us on WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      

      <section className="container max-w-[1140px] xl:px-0 px-6 max-sm:px-4 mx-auto pt-2 sm:pt-4 pb-[40px] sm:pb-[56px]">
        <div className="mt-0 sm:mt-0 bg-white rounded-3xl form-shadow p-3 sm:p-5 border border-black/20 ring-1 ring-purple/15 focus-within:ring-2 focus-within:ring-purple/25 transition-shadow">
          {/* Tally Embed */}
          <TallyLazyEmbed
            src="https://tally.so/embed/wvkX9A?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            title="Pupilo - Enrollment"
            height={800}
          />
          {/* Pre-form checklist (reduces friction by setting expectations) */}
        
        </div>

        {/* FAQ: addresses common anxieties */}
        <div className="max-w-[860px] mx-auto mt-10">
          <h3 className="text-2xl font-semibold text-dark-black text-center">Frequently Asked Questions</h3>
          <div className="mt-4 space-y-2">
            <details className="bg-white rounded-xl border border-black/10 p-4">
              <summary className="cursor-pointer font-semibold text-dark-black">How long does it take?</summary>
              <p className="mt-2 text-black/70">About 2 minutes. The form is short and only asks for essentials so we can reach out quickly.</p>
            </details>
            <details className="bg-white rounded-xl border border-black/10 p-4">
              <summary className="cursor-pointer font-semibold text-dark-black">What happens after I submit?</summary>
              <p className="mt-2 text-black/70">You’ll see a confirmation message. Our team will contact you to confirm your child’s schedule and next steps.</p>
            </details>
            <details className="bg-white rounded-xl border border-black/10 p-4">
              <summary className="cursor-pointer font-semibold text-dark-black">Do I need to pay now?</summary>
              <p className="mt-2 text-black/70">No payment is required to submit the form. We’ll first align on schedule and fit for your child.</p>
            </details>
            <details className="bg-white rounded-xl border border-black/10 p-4">
              <summary className="cursor-pointer font-semibold text-dark-black">How is my data used?</summary>
              <p className="mt-2 text-black/70">We use your information only to process your enrollment and keep you updated. You can opt out of messages at any time.</p>
            </details>
          </div>
        </div>
      </section>
      </div>
      <Footer />

      {/* Load Tally’s embed script and initialize */}
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
      />
    </>
  );
}
