"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/header/header-three";
import BreadCrumb from "../../common/breadcrumb";
import FooterTwo from "@/components/layout/footer/footer-three";
import FourColumns from "./four-columns";
import ScrollToTop from "../../common/scroll/scroll-to-top";

const PortfolioFourColumns = () => {
    return (
        <>
            <SEO pageTitle='Portfolio Grid - 04 Columns' />
            <HeaderOne />
            <BreadCrumb title="04 Columns" innerTitle="Portfolio Grid" />
            <FourColumns />        
            <div className='all-footer'>
                <FooterTwo />
            </div>     
            <ScrollToTop />     
        </>
    );
};

export default PortfolioFourColumns;