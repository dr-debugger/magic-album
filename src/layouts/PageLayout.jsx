import { Box } from "@mui/material";
import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

const PageLayout = () => {
  return (
    <Fragment>
      <Header />
      <Box>
        <Outlet />
      </Box>
    </Fragment>
  );
};

const Header = () => {
  return <Box>Header</Box>;
};

export default PageLayout;
