import Link from "next/link";
import Count from "../common/count";


const AboutMain = () => {
    const aboutContent = {
        image_1: '/assets/img/about/3.jpg',
        image_2: '/assets/img/about/5.jpg',
        subtitle: 'Our History',
        title: 'Find out more about our Historey PEI',
        description: 'PEI distribution provide supply chain management service to some of the most esteemed international brands engaged in Information technology, data center, power & telecoms products. Through the years, we have maintained an excellent partner relationship and market presence facilitation to manufacturer such as Lenovo, D-link, Vertiv, Epson, Microsoft, Dell, Logitech, Estap, and Eastman Solar. PEI has in-depth knowledge and understanding of its fast growing market and a broad local presence such as warehousing facility and show rooms in Somalia, Djibouti, Ethiopia and Dubai.',
        btn_text: 'Discover More',
        btn_href: '/about-us',
        shape_1: '/assets/img/shape/about-1.png',
        shape_2: '/assets/img/shape/about-2.png',
    }
    return (
        <>
            <div className="about__company section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xxl-7 col-xl-6 xl-mb-30">
                            <div className="about__company-left">
                                <div className="about__company-left-image dark__image">
                                    <img src={aboutContent.image_1} alt="image" />
                                    <img src={aboutContent.image_2} alt="image" />
                                </div>
                             
                            </div>
                        </div>
                        <div className="col-xxl-5 col-xl-6">
                            <div className="about__company-right">
                                <div className="about__company-right-title">							
                                    <span className="subtitle-one">{aboutContent.subtitle}</span>
                                    <h2>{aboutContent.title}</h2>
                                    <p>{aboutContent.description}</p>
                                    <Link className="btn-one" href={aboutContent.btn_href}>{aboutContent.btn_text}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="about__one-shape-1" src={aboutContent.shape_1} alt="shape" />
                <img className="about__one-shape-2" src={aboutContent.shape_2} alt="shape" />
            </div>
        </>
    );
};

export default AboutMain;