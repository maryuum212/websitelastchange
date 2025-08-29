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
                    <Link href="#" className="menu-link">Reseeleres</Link>
                    <ul className="sub-menu">
                        <li><Link href="/blog" className="menu-link">Reselleres page</Link></li>

                    </ul>
                </li>

                <li className="menu-item-has-children">
                    <Link href="#" className="menu-link">Promotiones</Link>

                </li>
                <li className="menu-item-has-children">
                    <Link href="#" className="menu-link">Solutiones</Link>
                </li>
                <li className="menu-item-has-children">
                    <Link href="#" className="menu-link">contact us </Link>
                </li>

            </ul>
            {
            }
        </div>
    );
};

export default MainMenu;




