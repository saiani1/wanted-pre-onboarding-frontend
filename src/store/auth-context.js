/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = React.createContext({
  token: '',
  isLogin: false,
  login: () => {},
});

export const AuthContextProvider = props => {
  const navigate = useNavigate();
  const tokenData = localStorage.getItem('token');
  const [authToken, setAuthToken] = useState(tokenData);
  const userIsLogIn = !!authToken;

  const handleLogin = token => {
    const stringToken = JSON.parse(token);
    setAuthToken(token);
    localStorage.setItem('token', `bearer ${stringToken}`);
    navigate('/todo');
  };

  const contextValue = {
    token: authToken,
    isLogin: userIsLogIn,
    login: handleLogin,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
