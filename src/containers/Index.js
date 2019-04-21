import React, { Component } from 'react';
import UpcomingEvent from '../components/UpcomingEvent/UpcomingEvent';
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import OurPartners from '../components/OurPartners/OurPartners';
import ImageBanner from '../components/ImageBanner/ImageBanner';
import Footer from '../components/Footer/Footer';

class Index extends Component {
  render() {
    return (
      <div>
        <Header />
        <UpcomingEvent />
        <Banner />
        <OurPartners />
        <ImageBanner />
        <Footer />
      </div>
    )
  }
}

export default Index;
