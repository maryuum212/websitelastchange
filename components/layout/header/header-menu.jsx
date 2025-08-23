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
                        <li className="menu-item-has-children">
                            <Link href="#" className="menu-link">Services</Link>
                            <ul className="sub-menu">
                                <li><Link href="/services" className="menu-link">Services 01</Link></li>
                                <li><Link href="/services-two" className="menu-link">Services 02</Link></li>
                                <li><Link href="/services/business-model" className="menu-link">Services Details</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/pricing-plans" className="menu-link">Price Plans</Link></li>
                        <li><Link href="/faq" className="menu-link">FAQ's</Link></li>
                        <li><Link href="/testimonial" className="menu-link">Testimonials</Link></li>
                        <li className="menu-item-has-children">
                            <Link href="#" className="menu-link">Teams</Link>
                            <ul className="sub-menu">
                                <li><Link href="/team-filter" className="menu-link">Team Filter</Link></li>
                                <li><Link href="/team" className="menu-link">Team 01</Link></li>
                                <li><Link href="/team-two" className="menu-link">Team 02</Link></li>
                                <li><Link href="/team-three" className="menu-link">Team 03</Link></li>
                                <li><Link href="/team/grace-elizabeth" className="menu-link">Team Details</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/request-quote" className="menu-link">Request Quote</Link></li>
                        <li><Link href="/404-error" className="menu-link">404 Page</Link></li>
                    </ul>
                </li>

                <li className="menu-item-has-children">
                    <Link href="#" className="menu-link">Project</Link>
                    <ul className="sub-menu">
                        <li><Link href="/portfolio-filter" className="menu-link">Project Filter</Link></li>
                        <li className="menu-item-has-children">
                            <Link href="#" className="menu-link">Project Grid</Link>
                            <ul className="sub-menu">
                                <li><Link href="/portfolio/2-columns" className="menu-link">2 Columns</Link></li>
                                <li><Link href="/portfolio/3-columns" className="menu-link">3 Columns</Link></li>
                                <li><Link href="/portfolio/4-columns" className="menu-link">4 Columns</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/portfolio/business-analytics" className="menu-link">Project Details</Link></li>
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




