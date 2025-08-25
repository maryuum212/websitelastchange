"use client"

import SEO from "@/components/data/seo";
import Headerthree from "@/components/layout/header/header-three";
import BreadCrumb from "../../common/breadcrumb";
import PortfolioFilter from "./portfolio-filter";
import Footerthree from "@/components/layout/footer/footer-three";
import ScrollToTop from "../../common/scroll/scroll-to-top";

const PortfolioFilterPage = () => {
    return (
        <>
            <SEO pageTitle='Portfolio Filter' />
            <Headerthree />
            <BreadCrumb title="Portfolio Filter" innerTitle="Portfolio Filter" />
            <PortfolioFilter />
            <div className='all-footer'>
                <Footerthree />
            </div>
            <ScrollToTop />
        </>
    );
};

export default PortfolioFilterPage;