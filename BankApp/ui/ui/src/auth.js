import React, { useState } from 'react';
import { useHistory } from 'react-router';

export const useAuth = () => {

  const [usernameOrEmail, setUsername] = useState('');
  const [password, setPassword] = useState(''); 

  const history = useHistory();

  const goBack = () => {
    history.goBack()
  }

  const token = signin({
    usernameOrEmail,
    password
  })
  goBack();
  // setToken(token);

  const getToken = () => {
    const tokenString = localStorage.getItem("jwt");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };

  const saveToken = (userToken) => {
    localStorage.setItem("jwt", JSON.stringify(userToken));
    // setToken(userToken.token);
  };

  async function signin(credentials) {
    // console.log("SIGN IN");
    return fetch("http://localhost:8080/api/auth/signin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ usernameOrEmail, password }),
    }).then(res => res.json())
    .then(data => {
      saveToken(data); 
      history.goBack()
      }) 
        
  }

}

// import React, {
//   useState,
//   useEffect,
//   useMemo,
//   useContext,
//   createContext,
// } from "react";
// import { history } from "./router";
// import PageLoader from "./components/PageLoader";

// const decodeRole = () => {
  //   const tokenString = localStorage.getItem('jwt');
  //   const userRole = JSON.parse(tokenString);
  //   const decode = jwt_decode(tokenString)
  //   return decode['sub'];
  // }

  // decodeRole();
  
  // const saveRole = () => {
  //   localStorage.setItem('role', JSON.stringify(decodeRole()))
  // }

  // saveRole();
  
//   // A Higher Order Component for requiring authentication
//   export const requireAuth = (Component) => {
//     return (props) => {
//       // Get authenticated user
//       const auth = useAuth();

//       useEffect(() => {
//         // Redirect if not signed in
//         if (auth.token === null) {
//           history.replace("/auth/signin");
//         }
//       }, [auth]);

//       // Show loading indicator
//       // We're either loading (user is null) or we're about to redirect (user is false)
//       if (!auth.user) {
//         return <PageLoader />;
//       }

//       // Render component now that we have user
//       return <Component {...props} />;
//     };
//   };

