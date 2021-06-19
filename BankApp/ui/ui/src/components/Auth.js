import React, { useState } from "react";
import FormAlert from "./FormAlert";
import SigninForm from "./SigninForm";
// import AuthFooter from "./AuthFooter";
import { useRouter } from "./../router.js";

function Auth(props) {
  const router = useRouter();

  const handleAuth = (user) => {
    router.push(props.afterAuthPath);
  };

  return (
      <>
      <SigninForm
        
        onAuth={handleAuth}
        
      />
          
       </> 
      )
    
  
}

export default Auth;
