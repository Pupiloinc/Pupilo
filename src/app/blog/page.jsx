import BlogHero from '@/components/blog/BlogHero'
import GeneralPupiloTopic from '@/components/blog/GeneralPupiloTopic'
import OurLatestBlogs from '@/components/blog/OurLatestBlogs'
import BackToTop from '@/components/common/BackToTop'
import Footer from '@/components/common/Footer'
import GetStarted from '@/components/common/GetStarted'
import Reviews from '@/components/common/Reviews'
import BrandMarquee from '@/components/home/BrandMarquee'
import React from 'react'

const page = () => {
    return (
        <>
            <BlogHero />
            <BrandMarquee/>
            <OurLatestBlogs />
            <GeneralPupiloTopic />
            <Reviews />
            <GetStarted />
            <Footer />
            <BackToTop />
        </>
    )
}

export default page