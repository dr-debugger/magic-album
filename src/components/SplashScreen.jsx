import { CircularProgress } from "@mui/material";
import React from "react";

const SplashScreen = ({ blur }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 50,
        height: "100%",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: blur ? "#14121278" : "white",
        }}
      >
        <CircularProgress />
      </div>
    </div>
  );
};

export default SplashScreen;
