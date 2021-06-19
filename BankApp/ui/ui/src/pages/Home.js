import React from 'react'
import NavbarMain from "../components/NavbarMain";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import bank_logo from '../resources/imgs/bank_logo.png';
import MA_logo from '../resources/imgs/MA_logo.png';

export default function HomePage(props) {
    return (
      <>
        <NavbarMain
          bg="white"
          variant="light"
          expand="md"
          logo={bank_logo}
        />
        <HeroSection
          bg="white"
          textColor="dark"
          size="md"
          bgImage={MA_logo}
          bgImageOpacity={0.5}
          title="Welcome to Merit Bank!"
          subtitle="Want an account? Sign up now!"
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
