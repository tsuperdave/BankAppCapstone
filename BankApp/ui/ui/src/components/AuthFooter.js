import React from "react";
import { Link } from "./../router.js";
import "./AuthFooter.scss";

function AuthFooter(props) {
  return (
    <div className="AuthFooter text-center mt-4">
      {props.type === "register" && null}

      {props.type === "signin" && (
        <>
          <Link to="/auth/register">{props.typeValues.linkTextRegister}</Link>
          <Link to="/auth/forgotpass">
            {props.typeValues.linkTextForgotpass}
          </Link>
        </>
      )}
    </div>
  );
}

export default AuthFooter;
