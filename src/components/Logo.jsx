import { Box } from "@mui/material";
import React from "react";

const Logo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 0.5,
      }}
    >
      <img src="/images/logo1.png" alt="img" />
      <img src="/images/gold.png" alt="img" />
    </Box>
  );
};

export default Logo;
