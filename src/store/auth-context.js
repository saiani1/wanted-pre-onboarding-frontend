/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';

const AuthContext = React.createContext({
  token: '',
  isLogin: false,
  login: () => {},
});

export const AuthContextProvider = props => {
  const tokenData = localStorage.getItem('token');

  const [authToken, setAuthToken] = useState(tokenData);

  const userIsLogIn = !!authToken;

  const handleLogin = token => {
    setAuthToken(token);
    localStorage.setItem('token', token);
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
