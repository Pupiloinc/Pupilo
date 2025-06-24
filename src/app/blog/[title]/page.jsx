import BlogContent from '@/components/blog-detail/BlogContent'
import YouMayLike from '@/components/blog-detail/YouMayLike'
import BackToTop from '@/components/common/BackToTop'
import Footer from '@/components/common/Footer'
import GetStarted from '@/components/common/GetStarted'
import Header from '@/components/common/Header'
import React from 'react'

const page = () => {
    return (
        <>
            <Header />
            <BlogContent />
            <YouMayLike />
            <GetStarted headingText={<>It’s Not Just Learning. <br /> It’s Leveling Up.</>} paragraph={<>Browse programs by level, or book a free placement <br /> session to find the perfect fit.</>} />
            <Footer />
            <BackToTop />
        </>
    )
}

export default page
