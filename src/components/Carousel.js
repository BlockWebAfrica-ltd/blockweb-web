import React, { useEffect, useState } from "react";
// import Robert from "../assets/images/Robert.png";
// import Michael from "../assets/images/Micheal.png";
// import Tom from "../assets/images/Tom.png";
import "./carousel.css";
import Person from "../assets/images/Person.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";

const teamMembers = [
  {
    id: 1,
    name: "Person 1",
    title: "Principle Consultant",
    image: Person,
  },
  {
    id: 2,
    name: "Person 2",
    title: "Technical Consultant",
    image: Person,
  },
  {
    id: 3,
    name: "Person 3",
    title: "Principle Consultant",
    image: Person,
  },
  {
    id: 4,
    name: "Person 4",
    title: "Technical Consultant",
    image: Person,
  },
  {
    id: 5,
    name: "Person 5",
    title: "Technical Consultant",
    image: Person,
  },
  {
    id: 6,
    name: "Person 6",
    title: "Technical Consultant",
    image: Person,
  },
  {
    id: 7,
    name: "Person 7",
    title: "Principle Consultant",
    image: Person,
  },
  {
    id: 8,
    name: "Person 8",
    title: "Technical Consultant",
    image: Person,
  },
  {
    id: 9,
    name: "Person 9",
    title: "Principle Consultant",
    image: Person,
  },
  {
    id: 10,
    name: "Person 10",
    title: "Principle Consultant",
    image: Person,
  },
];

const Carousel = () => {
  const membersArray = Object.values(teamMembers);
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

  // Get current visible images based on the current index and screen size
  const updateImages = () => {
    const visibleImages = [];

    for (let i = 0; i < numberOfImagesToShow; i++) {
      // Calculate index for the images (use modulo to create a circular effect)
      const index = (currentIndex + i) % membersArray.length;
      visibleImages.push(membersArray[index]);
    }

    return visibleImages.map((member, index) => {
      let sizeClass = "small"; // Default size
      if (index === Math.floor(numberOfImagesToShow / 2))
        sizeClass = "large"; // Center image
      else if (
        index === Math.floor(numberOfImagesToShow / 2) - 1 ||
        index === Math.floor(numberOfImagesToShow / 2) + 1
      )
        sizeClass = "medium"; // Adjacent images

      return (
        <div key={member.name} className="member">
          <img src={member.image} alt={member.name} className={sizeClass} />
          <p>{member.name}</p>
        </div>
      );
    });
  };

  const getMiddleTitle = () => {
    const middleIndex = Math.floor(numberOfImagesToShow / 2); // Middle index: 2 for 5 images, 1 for 3 images
    const middleMember = teamMembers[(currentIndex + middleIndex) % teamMembers.length];
    return middleMember.title || 'No Title Available';
};

  // Move left: Go one step back, wrapping around to the last images
  const moveLeft = () => {
    setCurrentIndex(
      (currentIndex - 1 + membersArray.length) % membersArray.length
    );
  };

  // Move right: Go one step forward, wrapping around to the first images
  const moveRight = () => {
    setCurrentIndex((currentIndex + 1) % membersArray.length);
  };

  return (
    <div className="team-members-section">
      <div className="carousel">
        <button className="carousel-button left" onClick={moveLeft}>
          &#10094;
        </button>
        <div className="image-container">{updateImages()}</div>
        <button className="carousel-button right" onClick={moveRight}>
          &#10095;
        </button>
      </div>
      <p className="middle-title">{getMiddleTitle()}</p>
    </div>
  );
};

export default Carousel;
