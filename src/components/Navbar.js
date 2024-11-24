import React, { useEffect, useState } from 'react';
import InfoBanner from './InfoBanner';
import logo from '../assets/images/BlockWebLogo.png';
import { Link } from 'react-scroll';

const Navbar = () => {

    const [isBannerVisible, setIsBannerVisible] = useState(true);
    const [active, setActive] = useState('Home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = ['Home', 'Services', 'Team', 'About Us', 'Contact Us']

    const handleResize = () => {
        setIsBannerVisible(window.innerWidth >= 900); // Adjust threshold as needed
    };

    const handleClick = (section) => {
        setActive(section);
        setIsMenuOpen(false);
        setActive('Home');
    }

    // const handleHamburger

    useEffect(() => {
        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='navbar-container'>
            {/* Info Banner */}
            {isBannerVisible && <InfoBanner />}
            {/* Main Navbar */}
            <nav className='navbar'>
                {/* Logo Section */}
                <div className="logo-section">
                    <img src={logo} alt="Logo" className="logo" />
                    <span className="logo-name font-bold">BLOCKWEB AFRICA</span>
                </div>
                {/* Navbar Items */}
                {isBannerVisible ? (
                    // Desktop navbar menu
                    <div className="nav-items font-semi-bold">
                        {navItems.map((item) => (
                        <Link
                            key={item}
                            to={item === 'Home' ? 'home' : item.toLowerCase()}  // Link target
                            smooth={true} // Enable smooth scroll
                            duration={500} // Duration for scroll in ms
                            offset={-50}  // Offset to adjust scroll position (for fixed navbar)
                            className={`nav-item ${active === item ? 'active' : ''}`}
                            onClick={() => handleClick(item)}
                        >
                            {item}
                        </Link>
                        ))}
                    </div>
                 ): (
                    // Mobile navbar menu
                    <div className="hamburger-container">
                        <button
                          className="hamburger" 
                          onClick={() => {
                            setIsMenuOpen(!isMenuOpen)
                            setActive('Home');
                          }}
                        >
                            {isMenuOpen ? '✖' : '☰'}
                        </button>
                        {/* Hamburger Menu */}
                        {isMenuOpen && (
                            <div className="hamburger-menu font-medium">
                                {navItems.map((item) => (
                                    <Link
                                        key={item}
                                        to={item === 'Home' ? 'home' : item.toLowerCase()}  // Link target
                                        smooth={true} // Enable smooth scroll
                                        duration={500} // Duration for scroll in ms
                                        offset={-50}  // Offset to adjust scroll position (for fixed navbar)
                                        className={`hamburger-menu-item ${active === item ? 'active' : ''}`}
                                        onClick={() => handleClick(item)}
                                    >
                                        {item}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                 )}
            </nav>
        </div>
    );
};

export default Navbar;