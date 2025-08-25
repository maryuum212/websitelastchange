"use client"
import SEO from "@/components/data/seo";
import Headerthree from "@/components/layout/header/header-three";
import BreadCrumb from "../../common/breadcrumb";
import PortfolioDetailsMain from "./portfolio-details";
import Footerthree from "@/components/layout/footer/footer-three";
import ScrollToTop from "../../common/scroll/scroll-to-top";

const PortfolioDetails = ({singleData}) => {
    return (
        <>
            <SEO pageTitle={singleData?.title} />
            < Headerthree />
            <BreadCrumb title={singleData?.title} innerTitle={singleData?.title} />
            <PortfolioDetailsMain singleData={singleData} />
            <div className='all-footer'>
                <Footerthree/>
            </div>
            <ScrollToTop />
        </>
    );
};

export default PortfolioDetails;