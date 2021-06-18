import React from 'react'
import NavbarMain from "../components/NavbarMain";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import bank_logo from '../resources/bank_logo.png';
import MA_logo from '../resources/MA_logo.png';
import bg_city from '../resources/bg_city.jpg';

export default function HomePage(props) {
    return (
      <>
        <NavbarMain
          bg="light"
          variant="light"
          expand="md"
          logo={bank_logo}
        />
        <HeroSection
          bg=""
          textColor="dark"
          size="md"
          bgImage={bg_city}
          bgImageOpacity={0.5}
          title="Your Home page title here"
          subtitle="Sub title test here"
          buttonText="Register Now!"
          buttonColor="primary"
        />
        <Footer
          bg="white"
          textColor="dark"
          size="md"
          bgImage=""
          bgImageOpacity={0.5}
          description="A short description of what you do here"
          copyright="© 2021 Company"
          logo={MA_logo}
        />
      </>
    );
}
