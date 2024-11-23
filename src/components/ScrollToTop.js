import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';  // Using react-scroll for smooth scrolling
// import './'

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when user scrolls down
    const toggleVisibility = () => {
        if (window.scrollY > 100) { 
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Add event listener on scroll
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div>
            {isVisible && (
                <Link
                    to="home" 
                    smooth={true} 
                    duration={500}  
                    offset={-50}  
                    className="scroll-to-top"
                >
                    {/* <span style={{ transform: 'rotate(90deg)' }}>&#10094;</span> */}
                    <button style={{ transform: 'rotate(90deg)', background: 'none', border: 'none', marginLeft: '2px' }}>&#10094;</button>
                </Link>
            )}
        </div>
    );
};

export default ScrollToTop;