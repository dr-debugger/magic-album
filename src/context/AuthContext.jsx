import React, { createContext, useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [initialized, setInitialized] = useState(true);

  const navigate = useNavigate();

  const getDataOnLoad = async () => {
    setInitialized(false);
  };

  const logOut = () => {};

  useEffect(() => {
    getDataOnLoad();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        initialized,
        logOut,
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
