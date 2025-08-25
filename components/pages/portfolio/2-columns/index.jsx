"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/header/header-three";
import BreadCrumb from "../../common/breadcrumb";
import FooterTwo from "@/components/layout/footer/footer-three";
import TwoColumns from "./two-columns";
import ScrollToTop from "../../common/scroll/scroll-to-top";

const PortfolioTowColumns = () => {
    return (
        <>
            <SEO pageTitle='Portfolio Grid - 02 Columns' />
            <HeaderOne />
            <BreadCrumb title="02 Columns" innerTitle="Portfolio Grid" />
            <TwoColumns />        
            <div className='all-footer'>
                <FooterTwo />
            </div>    
            <ScrollToTop />      
        </>
    );
};

export default PortfolioTowColumns;