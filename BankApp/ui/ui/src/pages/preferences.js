import React from "react";
import NavbarMain from "./../components/NavbarMain";
import FeaturesSection from "./../components/FeaturesSection";
import Footer from "./../components/Footer";

function PreferencesPage(props) {
  return (
    <>
      <NavbarMain
        bg="light"
        variant="light"
        expand="md"
        logo="https://uploads.divjoy.com/logo.svg"
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
        logo="https://uploads.divjoy.com/logo.svg"
      />
    </>
  );
}

export default PreferencesPage;
