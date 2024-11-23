import React from 'react';
import BannerSection from '../components/BannerSection';
import Services from '../components/Services';
import Team from '../components/Team';
import Form from '../components/Form';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const ComponentName = () => {
  return (
    <div>
      <BannerSection />
      <Services />
      <Team />
      <Form />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ComponentName;