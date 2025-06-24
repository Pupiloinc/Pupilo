import BlogContent from '@/components/blog-detail/BlogContent';
import GeneralPupiloTopic from "@/components/blog/GeneralPupiloTopic";
import BackToTop from '@/components/common/BackToTop';
import Footer from '@/components/common/Footer';
import GetStarted from '@/components/common/GetStarted';
import Header from '@/components/common/Header';

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
            <GetStarted headingText={<>It’s Not Just Learning. <br /> It’s Leveling Up.</>} paragraph={<>Browse programs by level, or book a free placement <br /> session to find the perfect fit.</>} />
            <Footer />
            <BackToTop />
        </>
    )
}

export default page;
