import React from 'react';
import '../assets/styles/components.css';
import Carousel from './Carousel';
import ClientCarousel from './ClientCarousel';


const Team = () => {
  return (
    <div className="services-section">
        {/* Title */}
        <div className='title-section' id="team">
            <h1 className='services-title font-bold' style={{ marginTop: '5px', marginBottom: '10px', textAlign: 'center' }}>Meet the Team</h1>
        </div>
        {/* Team Carousel */}
        <div>
          <Carousel />
        </div>
        {/* Client Portfolio */}
        <div className='title-section' id="about us">
            <h1 className='services-title font-bold' style={{ marginTop: '5px', marginBottom: '10px', textAlign: 'center' }}>Client Portfolio</h1>
        </div>
        {/* Client Carousel */}
        <div>
          <ClientCarousel />
        </div>
    </div>
  );
};

export default Team;