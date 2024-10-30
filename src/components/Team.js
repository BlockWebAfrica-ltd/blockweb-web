import React from 'react';
import '../assets/styles/components.css';
import Robert from '../assets/images/Robert.png';
import Michael from '../assets/images/Micheal.png';
import Tom from '../assets/images/Tom.png';
import Carousel from './Carousel';

const Team = () => {
  const clientList = [
    { name: "Rwanda Stock Exhange", image: Tom },
    { name: "Dar-es-Salaam Stock Exchange", image: Tom },
    { name: "CMA Kenya", image: Tom },
    { name: "Bank of the Republic of Haiti", image: Tom },
    { name: "Bancobu", image: Tom },
    { name: "Ministry of Finance Rwanda", image: Tom },
    { name: "Capital Markets Authority Rwanda", image: Tom },
    { name: "Central Bank of Burundi ", image: Tom },
    { name: "Capital Markets Authority Burundi", image: Tom },
  ]

  return (
    <div className="services-section">
        {/* Title */}
        <div className='title-section'>
            <h1 className='services-title font-bold' style={{ marginTop: '5px', marginBottom: '10px' }}>Meet the Team</h1>
        </div>
        {/* Team Courasel */}
        <div>
          <Carousel />
        </div>
        {/* Client Portfolio */}
        <div className='title-section'>
            <h1 className='services-title font-bold' style={{ marginTop: '5px', marginBottom: '10px' }}>Client Portfolio</h1>
        </div>
    </div>
  );
};

export default Team;