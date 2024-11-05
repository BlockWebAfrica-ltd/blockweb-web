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
    { name: "Rwanda Stock Exchange", image: rse },
    { name: "Dar-es-Salaam Stock Exchange", image: dse },
    { name: "CMA Kenya", image: cmaKenya },
    { name: "Bank of the Republic of Haiti", image: brh },
    { name: "Bancobu", image: bancobou },
    { name: "Ministry of Finance Rwanda", image: ministryOfFinanceRwanda },
    { name: "Capital Markets Authority Rwanda", image: cmaRwanda },
    { name: "Central Bank of Burundi", image: centralBankBurundi },
  ];

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

  // Determine how many images to show based on screen size
  const numberOfImagesToShow = isSmallScreen ? 3 : 5;

  // Get the visible client logos
  const visibleClients = clientList.slice(0, numberOfImagesToShow);

  // Duplicate the clients array to create a seamless loop
  const duplicateClients = [...visibleClients, ...visibleClients, ...visibleClients];

  return (
    <div className="client-carousel">
      <div className="client-image-container">
        <div className="carousel-track">
          {duplicateClients.map((client, index) => (
            <div key={index} className="client-image-wrapper">
              <img src={client.image} alt={client.name} className="client-image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientCarousel;
