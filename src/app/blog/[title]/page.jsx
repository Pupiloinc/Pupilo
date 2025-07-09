import BlogContent from '@/components/blog-detail/BlogContent';
import GeneralPupiloTopic from "@/components/blog/GeneralPupiloTopic";
import BackToTop from '@/components/common/BackToTop';
import Footer from '@/components/common/Footer';
import GetStarted from '@/components/common/GetStarted';
import Header from '@/components/common/Header';
export const metadata = {
    title: "Pupilo",
    description: "Read Our latest Blogs",
    metadataBase: new URL("https://www.pupiloinc.com/blog/from-first-line-to-full-stack-journeys-from-our-students"),
    openGraph: {
        type: "website",
        title: "Pupilo",
        description:
            "Read Our latest Blogs",
        images: "https://www.pupiloinc.com/assets/meta-blog-details.webp",
    },
    twitter: {
        title: "Pupilo",
        description: "Read Our Latest Blogs",
        images: ["https://www.pupiloinc.com/assets/meta-blog-details.webp"],
    },
    alternates: {
        canonical: "https://www.pupiloinc.com/blog/from-first-line-to-full-stack-journeys-from-our-students",
    }
};
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
            <GetStarted headingText={<>It’s Not Just Learning. <br className='max-md:hidden' /> It’s Leveling Up.</>} paragraph={<>Browse programs by level, or book a free placement <br /> session to find the perfect fit.</>} />
            <Footer />
            <BackToTop />
        </>
    )
}

export default page;
