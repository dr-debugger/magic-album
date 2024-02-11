import React from "react";
import HeaderWithBack from "../../components/HeaderWithBack";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CreateAlbum = () => {
  const navigate = useNavigate();

  const onUpload = () => {
    navigate(`/album/id`);
  };

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
            maxWidth: "900px",
            p: 1,
            width: "100%",
            position: "relative",
          }}
        >
          <Box
            sx={{
              mb: 3,
              mt: 2,
              position: "relative",
            }}
          >
            <Box className="flex_center_display">
              <img
                src="/images/see_vid.png"
                alt="img"
                className="create_album_img"
                style={{
                  maxHeight: "400px",
                }}
              />
            </Box>
            <img
              alt="img"
              src="/images/play_vid.png"
              className="play_vid_img"
            />
          </Box>

          <Box>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "24px",
                mb: 2,
              }}
            >
              Album Name
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              sx={{
                "& .MuiInputBase-root": {
                  borderRadius: "20px",
                  mb: 2,
                },
              }}
              placeholder="Name"
              size="small"
            />
          </Box>

          <Paper
            elevation={2}
            sx={{
              py: 1,
              px: 4,
              zIndex: 9999,
              width: {
                xs: "100%",
                md: "auto",
              },
              position: "fixed",
              bottom: {
                xs: "0%",
                md: "3%",
              },
              right: {
                xs: "0%",
                md: "40%",
              },
              borderRadius: {
                xs: "0px",
                md: "33px",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 4,
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "20px",
                    textWrap: "nowrap",
                  }}
                >
                  5 photos
                </Typography>
                <Typography
                  sx={{
                    color: "#00980F",
                    fontSize: "14px",
                    textWrap: "nowrap",
                  }}
                >
                  Pairs Complete
                </Typography>
              </Box>
              <Button
                sx={{
                  borderRadius: "20px",
                  py: "8px",
                  fontWeight: "bold",
                  mb: 2,
                  my: "auto",
                  minWidth: "150px",
                }}
                color="primary"
                variant="contained"
                fullWidth
                onClick={onUpload}
              >
                Upload
              </Button>
            </Box>
          </Paper>
        </Box>
      </Box>
    </div>
  );
};

export default CreateAlbum;
