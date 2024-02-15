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
    let isLogin = false,
      user = null;

    try {
      const ACCESS_TOKEN = localStorage.getItem("token");
      if (ACCESS_TOKEN) {
        axiosInstance.defaults.headers.common.Authorization = `Bearer ${ACCESS_TOKEN}`;

        const response = await meAction();
        // console.log(response, "context");

        if (response?.status) {
          isLogin = true;
          user = response.data?.data || {};
        } else throw new Error();
      } else throw new Error();
    } catch (err) {
      delete axiosInstance.defaults.headers.common.Authorization;
      localStorage.removeItem("accessToken");
    }

    setState((prev) => ({
      ...prev,
      initialized: false,
      isAuthenticated: isLogin,
      user,
    }));
  };

  const onLoginSuccess = (token) => {
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
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
