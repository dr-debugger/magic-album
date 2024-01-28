import React, { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [state, setState] = useState({
    isAuthenticated: false,
    initialized: true,
    user: null,
  });

  const getDataOnLoad = async () => {
    setState((prev) => ({
      ...prev,
      initialized: false,
    }));
  };

  const onLoginSuccess = () => {
    setState((prev) => ({
      ...prev,
      initialized: false,
      isAuthenticated: true,
    }));
  };

  const logOut = () => {};

  useEffect(() => {
    getDataOnLoad();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        logOut,
        onLoginSuccess,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const AuthLayout = () => {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
};
