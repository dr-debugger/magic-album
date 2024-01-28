import React, { Fragment, useEffect, useState } from "react";
import { useAuth } from "../../hooks/contextHooks";
import SplashScreen from "../../components/SplashScreen";
import { useNavigate } from "react-router-dom";

const LoginSignupGuard = ({ children }) => {
  const { isAuthenticated, initialized, logOut } = useAuth();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const onRender = () => {
    try {
      if (isAuthenticated) {
        navigate("/album");
      } else throw new Error();
    } catch (err) {
      logOut();
    }

    setLoading(false);
  };

  useEffect(() => {
    if (!initialized) {
      onRender();
    }
  }, [initialized, isAuthenticated]);

  return !loading ? <Fragment>{children}</Fragment> : <SplashScreen />;
};

export default LoginSignupGuard;
