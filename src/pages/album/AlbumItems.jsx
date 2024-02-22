import { Box, Grid, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const AlbumItems = ({ data }) => {
  const navigate = useNavigate();
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
                  sx={{
                    width: "100%",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate(`/album/${elem.id}`)}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                    }}
                  >
                    <img
                      src={elem.images[0]}
                      alt="img"
                      className="album_list_Img"
                    />

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
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: "26px",
                    }}
                  >
                    {elem.name}
                  </Typography>
                </Grid>
              )}
            </Fragment>
          ))}
      </Grid>
    </Fragment>
  );
};

export default AlbumItems;
