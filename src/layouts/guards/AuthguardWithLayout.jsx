import React, { Fragment, useEffect, useState } from "react";
import { useAuth } from "../../hooks/contextHooks";
import SplashScreen from "../../components/SplashScreen";
import PageLayout from "../PageLayout";
import { useNavigate } from "react-router-dom";

const AuthguardWithLayout = () => {
  const { isAuthenticated, initialized } = useAuth();
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const onFirstRender = () => {
    try {
      if (isAuthenticated) {
        setLoading(false);
        return;
      }
      throw new Error();
    } catch (err) {
      navigate("/", { replace: true });
    }
  };

  useEffect(() => {
    if (!initialized) {
      onFirstRender();
    }
  }, [initialized, isAuthenticated]);

  return !loading && isAuthenticated ? (
    <Fragment>
      <PageLayout />
    </Fragment>
  ) : (
    <SplashScreen />
  );
};

export default AuthguardWithLayout;
