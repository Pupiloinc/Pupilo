import BlogContent from '@/components/blog-detail/BlogContent'
import BackToTop from '@/components/common/BackToTop'
import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import React from 'react'

const page = () => {
    return (
        <>
            <Header />
            <BlogContent />
            <Footer />
            <BackToTop />
        </>
    )
}

export default page
