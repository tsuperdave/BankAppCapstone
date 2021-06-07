import React from "react";
import AuthSection from "./../../components/AuthSection";

function AuthSigninPage(props) {
  return (
    <AuthSection
      bg="white"
      textColor="dark"
      size="md"
      bgImage=""
      bgImageOpacity={1}
      type="signin"
      afterAuthPath="/home"
    />
  );
}

export default AuthSigninPage;
