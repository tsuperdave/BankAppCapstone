import React, {
  useState,
  useEffect,
  useMemo,
  useContext,
  createContext,
} from "react";
import { history } from "./router";
import PageLoader from "./components/PageLoader";
import { Redirect } from "react-router";

const authContext = createContext();

// Context Provider component that wraps your app and makes auth object
// available to any child component that calls the useAuth() hook.
export function AuthProvider({ children }) {
  const auth = useAuthProvider();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook that enables any component to subscribe to auth state
export const useAuth = () => {
  return useContext(authContext);
};

// Provider hook that creates auth object and handles state
function useAuthProvider() {
  // Store token object
  const [token, setToken] = useState(null);
  const [usernameOrEmail, setUsernameOrEmail] = useState(null);
  const [password, setPassword] = useState(null);

  // Handle response from authentication functions
  const handleAuth = async (user) => {
    // Update user in state
    await signin(usernameOrEmail, password)

    // setUser(user)
    return user;
  }

  const useToken = () => {
    const getToken = () => {
      const tokenString = localStorage.getItem("jwt");
      const userToken = JSON.parse(tokenString);
      return userToken?.token;
    };

    const [token, setToken] = useState(getToken());

    const saveToken = (userToken) => {
      localStorage.setItem("jwt", JSON.stringify(userToken));
      setToken(userToken.token);
    };
  };

  // register user as user
  async function signup(credentials) {
    console.log("SIGN UP");
    return fetch("http://localhost:8080/api/auth/registerUser", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((data) => data.json());
  }

  // fetch token
  const signin = (usernameOrEmail, password ) => {
    console.log("SIGN IN");
    return fetch("http://localhost:8080/api/auth/signin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ usernameOrEmail, password }),
    }).then((data) => data.json())
    // .then((res) => handleAuth(res.user));
  }

  const signout = () => {
    // <Redirect exact path="/home">
    return localStorage.clear();
  };
}
  // A Higher Order Component for requiring authentication
  export const requireAuth = (Component) => {
    return (props) => {
      // Get authenticated user
      const auth = useAuth();

      useEffect(() => {
        // Redirect if not signed in
        if (auth.token === null) {
          history.replace("/auth/signin");
        }
      }, [auth]);

      // Show loading indicator
      // We're either loading (user is null) or we're about to redirect (user is false)
      if (!auth.user) {
        return <PageLoader />;
      }

      // Render component now that we have user
      return <Component {...props} />;
    };
  };

