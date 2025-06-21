import BackToTop from "@/components/common/BackToTop";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Blog from "@/components/our-blog/Blog";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <Blog />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default page;
