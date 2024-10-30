import React, { useEffect, useState } from 'react';
import InfoBanner from './InfoBanner';
import logo from '../assets/images/BlockWebLogo.png';

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
                        <div
                            key={item}
                            className={`nav-item ${active === item ? 'active' : ''}`}
                            onClick={() => handleClick(item)}
                        >
                            {item}
                        </div>
                        ))}
                    </div>
                 ): (
                    // Mobile navbar menu
                    <div className="hamburger-container">
                        <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? '✖' : '☰'}
                        </button>
                        {/* Hamburger Menu */}
                        {isMenuOpen && (
                            <div className="hamburger-menu font-medium">
                                {navItems.map((item) => (
                                    <div
                                        key={item}
                                        className={`hamburger-menu-item ${active === item ? 'active' : ''}`}
                                        onClick={() => handleClick(item)}
                                    >
                                        {item}
                                    </div>
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