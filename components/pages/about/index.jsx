"use client"

import SEO from "@/components/data/seo";
import HeaderThree from "@/components/layout/header/header-three";
import BreadCrumb from "../common/breadcrumb";
import AboutMain from "./about";
import FooterThree from "@/components/layout/footer/footer-three";
import ScrollToTop from "../common/scroll/scroll-to-top";
import WhoWeAre from "./who-we-are";
import History from "./history";

const AboutUs = () => {
    return (
        <>
            <SEO pageTitle="About Us" />
            <HeaderThree />
            <BreadCrumb title="About Us" innerTitle="Company About" />
            <AboutMain />
            <WhoWeAre />
            <History />
            <div className='all-footer'>
                <FooterThree />
            </div>
            <ScrollToTop />
        </>
    );
};

export default AboutUs;