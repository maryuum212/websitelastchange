


















"use client";
import Link from 'next/link';
import { useState } from 'react';

// FontAwesome icons
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

import MainMenu from './header-menu';
import Search from './search';
import MobileMenuThree from './menu_sidebar/menu-three';

const HeaderThree = () => {
    const [menuSidebar, setMenuSidebar] = useState(false);
    const [search, setSearch] = useState(false);

    return (
        <>
            <div className="header__three">
            
                {/* Main Header */}
                <div className="header__area header__sticky">
                    <div className="container">
                        <div className="header__area-menubar three">
                            {/* Logo */}
                            <div className="header__area-menubar-left">
                                <div className="header__area-menubar-left-logo">
                                    <Link href='/'>
                                        <img className='dark-n' src="/assets/img/mylogo.png" alt='logo' />
                                        <img className="light-n" src="/assets/img/mylogo.png" alt="logo" />
                                    </Link>
                                </div>
                            </div>

                            {/* Menu */}
                            <div className="header__area-menubar-center">
                                <div className="header__area-menubar-center-menu three menu-responsive">
                                    <MainMenu />
                                </div>
                            </div>

                            {/* Right Box */}
                            <div className="header__area-menubar-right">
                                <div className="header__area-menubar-right-box">
                                    {/* Search */}
                                    <div className="header__area-menubar-right-box-search">
                                        <div className="search">
                                            <span className="header__area-menubar-right-box-search-icon open" onClick={() => setSearch(true)}>
                                                <i className="fal fa-search"></i>
                                            </span>
                                        </div>
                                        <Search isOpen={search} setIsOpen={setSearch} />
                                    </div>

                                    {/* Social Icons */}
                                    <div className="header__area-menubar-right-box-social menu-social">
                                        <Link href="https://facebook.com" target="_blank" aria-label="Facebook"><FaFacebookF /></Link>
                                        <Link href="https://twitter.com" target="_blank" aria-label="Twitter"><FaTwitter /></Link>
                                        <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn"><FaLinkedinIn /></Link>
                                    </div>

                                    {/* Mobile Menu Icon */}
                                    <div className="header__area-menubar-right-responsive-menu menu__bar">
                                        <i className="flaticon-menu" onClick={() => setMenuSidebar(true)}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <MobileMenuThree isOpen={menuSidebar} setIsOpen={setMenuSidebar} />
        </>
    );
};

export default HeaderThree;
