"use client";
import SEO from "@/components/data/seo";;
import HeaderThree from "@/components/layout/header/header-three";
import About from "./about";
import Services from "./services";
import CtaArea from "./cta";
import Experience from "./experience";
import Portfolio from "./portfolio";
import Testimonial from "./testimonial";
import GetInTouch from "./get-in-touch";
import Blog from "./blog";
import FooterThree from "@/components/layout/footer/footer-three";

import BannerOne from "./banner";
import ScrollToTop from "../../common/scroll/scroll-to-top";

const HomeOne = () => {
    return (
        <div>
            <SEO pageTitle='Main Business' />
            <HeaderThree />
            <BannerOne />
            <About />
            <CtaArea />
            <Experience />
            <Portfolio />
            <GetInTouch />
            <FooterThree />
            <ScrollToTop />
        </div>
    );
};

export default HomeOne;