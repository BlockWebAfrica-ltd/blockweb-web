import React from "react";
import '../assets/styles/components.css';
import Navbar from "./Navbar";
import arrow from "../assets/images/arrow-long-right.svg";

const BannerSection = () => {
  return (
    <>
      <div className="banner-section" id="home">
        {/* You can add other components here */}
        <Navbar />
        <div className="home-content">
          <h1 className="home-title font-semi-bold">Welcome to Blockweb Africa</h1>
          <p className="home-description font-regular">
            We are a group of experienced consultants who have developed and worked
            as capital market regulators, alongside engagements with stock exchanges, 
            investment banks, central banks, and ministries of finance.
          </p>
          <div className="explore-button">
            <button
              className="font-semi-bold explore-text"
              style={{ 
                borderStyle: 'none',
                background: 'none',
                fontSize: '16px',
                color: 'white'
              }}>
                Explore
              </button>
            <img className="arrow-icon" src={arrow} alt="arrowIcon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerSection;
