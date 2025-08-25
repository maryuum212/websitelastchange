import React from 'react';
import image1 from "../../../public/assets/img/about/nimage_13_pei_logo_new.png";
import image2 from "../../../public/assets/img/about/66.jpg";
import image3 from "../../../public/assets/img/about/77.jpg";
import image4 from "../../../public/assets/img/about/44.jpg";
import image5 from "../../../public/assets/img/about/22.jpg";

const History = () => {
    return (
        <div className="company__history section-padding">
            <div className="container">
                <div className="row mb-70">
                    <div className="col-xl-12">
                        <div className="company__history-title t-center">
                            <span className="subtitle-one">Our History</span>
                            <h2>Our Company History</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="company__history-area dark__image">
                            <div className="company__history-area-item">
                                <div className="company__history-area-item-left">
                                    <img src={image1.src} alt="image" />
                                </div>
                                <div className="company__history-area-item-right">
                                    <div className="company__history-area-item-right-content mb-50 xl-mb-30">
                                        <div className="company__history-area-item-right-content-date">
                                            <span>2013</span>
                                          
                                        </div>
                                        <p>Founded in 2013, Pure Earth International (PEI) started business as IT retailer in Somalia with one retail store. The high demand for quality products led us to grow with one year to six stores, covering all main cities in the country such as Hargeisa, Mogadishu, Bosaso and Galkayo.

As the business grew, the need for more products and reliable suppliers raised. PEI established first IT distribution sector in the country.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="company__history-area-items">
                                <div className="company__history-area-items-left order-last order-lg-first">
                                    <div className="company__history-area-items-left-content mb-50 xl-mb-30">
                                        <div className="company__history-area-items-left-content-date">
                                            <span>2014</span>
                                            
                                        </div>
                                        <p>
In 2014, D-link Middle East and Africa appointed Pure Earth International as exclusive country distributor in Somalia and Djibouti for the full range of D-link products, thus completing PEI's D-link product offering to local ressellers and wholesalers.One year later, in recognition of our achievement, PEI received D-Link Emerging 
Distributor of the Year 2014 award at D-Link distributors meeting in Cape Town,South Africa.

                                        </p>
                                    </div>
                                </div>
                                <div className="company__history-area-items-right">
                                    <div className="company__history-area-items-right-image">
                                        <img src={image2.src} alt="image" />
                                    </div>
                                </div>
                            </div>
                            <div className="company__history-area-item">
                                <div className="company__history-area-item-left">
                                    <div className="company__history-area-item-left-image">
                                        <img src={image3.src} alt="image" />
                                    </div>
                                </div>
                                <div className="company__history-area-item-right">
                                    <div className="company__history-area-item-right-content mb-50 xl-mb-30">
                                        <div className="company__history-area-item-right-content-date">
                                            <span>2015</span>
                                           
                                        </div>
                                        <p>
                                           
In 2015, we have launched our solution division. Pure Tech Solutions's to cover the ever growing post-sales technical challenges of our sales teams and resellers. Currently, the division deploy complex organisational
 and governmental projects ranging from network infrastructure, software design to cloud deployment. 
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="company__history-area-items">
                                <div className="company__history-area-items-left order-last order-lg-first">
                                    <div className="company__history-area-items-left-content mb-50 xl-mb-30">
                                        <div className="company__history-area-items-left-content-date">
                                            <span>2016</span>
                                        </div>
                                        <p>
                                          In 2016, PEI partnered with Toshiba to distribute Toshiba storage products in the local markets. While PEI had already been selling storage products from various vendors, direct partnership with Toshiba has enabled us to expand our sales team and reach various new resellers.

During the year 2016, we expanded our distribution operations to Djibouti, where PEI already had logistic coordination office. This allowed us to reach local resellers and expand our reach to new markets.  
                                        </p>
                                    </div>
                                </div>
                                <div className="company__history-area-items-right">
                                    <div className="company__history-area-items-right-image">
                                        <img src={image4.src} alt="imafe" />
                                    </div>
                                </div>
                            </div>
                            <div className="company__history-area-item">
                                <div className="company__history-area-item-left">
                                    <div className="company__history-area-item-left-image">
                                        <img src={image5.src} alt="imafe" />
                                    </div>
                                </div>
                                <div className="company__history-area-item-right">
                                    <div className="company__history-area-item-right-content">
                                        <div className="company__history-area-item-right-content-date">
                                            <span>2017</span>
                                            
                                        </div>
                                        <p>
                                         PEI opened display rooms to better showcase brand and products in the region, in addition to its sales office. In the same year, gained new partnership with the market leader in term of power equipment. Vertiv previously know as Emerson 
                                         agreed to provide PEI partners access to industrial grade power equipments and network management products.   
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default History;