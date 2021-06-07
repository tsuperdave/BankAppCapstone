
import jwt_decode from "jwt-decode";
import PageLoader from './components/PageLoader';
import { history } from "./router";
import { createContext, useContext, useEffect, useState } from 'react';

// const authContext = createContext();

// export const useAuth = () => {
//     return useContext(authContext);
//   };

// export const requireAuth = (Component) => {

    
//     return (props) => {
//       // Get authenticated user
//       const auth = useAuth();
  
//       useEffect(() => {
//         // Redirect if not signed in
//         if (auth.user === false) {
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

// grabs us a token from JPA
export function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem('jwt');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    localStorage.setItem('jwt', JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token
  }
}

async function authUser(credentials) {
    console.log("FETCH")
    return fetch('http://localhost:8080/api/auth/signin', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}



 /// -------- Decode JWT for user role
 
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