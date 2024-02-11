import { Box, Grid, Typography } from "@mui/material";
import React, { Fragment } from "react";

const AlbumItems = () => {
  return (
    <Fragment>
      <Grid container spacing={2}>
        <Grid
          item
          md={4}
          className="flex_center_display"
          sx={{ width: "100%" }}
        >
          <Box
            sx={{
              position: "relative",
            }}
          >
            <img src="/images/dhoni.png" alt="img" />
            <Typography
              variant="h4"
              sx={{
                fontSize: "26px",
              }}
            >
              Dhoni Wedding
            </Typography>
            <Box
              sx={{
                position: "absolute",
                top: "5%",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  px: 4,
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                  }}
                >
                  MA07
                </Typography>
                <Box
                  sx={{
                    py: 0.5,
                    px: 1.5,
                    bgcolor: "white",
                    borderRadius: "15px",
                  }}
                >
                  <Typography>5 photos</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          md={4}
          className="flex_center_display"
          sx={{ width: "100%" }}
        >
          <Box
            sx={{
              position: "relative",
            }}
          >
            <img src="/images/kohli.png" alt="img" />
            <Typography
              variant="h4"
              sx={{
                fontSize: "26px",
              }}
            >
              Kohli Wedding
            </Typography>
            <Box
              sx={{
                position: "absolute",
                top: "5%",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  px: 4,
                }}
              >
                <Typography
                  sx={{
                    color: "white",
                  }}
                >
                  MA07
                </Typography>
                <Box
                  sx={{
                    py: 0.5,
                    px: 1.5,
                    bgcolor: "white",
                    borderRadius: "15px",
                  }}
                >
                  <Typography>3 photos</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default AlbumItems;
