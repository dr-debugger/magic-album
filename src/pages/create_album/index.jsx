import React from "react";
import HeaderWithBack from "../../components/HeaderWithBack";
import { Box } from "@mui/material";

const CreateAlbum = () => {
  return (
    <div>
      <HeaderWithBack title="Create New Album" />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: "1200px",
            p: 1,
          }}
        ></Box>
      </Box>
    </div>
  );
};

export default CreateAlbum;
