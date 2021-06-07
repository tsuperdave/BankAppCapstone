// import React, {
//   useState,
//   useEffect,
//   useMemo,
//   useContext,
//   createContext,
// } from "react";
// import { history } from "./router";
// import PageLoader from "./components/PageLoader";


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

