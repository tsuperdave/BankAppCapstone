import React, { createContext, useContext, useEffect, useState } from 'react';
import { history } from './router';
import PageLoader from './components/PageLoader';

export const AuthorizationContext = createContext();

export const AuthorizationProvider = (props) => {
  const [auth, setAuth] = useState({
    jwt: '',
    role: '',
    isLoggedIn: false
  })

  return (
    <AuthorizationContext.Provider value={[auth, setAuth]}>
      {props.children}
    </AuthorizationContext.Provider>
  )
}

// export const useAuth = () => {
//     return AuthorizationContext
// };

export const requireAuth = (Component) => {
    return (props) => {
      // Get authenticated user
      const [auth, setAuth] = useContext(AuthorizationContext);

    //   console.log('auth: ' + auth)
    //   console.log('auth.jwt: ' + auth.jwt)
    //   console.log('auth.role: ' + auth.role)
    //   console.log('auth.isLoggedIn: ' + auth.isLoggedIn)
  
      useEffect(() => {
        // Redirect if not signed in
        if (auth.isLoggedIn === false) {
          history.replace("/home");
        }
      }, [auth]);
  
      // Show loading indicator
      // We're either loading (user is null) or we're about to redirect (user is false)
      if (!auth.isLoggedIn) {
          console.log("Post auth: " + auth.jwt)
        return <PageLoader />;
      }
  
      // Render component now that we have user
      return <Component {...props} />;
    };
  };