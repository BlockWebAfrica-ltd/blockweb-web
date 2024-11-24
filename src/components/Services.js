import React from 'react';
import '../assets/styles/components.css';
import stockExchange from '../assets/images/Stock.png';
import policy from '../assets/images/new_policy.png';
import market from '../assets/images/Market.png';
import kenya from '../assets/images/kenya.svg';
import tanzania from '../assets/images/tanzania.svg';
import uganda from '../assets/images/uganda.svg';
import rwanda from '../assets/images/rwanda.svg';
import burundi from '../assets/images/burundi.svg';
import haiti from '../assets/images/haiti.svg';
import { Helmet } from 'react-helmet';

const Services = () => {
    const cardData = [
        {
          title: "Setup Stock Exchanges",
          description: "The consultants at Blockweb Africa assist governments, through ministries of finance and central banks, in setting up new capital market ecosystems, including regulatory agencies, securities exchanges and related intermediaries.",
          image: stockExchange,
        },
        {
          title: "Advice on Policy Reforms",
          description: "Blockweb Africa provides capital market consultancy services to governments, agencies, and institutions in support of market development.",
          image: policy,
        },
        {
          title: "Market Strategy",
          description: "Blockweb Africa provides strategic planning and market positioning services to governments and capital market intermediaries. We develop plans for competitive capital market businesses.",
          image: market,
        },
    ];

    const countries = [
        { name: "Kenya", image: kenya },
        { name: "Tanzania", image: tanzania },
        { name: "Uganda", image: uganda },
        { name: "Rwanda", image: rwanda },
        { name: "Burundi", image: burundi },
        { name: "Haiti", image: haiti },
    ]

  return (
    <>
    {/* SEO */}
    <Helmet>
        {/* <title>Our Services - Blockweb Africa</title> */}
        <meta name="description" content="Explore the comprehensive services offered by Blockweb Africa, specializing in capital market regulations and blockchain technology solutions." />
        <meta property="og:title" content="Our Services - Blockweb Africa" />
        <meta property="og:description" content="Explore the comprehensive services offered by Blockweb Africa, specializing in capital market regulations and blockchain technology solutions." />
        <meta name="twitter:title" content="Our Services - Blockweb Africa" />
        <meta name="twitter:description" content="Explore the comprehensive services offered by Blockweb Africa, specializing in capital market regulations and blockchain technology solutions." />
        <link rel="canonical" href="https://www.blockwebafrica.com/#services" />
    </Helmet>

    <div className="services-section" id="services">
        {/* Title */}
        <div className='title-section'>
            <h2 className="services-semi-title font-regular" style={{ marginTop: '10px', marginBottom: '0', textAlign: 'center' }}>What we do</h2>
            <h1 className='services-title font-bold' style={{ marginTop: '5px', marginBottom: '10px', textAlign: 'center' }}>Our Services</h1>
        </div>

        {/* Cards Section */}
        <div className="cards-container">
            {cardData.map((item, index) => (
                <div className="grid-item" key={index}>
                    <img src={item.image} alt={item.title} className="item-image" />
                    <div className="item-info">
                        <h2 className="item-title font-semi-bold services-card-title">{item.title}</h2>
                        <p className="item-description font-regular services-card-description">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>

        {/* Countries Section */}
        <div className="regional-experience">
            <div className="experience-header font-bold">
                <h2 className='countries-title'>Regional Experience</h2>
            </div>
            <div className="countries-list">
                {countries.map((country, index) => (
                    <div className="country-item" key={index}>
                        <img src={country.image} alt={country.name} className="country-image" />
                        <p className="country-name font-bold">{country.name}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
    </>
  );
};

export default Services;