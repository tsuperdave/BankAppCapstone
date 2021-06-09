import React, { createContext, useEffect, useState } from 'react';
import { history } from './router';
// import PageLoader from './components/PageLoader';

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

export const useAuth = () => {
    return AuthorizationContext
};

export const requireAuth = (Component) => {
    return (props) => {
      // Get authenticated user
      const auth = useAuth();
  
      useEffect(() => {
        // Redirect if not signed in
        if (auth.jwt === null) {
            
          history.replace("/auth/signin");
        }
      }, [auth]);
  
      // Show loading indicator
      // We're either loading (user is null) or we're about to redirect (user is false)
      if (!auth.user) {
        console.log("Auth.jwt is :" + auth.jwt)
        // return <PageLoader />;
      }
  
      // Render component now that we have user
      return <Component {...props} />;
    };
  };