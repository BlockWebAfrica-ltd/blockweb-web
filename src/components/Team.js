import React from 'react';
import '../assets/styles/components.css';
import Carousel from './Carousel';
import ClientCarousel from './ClientCarousel';


const Team = () => {
  return (
    <div className="services-section">
        {/* Title */}
        <div className='title-section'>
            <h1 className='services-title font-bold' style={{ marginTop: '5px', marginBottom: '10px' }}>Meet the Team</h1>
        </div>
        {/* Team Carousel */}
        <div>
          <Carousel />
        </div>
        {/* Client Portfolio */}
        <div className='title-section'>
            <h1 className='services-title font-bold' style={{ marginTop: '5px', marginBottom: '10px' }}>Client Portfolio</h1>
        </div>
        {/* Client Carousel */}
        <div>
          <ClientCarousel />
        </div>
    </div>
  );
};

export default Team;