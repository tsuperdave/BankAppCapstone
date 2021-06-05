import { useState } from 'react';
import jwt_decode from "jwt-decode";

export default function useToken() {
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

  
  const decodeRole = () => {
    const tokenString = localStorage.getItem('jwt');
    const userRole = JSON.parse(tokenString);
    const decode = jwt_decode(tokenString)
    return decode['sub'];
  }

  decodeRole();
  
  const saveRole = () => {
    localStorage.setItem('role', JSON.stringify(decodeRole()))
  }

  saveRole();

  return {
    setToken: saveToken,
    token
  }
}