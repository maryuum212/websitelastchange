import React from 'react';

const PortfolioDetailsMain = ({ singleData }) => {
    return (
        <div className="portfolio__details dark__image section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                     
                    </div>
                </div>

                <div className="row mt-40">
                    <div className="col-lg-4 lg-mb-15">
                        <h3>Vendors</h3>
                    </div>
                    <div className="col-lg-8">
                        <p>
                            PEI distribution provide supply chain management service to some of the most esteemed 
                            international brands engaged in Information technology, data center, power & telecoms 
                            products. Through the years, we have maintained an excellent partner relationship and
                            market presence facilitation to manufacturer such as Lenovo, D-link, Vertiv, Epson, 
                            Microsoft, Dell, Logitech, Estap, and Eastman Solar. PEI has in-depth knowledge and
                            understanding of its fast growing market and a broad local presence such as warehousing 
                            facility and show rooms in Somalia, Djibouti, Ethiopia and Dubai.
                        </p>
                    </div>
                </div>

                <div className="row mt-30 dark_image">
                    <div className="col-sm-4 sm-mb-25">
                        <img className="img__full" src="../assets/img/portfolio/111.png" alt="portfolio" />
                    </div>
                    <div className="col-sm-4 sm-mb-25">
                        <img className="img__full" src="../assets/img/portfolio/222.png" alt="portfolio" />
                    </div>
                    <div className="col-sm-4">
                        <img className="img__full" src="../assets/img/portfolio/666.png" alt="portfolio" />
                    </div>
                </div>

                <div className="row mt-40">
                    <div className="col-12">
                        <h3 className="text-center mb-4">Benefits of being our partners</h3>
                    </div>
                    <div className="col-lg-8 offset-lg-2">
                        <ul className="benefits-list">
                            <li>No.1 technology distributor in the Horn of Africa</li>
                            <li>Profound knowledge of local economies</li>
                            <li>Reseller channel development and support</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioDetailsMain;
