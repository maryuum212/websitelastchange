"use client"

import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/header/header-three";
import BreadCrumb from "../../common/breadcrumb";
import BlogStandardMain from "./blog-standard";
import FooterTwo from "@/components/layout/footer/footer-three";
import ScrollToTop from "../../common/scroll/scroll-to-top";


const BlogStandardPage = () => {
    return (
        <>
            <SEO pageTitle='Blog Standard' />
            <HeaderOne />
            <BreadCrumb title="Blog Standard" innerTitle="Blog Standard" />
           
            <div className='all-footer'>
                <FooterTwo />
            </div>
            <ScrollToTop />
        </>
    );
};

export default BlogStandardPage;