




























"use client";
import Link from 'next/link';
import { useState } from 'react';

import MainMenu from './header-menu';
import Search from './search';
import MobileMenuThree from './menu_sidebar/menu-three';

const HeaderThree = () => {
    const [menuSidebar, setMenuSidebar] = useState(false);
    const [search, setSearch] = useState(false);

    return (
        <>
            <div className="header__three">
                <div className="topbar__three">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-5 col-lg-6">
                                <div className="topbar__three-left lg-t-center">
                                    <a href="#"><i className="fas fa-bell icon-animation"></i>We help take your small business to the next level.</a>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-6">
                                <div className="topbar__three-right t-right lg-t-center">
                                    <ul>
                                        <li><a href="tel:(+107)555-0133"><i className="fas fa-phone-alt"></i>(+107) 555-0133</a></li>
                                        <li><a href="mailto:conbix@gmail.com"><i className="fas fa-envelope"></i>conbix@gmail.com</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="header__area header__sticky">
                    <div className="container">
                        <div className="header__area-menubar three">
                            <div className="header__area-menubar-left">
                                <div className="header__area-menubar-left-logo">
                                    <Link href='/'>
                                        <img className='dark-n' src="/assets/img/mylogo.png" alt='logo' />
                                        <img className="light-n" src="/assets/img/mylogo.png" alt="logo" />
                                    </Link>
                                </div>
                            </div>
                            <div className="header__area-menubar-center">
                                <div className="header__area-menubar-center-menu three menu-responsive">
                                    <MainMenu />
                                </div>
                            </div>
                            <div className="header__area-menubar-right">
                                <div className="header__area-menubar-right-box">
                                    <div className="header__area-menubar-right-box-search">
                                        <div className="search">
                                            <span className="header__area-menubar-right-box-search-icon open" onClick={() => setSearch(true)}>
                                                <i className="fal fa-search"></i>
                                            </span>
                                        </div>
                                        <Search isOpen={search} setIsOpen={setSearch} />
                                    </div>
                                    <div className="header__area-menubar-right-box-btn">
                                        <Link className="btn-seven" href="/request-quote">Get Started<i className="far fa-chevron-double-right"></i></Link>
                                    </div>
                                    <div className="header__area-menubar-right-responsive-menu menu__bar">
                                        <i className="flaticon-menu" onClick={() => setMenuSidebar(true)}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MobileMenuThree isOpen={menuSidebar} setIsOpen={setMenuSidebar} />
        </>
    );
};

export default HeaderThree;






















// "use client";
// import Link from 'next/link';
// import { useState } from 'react';

// // FontAwesome icons
// import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

// import MainMenu from './header-menu';
// import Search from './search';
// import MobileMenuThree from './menu_sidebar/menu-three';

// const HeaderThree = () => {
//     const [menuSidebar, setMenuSidebar] = useState(false);
//     const [search, setSearch] = useState(false);

//     return (
//         <>
//             <div className="header__three">
//                 {/* Top Bar */}
//                 <div className="topbar__three">
//                     <div className="container">
//                         <div className="row">
//                             <div className="col-xl-5 col-lg-6">
//                                 <div className="topbar__three-left lg-t-center">
//                                     <a href="#"><i className="fas fa-bell icon-animation"></i>We help take your small business to the next level.</a>
//                                 </div>
//                             </div>
//                             <div className="col-xl-7 col-lg-6">
//                                 <div className="topbar__three-right t-right lg-t-center">
//                                     <ul>
//                                         <li><a href="tel:(+107)555-0133"><i className="fas fa-phone-alt"></i>(+107) 555-0133</a></li>
//                                         <li><a href="mailto:conbix@gmail.com"><i className="fas fa-envelope"></i>conbix@gmail.com</a></li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Main Header */}
//                 <div className="header__area header__sticky">
//                     <div className="container">
//                         <div className="header__area-menubar three">
//                             {/* Logo */}
//                             <div className="header__area-menubar-left">
//                                 <div className="header__area-menubar-left-logo">
//                                     <Link href='/'>
//                                         <img className='dark-n' src="/assets/img/mylogo.png" alt='logo' />
//                                         <img className="light-n" src="/assets/img/mylogo.png" alt="logo" />
//                                     </Link>
//                                 </div>
//                             </div>

//                             {/* Menu */}
//                             <div className="header__area-menubar-center">
//                                 <div className="header__area-menubar-center-menu three menu-responsive">
//                                     <MainMenu />
//                                 </div>
//                             </div>

//                             {/* Right Box */}
//                             <div className="header__area-menubar-right">
//                                 <div className="header__area-menubar-right-box">
//                                     {/* Search */}
//                                     <div className="header__area-menubar-right-box-search">
//                                         <div className="search">
//                                             <span className="header__area-menubar-right-box-search-icon open" onClick={() => setSearch(true)}>
//                                                 <i className="fal fa-search"></i>
//                                             </span>
//                                         </div>
//                                         <Search isOpen={search} setIsOpen={setSearch} />
//                                     </div>

//                                     {/* Social Icons */}
//                                     <div className="header__area-menubar-right-box-social menu-social">
//                                         <Link href="https://facebook.com" target="_blank" aria-label="Facebook"><FaFacebookF /></Link>
//                                         <Link href="https://twitter.com" target="_blank" aria-label="Twitter"><FaTwitter /></Link>
//                                         <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn"><FaLinkedinIn /></Link>
//                                     </div>

//                                     {/* Mobile Menu Icon */}
//                                     <div className="header__area-menubar-right-responsive-menu menu__bar">
//                                         <i className="flaticon-menu" onClick={() => setMenuSidebar(true)}></i>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Mobile Menu */}
//             <MobileMenuThree isOpen={menuSidebar} setIsOpen={setMenuSidebar} />
//         </>
//     );
// };

// export default HeaderThree;
