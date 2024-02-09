import { Box, Divider, Typography } from "@mui/material";
import React, { Fragment } from "react";
import Logo from "../components/Logo";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <Fragment>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 1, md: 4 },
          py: 1,
        }}
      >
        <Logo />

        <Box
          sx={{
            py: 1,
            px: { xs: 1.5, md: 3 },
            display: "flex",
            alignItems: "center",
            gap: 1,
            border: "1px solid black",
            borderRadius: "20px",
          }}
        >
          <AutoAwesomeIcon />
          <Typography
            sx={{ fontWeight: "550", display: { xs: "none", md: "block" } }}
          >
            Magic Credits :
          </Typography>
          <AllInclusiveIcon />
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 5,
            }}
          >
            <Typography sx={{ color: "#898989" }}>How to use</Typography>
            <Typography sx={{ color: "#898989" }}>Help</Typography>
            <Typography sx={{ color: "#898989" }}>Admin</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          <MenuIcon />
        </Box>
      </Box>
      <Divider />
    </Fragment>
  );
};

export default Header;
