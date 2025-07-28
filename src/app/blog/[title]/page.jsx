import BlogContent from "@/components/blog-detail/BlogContent";
import GeneralPupiloTopic from "@/components/blog/GeneralPupiloTopic";
import BackToTop from "@/components/common/BackToTop";
import Footer from "@/components/common/Footer";
import GetStarted from "@/components/common/GetStarted";
import Header from "@/components/common/Header";

export async function generateMetadata({ params }) {
  const formattedTitle = decodeURIComponent(params.title)
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return {
    title: `${formattedTitle} | Pupilo`,
    description: `Where Every Child can Code, Create and Thrive.`,
    openGraph: {
      title: `${formattedTitle} | Pupilo`,
      description: `Where Every Child can Code, Create and Thrive.`,
      url: `${process.env.PUPILO_HOST_URL}/blog/${params.title}`,
      images: [`${process.env.PUPILO_HOST_URL}/assets/meta-blog.webp`],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${formattedTitle} | Pupilo`,
      description: `Where Every Child can Code, Create and Thrive.`,
      images: [`${process.env.PUPILO_HOST_URL}/assets/meta-blog.webp`],
    },
    alternates: {
      canonical: `${process.env.PUPILO_HOST_URL}/blog/${params.title}`,
    },
  };
}

const page = ({ params }) => {
  return (
    <>
      <Header />
      <BlogContent slug={params.title} />
      <GeneralPupiloTopic
        viewMoreBtn="hidden"
        heading="You May Also Like"
        headingClass="text-start"
        paragraphClass="hidden"
        className="justify-between pb-6 md:pb-10 max-[490px]:flex-col flex-row items-start gap-6"
      />
      <GetStarted
        headingText={
          <>
            It’s Not Just Learning. <br className="max-md:hidden" /> It’s
            Leveling Up.
          </>
        }
        paragraph={
          <>
            Browse programs by level, or book a free placement <br /> session to
            find the perfect fit.
          </>
        }
      />
      <Footer />
      <BackToTop />
    </>
  );
};

export default page;
