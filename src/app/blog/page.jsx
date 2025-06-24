import BlogHero from "@/components/blog/BlogHero";
import GeneralPupiloTopic from "@/components/blog/GeneralPupiloTopic";
import OurLatestBlogs from "@/components/blog/OurLatestBlogs";
import BackToTop from "@/components/common/BackToTop";
import Footer from "@/components/common/Footer";
import GetStarted from "@/components/common/GetStarted";
import Reviews from "@/components/common/Reviews";
import BrandMarquee from "@/components/home/BrandMarquee";
import React from "react";

const page = () => {
    return (
        <>
            <BlogHero />
            <BrandMarquee />
            <OurLatestBlogs />
            <GeneralPupiloTopic heading="General Pupilo Topic" seeAllBtn="hidden" />
            <Reviews />
            <GetStarted headingText={<>Let’s Raise Africa’s <br className="max-md:hidden" /> Next Tech Innovators.</>} paragraph={<>Browse programs by level, or book a free placement  <br className="max-sm:hidden" /> session to find the perfect fit.</>} />
            <Footer />
            <BackToTop />
        </>
    )
}

export default page;
