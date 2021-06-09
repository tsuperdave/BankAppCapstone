// import React, { createContext, useState } from 'react';

// export const AuthorizationContext = createContext();

// export const AuthorizationProvider = (props) => {
//   const [auth, setAuth] = useState({
//     jwt: '',
//     role: '',
//     isLoggedIn: false
//   })

//   return (
//     <AuthorizationContext.Provider value={[auth, setAuth]}>
//       {props.children}
//     </AuthorizationContext.Provider>
//   )
// }