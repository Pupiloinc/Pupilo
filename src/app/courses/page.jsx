import BackToTop from "@/components/common/BackToTop";
import Footer from "@/components/common/Footer";
import GetStarted from "@/components/common/GetStarted";
import Icons from "@/components/common/Icons";
import Reviews from "@/components/common/Reviews";
import AddOnCourses from "@/components/courses/AddOnCourses";
import PupiloCurriculum from "@/components/courses/pupiloCurriculum";
import TechJourney from "@/components/courses/TechJourney";
import Hero from "@/components/Hero";
import BrandMarquee from "@/components/home/BrandMarquee";
import Image from "next/image";

const HOST = process.env.PUPILO_HOST_URL;

export const metadata = {
  title: "Pupilo",
  description: "Engaging & Fun Programs for Kids & Teens ages 7-18.",
  ...(HOST ? { metadataBase: new URL(`${HOST}/courses`) } : {}),
  openGraph: {
    type: "website",
    title: "Pupilo",
    description: "Engaging & Fun Programs for Kids & Teens ages 7-18.",
    images: [HOST ? `${HOST}/assets/meta-courses.webp` : "/assets/meta-courses.webp"],
  },
  twitter: {
    title: "Pupilo",
    description: "Engaging & Fun Programs for Kids & Teens ages 7-18.",
    images: [HOST ? `${HOST}/assets/meta-courses.webp` : "/assets/meta-courses.webp"],
  },
  ...(HOST ? { alternates: { canonical: `${HOST}/courses` } } : {}),
};

const page = () => {
  return (
    <div className="max-w-[2560px] mx-auto">
      <Hero
        badgeText="🔃 91% Re-enrollment Rate"
        blackText="Engaging & Fun Programs"
        purpleText={
          <>
            for Kids & Teens{" "}
            <span className="relative">
              ages
              <Icons
                icon="heroTextEllipse"
                className="absolute top-2 -right-8 max-lg:hidden"
              />
            </span>
            <br className="max-lg:hidden" />
            7-18.
          </>
        }
        heroImg={
          <Image
            className="relative z-10"
            src="/assets/images/webp/courses-hero.webp"
            width={566}
            height={558}
            alt="home-hero"
          />
        }
      />
      <BrandMarquee />
      <PupiloCurriculum />
      <TechJourney />
      <AddOnCourses />
      <Reviews />
      <GetStarted
        headingText={
          <>
            Start Their Tech <br className="max-md:hidden" /> Future Today
          </>
        }
        paragraph={
          <>
            Browse programs by level, or book a free placement{" "}
            <br className="max-sm:hidden" /> session to find the perfect fit.
          </>
        }
      />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default page;
