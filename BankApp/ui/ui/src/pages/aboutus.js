import React from "react";
import NavbarMain from "./../components/NavbarMain";
import TeamSection from "./../components/TeamSection";
import Footer from "./../components/Footer";

function AboutusPage(props) {
  return (
    <>
      <NavbarMain
        bg="light"
        variant="light"
        expand="md"
        logo="https://uploads.divjoy.com/logo.svg"
      />
      <TeamSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Meet the Team"
        subtitle=""
      />
      <Footer
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        description="A short description of what you do here"
        copyright="© 2020 Company"
        logo="https://uploads.divjoy.com/logo.svg"
      />
    </>
  );
}

export default AboutusPage;
