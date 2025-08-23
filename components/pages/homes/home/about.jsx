











"use client"
import shape1 from "../../../../public/assets/img/shape/about-1.png";
import shape2 from "../../../../public/assets/img/shape/about-1-dark.png";
import shape3 from "../../../../public/assets/img/shape/about-2.png";
import shape4 from "../../../../public/assets/img/shape/about-2-dark.png";
import image2 from "../../../../public/assets/img/about/partners.jpg";
import image1 from "../../../../public/assets/img/about/bkpartners1.png";
import avatar from "../../../../public/assets/img/avatar/avatar-1.jpg";
import Count from "../../common/count";
import Link from "next/link";

const About = () => {
    const aboutData = {
        count: 32,
        exp: 'Years Experience Our Company',
        subtitle: 'About PEI',
        title: 'Pure Earth International is the leading distribution services.',
        description: 'Aliquam volutpat diam a orci euismod ornare. Suspendisse quis massa justo. Suspendisse tortor lacus, tincidunt ut ex a, pretium lobortis sapien. Vestibulum rutrum pharetra ex.',
        author_name: 'Nguyen, Shane',
        author_sub: 'Founder CEO',
        btn_title: 'Discover More',
        btn_link: '/about'
    }

    return (
        <div className="about__one dark__image section-padding" style={{ position: 'relative' }}>
            <style jsx>{`
                .about-container {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    gap: 50px;
                }
                .about-left, .about-right {
                    flex: 1 1 45%;
                }
                .about-left img {
                    width: 100%;
                    display: block;
                    border-radius: 10px;
                    margin-bottom: 15px;
                }
                .about-left-experience {
                    background: #fff;
                    padding: 20px;
                    border-radius: 10px;
                    text-align: center;
                    margin-top: 20px;
                }
                .about-left-experience h1 {
                    color: #F94C30;
                    font-size: 36px;
                    margin: 0;
                }
                .about-left-experience h6 {
                    margin: 5px 0 0;
                    font-weight: 500;
                    color: #333;
                }
                .about-right h2 {
                    color: #F94C30;
                    margin-bottom: 15px;
                }
                .about-right p {
                    line-height: 1.6;
                    margin-bottom: 20px;
                    color: #333;
                }
                .about-right-btn .btn-one {
                    background: #F94C30;
                    color: #fff;
                    padding: 10px 25px;
                    border-radius: 5px;
                    text-decoration: none;
                    font-weight: 500;
                }
                .about-shape {
                    position: absolute;
                    z-index: 0;
                }
                @media (max-width: 991px) {
                    .about-container {
                        flex-direction: column;
                    }
                    .about-left, .about-right {
                        flex: 1 1 100%;
                    }
                    .about-left-experience {
                        margin: 20px auto 0;
                    }
                }
            `}</style>

            <div className="container">
                <div className="about-container">
                    <div className="about-left">
                        <img src={image1.src} alt="About Image 1" />
                        <img src={image2.src} alt="About Image 2" />
                        <div className="about-left-experience">
                            <h1><Count number={aboutData.count} />+</h1>
                            <h6>{aboutData.exp}</h6>
                        </div>
                    </div>
                    <div className="about-right">
                        <span className="subtitle-one">{aboutData.subtitle}</span>
                        <h2>{aboutData.title}</h2>
                        <p>{aboutData.description}</p>
                        <div className="about-right-btn">
                            <Link href={aboutData.btn_link} className="btn-one">
                                {aboutData.btn_title} <i className="far fa-chevron-double-right"></i>
                            </Link>
                        </div>
                        <div className="about-author" style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                            <img src={avatar.src} alt="Author" style={{ width: '60px', borderRadius: '50%', marginRight: '15px' }} />
                            <div>
                                <span style={{ fontWeight: 500 }}>{aboutData.author_name}</span>
                                <h6 style={{ margin: 0 }}>{aboutData.author_sub}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <img className="about-shape" style={{ top: '-50px', left: '-50px' }} src={shape1.src} alt="Shape 1" />
            <img className="about-shape" style={{ top: '-50px', left: '-50px' }} src={shape2.src} alt="Shape 2" />
            <img className="about-shape" style={{ bottom: '-50px', right: '-50px' }} src={shape3.src} alt="Shape 3" />
            <img className="about-shape" style={{ bottom: '-50px', right: '-50px' }} src={shape4.src} alt="Shape 4" />
        </div>
    );
};

export default About;
