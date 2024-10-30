import React from 'react';
import Robert from '../assets/images/Robert.png';
import Michael from '../assets/images/Micheal.png';
import Tom from '../assets/images/Tom.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import  SwiperCore from 'swiper';
import './carousel.css';
import Person from '../assets/images/Person.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';

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
    description: "Technical Consultant",
    image: Person,
  },
  {
    id: 3,
    name: "Robert Mathu",
    title: "Principle Consultant",
    image: Robert,
  },
  {
    id: 4,
    name: "Micheal Nyamute",
    description: "Technical Consultant",
    image: Michael,
  },
  {
    id: 5,
    name: "Tom Waruinge",
    description: "Technical Consultant",
    image: Tom,
  },
  {
    id: 6,
    name: "Person 3",
    description: "Technical Consultant",
    image: Person,
  },
];

const Carousel = () => {
  SwiperCore.use([Pagination]);
  return (
    <>
    <div className="slider-container">
      <Swiper
        slidesPerView={5} // Change this based on how many you want to show at once
        spaceBetween={30}
        pagination={{ clickable: true }}
        loop={true}
        className="swiper"
      >
        {teamMembers.map((person, index) => (
          <SwiperSlide key={index} style={{ backgroundImage: `url(${person.image})` }}>
            <div className={`slide-content ${person.id}`}>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </>
  );
};

export default Carousel;
