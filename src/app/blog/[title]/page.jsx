import BlogContent from "@/components/blog-detail/BlogContent";
import GeneralPupiloTopic from "@/components/blog/GeneralPupiloTopic";
import BackToTop from "@/components/common/BackToTop";
import Footer from "@/components/common/Footer";
import GetStarted from "@/components/common/GetStarted";
import Header from "@/components/common/Header";
import React from "react";

const page = () => {
  return (
    <>
      <Header />
      <BlogContent />
      <GeneralPupiloTopic
        viewMoreBtn="hidden"
        heading="You May Also Like"
        headingClass="text-start"
        paragraphClass="hidden"
        className="justify-between pb-10 max-[490px]:flex-col flex-row items-start gap-6"
      />
      <GetStarted />
      <Footer />
      <BackToTop />
    </>
  );
};

export default page;
