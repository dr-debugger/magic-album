import React, { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import axiosInstance from "../actions";
import { meAction } from "../actions/authActions";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [state, setState] = useState({
    isAuthenticated: false,
    initialized: true,
    user: null,
  });

  const getDataOnLoad = async () => {
    const token = localStorage.getItem("token");
    axiosInstance.defaults.headers.Authorization = `Bearer ${token}`;

    const res = await meAction();
    if (res.status) {
      // console.log(res);
      setState((prev) => ({
        ...prev,
        initialized: false,
        isAuthenticated: true,
        user: res.data?.data || {},
      }));
    } else {
      localStorage.removeItem("token");
      delete axiosInstance.defaults.headers.Authorization;
      setState((prev) => ({
        ...prev,
        initialized: false,
        isAuthenticated: false,
        user: null,
      }));
    }
  };

  const onLoginSuccess = () => {
    getDataOnLoad();
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
