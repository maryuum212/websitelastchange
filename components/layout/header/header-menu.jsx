import Link from 'next/link';
import React from 'react';
import { FaHome } from 'react-icons/fa';

const MainMenu = () => {
    return (
        <div className="main-menu">
            <ul>
                <li className="menu-item-has-children">
                    <Link href="/" className="menu-link-icon">
                        <FaHome />
                    </Link>
                </li>
                <li className="menu-item-has-children">
                    <Link href="#" className="menu-link">ABOUT US</Link>
                    <ul className="sub-menu">
                        <li><Link href="/about-us" className="menu-link">About Us</Link></li>
                      </ul>
                </li>

                <li className="menu-item-has-children">
                    <Link href="#" className="menu-link">Vendors</Link>
                    <ul className="sub-menu">
                       
                        <li><Link href="/portfolio/business-analytics" className="menu-link">VendorePage</Link></li>
                    </ul>
                </li>

                <li className="menu-item-has-children">
                    <Link href="#" className="menu-link">Blog</Link>
                    <ul className="sub-menu">
                        <li><Link href="/blog" className="menu-link">Blog Grid</Link></li>
                        <li><Link href="/blog-standard" className="menu-link">Blog Standard</Link></li>
                        <li><Link href="/blog/revamp-your-business-with-expert-consulting" className="menu-link">Blog Details</Link></li>
                    </ul>
                </li>

                <li className="menu-item-has-children">
                    <Link href="#" className="menu-link">Contact</Link>
                    <ul className="sub-menu">
                        <li><Link href="/contact" className="menu-link">Contact Style 01</Link></li>
                        <li><Link href="/contact-two" className="menu-link">Contact Style 02</Link></li>
                        <li><Link href="/contact-three" className="menu-link">Contact Style 03</Link></li>
                        <li><Link href="/contact-four" className="menu-link">Contact Style 04</Link></li>
                    </ul>
                </li>
            </ul>
            {
            }
        </div>
    );
};

export default MainMenu;




