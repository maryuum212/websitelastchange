import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';
import slider1 from "../../../../public/assets/img/banner/slide-bg-dlnk-business.png";
import slider2 from "../../../../public/assets/img/banner/pei-dlink-puer-earth-event-slider.png";
import ModalVideo from "react-modal-video";
import Link from "next/link";

const slideControl = {
    loop: true,
    slidesPerView: 1,
    effect: "fade",
    autoplay: {
        delay: 6000,
        reverseDirection: false,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".banner_pagination",
        clickable: true,
    },
};

const BannerOne = () => {
    const [openVideo, setOpenVideo] = useState(false);
    const openVideoModal = () => {
        setOpenVideo(true);
    };
    return (
        <>
            <div className="banner__one">
                <Swiper modules={[EffectFade, Autoplay, Pagination]} {...slideControl} >
                    <SwiperSlide>
                        <div className="banner__one-image" style={{ backgroundImage: `url(${slider2.src})` }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="banner__one-content">
                                            <span>Welcome to PEI</span>
                                            <h1>For information technology</h1>
                                            <div className="banner__one-content-button">
                                                <div className="banner__one-content-button-item">
                                                    <Link className="btn-one" href="/about">Become a Reseller Today<i className="far fa-chevron-double-right"></i></Link>
                                                </div>
                                                <div className="banner__one-content-video-icon">
                                                    <span onClick={openVideoModal}><i className="fas fa-play"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="banner__one-image" style={{ backgroundImage: `url(${slider1.src})` }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="banner__one-content">
                                            <span>Welcome to PEI</span>
                                            <h1>Data center power & telecoms producte</h1>
                                            <div className="banner__one-content-button">
                                                <div className="banner__one-content-button-item">
                                                    <Link className="btn-one" href="/about">Become a Reseller Today<i className="far fa-chevron-double-right"></i></Link>
                                                </div>
                                                <div className="banner__one-content-video-icon">
                                                    <span onClick={openVideoModal}><i className="fas fa-play"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="banner__one-pagination">
                    <div className="container">
                        <div className="area">
                            <div className="banner_pagination"></div>
                        </div>
                    </div>
                </div>
            </div>
            <ModalVideo className='video-modal' channel="youtube" autoplay isOpen={openVideo} videoId="SZEflIVnhH8" onClose={() => setOpenVideo(false)} />
        </>

    );
};

export default BannerOne;