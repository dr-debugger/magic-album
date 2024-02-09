import { Box } from "@mui/material";
import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <Fragment>
      <Box>
        <Outlet />
      </Box>
    </Fragment>
  );
};

export default PageLayout;
