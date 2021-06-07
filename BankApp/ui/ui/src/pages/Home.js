import React from 'react'
import NavbarMain from "../components/NavbarMain";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

export default function HomePage(props) {
    return (
      <>
        <NavbarMain
          bg="light"
          variant="light"
          expand="md"
          logo=""
        />
        <HeroSection
          bg="white"
          textColor="dark"
          size="md"
          bgImage=""
          bgImageOpacity={1}
          title="Your Home page title here"
          subtitle="Sub title test here"
          buttonText="Get Started"
          buttonColor="primary"
          buttonPath="/register"
        />
        <Footer
          bg="white"
          textColor="dark"
          size="md"
          bgImage=""
          bgImageOpacity={1}
          description="A short description of what you do here"
          copyright="© 2021 Company"
          logo=""
        />
      </>
    );
}
