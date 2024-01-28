import { CircularProgress } from "@mui/material";
import React from "react";

const SplashScreen = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <CircularProgress />
    </div>
  );
};

export default SplashScreen;
