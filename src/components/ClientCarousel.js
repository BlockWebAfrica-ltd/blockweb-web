import React, { useEffect, useState } from "react";
import "./carousel.css";
import rse from "../assets/images/RSE.png";
import dse from "../assets/images/DSE.png";
import cmaKenya from "../assets/images/CapitalMarket.png";
import brh from "../assets/images/BRH.png";
import bancobou from "../assets/images/bancobu.jpg";
import ministryOfFinanceRwanda from "../assets/images/ministryOfFinanceRwanda.png";
import cmaRwanda from "../assets/images/cmaRwanda2.png";
import centralBankBurundi from "../assets/images/BankoftheRepublicofBurundi.png";

const ClientCarousel = () => {
  const clientList = [
    { name: "Rwanda Stock Exhange", image: rse },
    { name: "Dar-es-Salaam Stock Exchange", image: dse },
    { name: "CMA Kenya", image: cmaKenya },
    { name: "Bank of the Republic of Haiti", image: brh },
    { name: "Bancobu", image: bancobou },
    { name: "Ministry of Finance Rwanda", image: ministryOfFinanceRwanda },
    { name: "Capital Markets Authority Rwanda", image: cmaRwanda },
    { name: "Central Bank of Burundi", image: centralBankBurundi },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  // Update screen size detection on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Determine how many images to show based on the screen size
  const numberOfImagesToShow = isSmallScreen ? 3 : 5;

  // Get the visible client logos based on the current index
  const visibleClients = [];
  for (let i = 0; i < numberOfImagesToShow; i++) {
    const index = (currentIndex + i) % clientList.length;
    visibleClients.push(clientList[index]);
  }

  // Move left: Go one step back, wrapping around to the last images
  const moveLeft = () => {
    setCurrentIndex((currentIndex - 1 + clientList.length) % clientList.length);
  };

  // Move right: Go one step forward, wrapping around to the first images
  const moveRight = () => {
    setCurrentIndex((currentIndex + 1) % clientList.length);
  };

  return (
    <div className="client-carousel">
      <button className="client-carousel-button left" onClick={moveLeft}>
        &#10094;
      </button>

      <div className="client-image-container">
        {visibleClients.map((client, index) => {
          return (
            <div
              key={client.name}
              className={`client-image-wrapper ${
                index === Math.floor(numberOfImagesToShow / 2) ? "center" : ""
              }`}
            >
              <img
                src={client.image}
                alt={client.name}
                className="client-image"
              />
            </div>
          );
        })}
      </div>

      <button className="client-carousel-button right" onClick={moveRight}>
        &#10095;
      </button>
    </div>
  );
};

export default ClientCarousel;
