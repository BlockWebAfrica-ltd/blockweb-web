import React from 'react';
import '../assets/styles/components.css';
import Carousel from './Carousel';
import ClientCarousel from './ClientCarousel';
import { Helmet } from 'react-helmet';

const Team = () => {
  return (
    <>
    {/* SEO */}
    <Helmet>
      {/* <title>Our Teams - Blockweb Africa</title> */}
      <meta name="description" content="Meet the talented and experienced team behind Blockweb Africa, driving innovation in capital market regulations and blockchain technology." />
      <meta property="og:title" content="Our Teams - Blockweb Africa" />
      <meta property="og:description" content="Meet the talented and experienced team behind Blockweb Africa, driving innovation in capital market regulations and blockchain technology." />
      <meta name="twitter:title" content="Our Teams - Blockweb Africa" />
      <meta name="twitter:description" content="Meet the talented and experienced team behind Blockweb Africa, driving innovation in capital market regulations and blockchain technology." />
      <link rel="canonical" href="https://www.blockwebafrica.com/#teams" />
    </Helmet>
    
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
    </>
  );
};

export default Team;