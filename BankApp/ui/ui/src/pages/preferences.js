import React from "react";
import NavbarMain from "./../components/NavbarMain";
import FeaturesSection from "./../components/FeaturesSection";
import Footer from "./../components/Footer";
import bank_logo from '../resources/imgs/bank_logo.png';
import MA_logo from '../resources/imgs/MA_logo.png';
import { requireAuth } from "../auth";

function PreferencesPage(props) {
  return (
    <>
      <NavbarMain
        bg="light"
        variant="light"
        expand="md"
        logo={bank_logo}
      />
      <FeaturesSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Your Account"
        subtitle="Preferences"
      />
      <Footer
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        description="A short description of what you do here"
        copyright="© 2021 Company"
        logo={MA_logo}
      />
    </>
  );
}

export default requireAuth(PreferencesPage);
