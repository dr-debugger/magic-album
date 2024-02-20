import { Box, Grid, Typography } from "@mui/material";
import React, { Fragment } from "react";

const AlbumItems = ({ data }) => {
  console.log(data);
  return (
    <Fragment>
      <Grid container spacing={2}>
        {data &&
          data.length > 0 &&
          data.map((elem, i) => (
            <Fragment key={i}>
              {elem.images && elem.images?.length > 0 && (
                <Grid
                  item
                  md={4}
                  className="flex_center_display"
                  sx={{ width: "100%" }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                    }}
                  >
                    <img src={elem.images[0]} alt="img" />
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "26px",
                      }}
                    >
                      {elem.name}
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
                        <Box>
                          {/* <Typography
                          sx={{
                            color: "white",
                          }}
                        >
                          MA07
                        </Typography> */}
                        </Box>
                        <Box
                          sx={{
                            py: 0.5,
                            px: 1.5,
                            bgcolor: "white",
                            borderRadius: "15px",
                          }}
                        >
                          <Typography>{elem.images.length} photos</Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              )}
            </Fragment>
          ))}
      </Grid>
    </Fragment>
  );
};

export default AlbumItems;
