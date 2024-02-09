import { Box, Divider, IconButton, Typography } from "@mui/material";
import React, { Fragment } from "react";

import WestIcon from "@mui/icons-material/West";
import { useNavigate } from "react-router-dom";

const HeaderWithBack = ({ title, link }) => {
  const navigate = useNavigate();

  const onBack = () => {
    navigate(link ? link : -1);
  };

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
        <IconButton onClick={onBack}>
          <WestIcon />
        </IconButton>
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: "550",
          }}
        >
          {title}
        </Typography>
        <div></div>
      </Box>
      <Divider />
    </Fragment>
  );
};

export default HeaderWithBack;
