import React, { useState } from "react";
import FormAlert from "./FormAlert";
import SigninForm from "./SigninForm";
import AuthFooter from "./AuthFooter";
import { useRouter } from "./../router.js";

function Auth(props) {
  const router = useRouter();
  const [formAlert, setFormAlert] = useState(null);

  const handleAuth = (user) => {
    router.push(props.afterAuthPath);
  };

  const handleFormAlert = (data) => {
    setFormAlert(data);
  };

  return (
    <>
      {formAlert && (
        <FormAlert type={formAlert.type} message={formAlert.message} />
      )}

      <SigninForm
        type={props.type}
        typeValues={props.typeValues}
        onAuth={handleAuth}
        onFormAlert={handleFormAlert}
      />
          <AuthFooter type={props.type} typeValues={props.typeValues} />
       </> 
      )
    
  
}

export default Auth;
