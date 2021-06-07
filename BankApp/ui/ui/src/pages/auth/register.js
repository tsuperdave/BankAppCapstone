import React from "react";
import AuthSection2 from "./../../components/AuthSection2";

function AuthRegisterPage(props) {
  return (
    <AuthSection2
      bg="light"
      textColor="light"
      size="md"
      bgImage=""
      bgImageOpacity={0.8}
      type="register"
      afterAuthPath="/preferences"
    />
  );
}

export default AuthRegisterPage;
