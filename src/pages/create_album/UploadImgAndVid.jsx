import { Box, Grid, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import { AlphabeticID, uniqueId } from "../../utils/utilsFunc";

const UploadImgAndVid = () => {
  const [pairs, setPairs] = useState([
    {
      id: uniqueId(),
      img: null,
      vid: null,
    },
  ]);

  return (
    <Box>
      {pairs.length > 0 &&
        pairs.map((elem, i) => (
          <Fragment key={i}>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "24px",
                mb: 2,
              }}
            >
              Photo {i + 1}
            </Typography>
            <Box
              sx={{
                p: 2,
                backgroundColor: "#F5F5F5",
                borderRadius: "20px",
                mb: 2,
              }}
            >
              <Grid container spacing={1}>
                <Grid item xs={5.5}>
                  {elem.img === null && (
                    <Box
                      className="flex_center_display"
                      sx={{
                        position: "relative",
                      }}
                    >
                      <img
                        src="/images/img_upload.png"
                        alt="img"
                        style={{ width: "100%" }}
                      />
                      <input type="file" accept="image/*" class="file-input" />
                    </Box>
                  )}
                </Grid>
                <Grid item xs={1}>
                  <Box
                    className="flex_center_display"
                    sx={{
                      height: "100%",
                    }}
                  >
                    <AllInclusiveIcon />
                  </Box>
                </Grid>
                <Grid item xs={5.5}>
                  <Box
                    className="flex_center_display"
                    sx={{
                      position: "relative",
                    }}
                  >
                    <img
                      src="/images/vid_upload.png"
                      alt="img"
                      style={{ width: "100%" }}
                    />
                    <input type="file" accept="video/*" class="file-input" />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Fragment>
        ))}
    </Box>
  );
};

export default UploadImgAndVid;
