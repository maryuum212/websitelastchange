"use client";
import SEO from '@/components/data/seo';
import HeaderThree from '@/components/layout/header/header-three';
import BreadCrumb from '../common/breadcrumb';
import Error from './error';
import FooterThree from '@/components/layout/footer/footer-three';
import ScrollToTop from '../common/scroll/scroll-to-top';

const ErrorPage = () => {
    return (
        <>
            <SEO pageTitle='Not Found' />
            <HeaderThree />
            <BreadCrumb title='Not Found' innerTitle='404' />
            <Error />
            <div className='all-footer'>
                <FooterThree />
            </div>
            <ScrollToTop />
        </>
    );
};

export default ErrorPage;