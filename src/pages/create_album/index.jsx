import React, { Fragment, useState } from "react";
import HeaderWithBack from "../../components/HeaderWithBack";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import UploadImgAndVid from "./UploadImgAndVid";
import { createAlbumAction, uploadImgVid } from "../../actions/album_actions";
import { uniqueId } from "../../utils/utilsFunc";
import { toast } from "react-toastify";

const CreateAlbum = () => {
  const navigate = useNavigate();

  const [albumId, setAlbId] = useState(null);
  const [albName, setAlbName] = useState("");
  const [pairs, setPairs] = useState([
    {
      id: uniqueId(),
      img: null,
      vid: null,
    },
    {
      id: uniqueId(),
      img: null,
      vid: null,
    },
  ]);

  const validate = () => {
    return (
      pairs.length > 1 &&
      pairs.every((item) => item.img !== null && item.vid !== null) &&
      albumId
    );
  };

  const onUploadImgVid = async () => {
    if (validate()) {
      const formData = new FormData();

      for (let i = 0; i < pairs.length; i++) {
        const item = pairs[i];
        if (item.img) {
          formData.append("images", item.img);
        }
        if (item.vid) {
          formData.append("videos", item.vid);
        }
      }

      formData.append("albumId", albumId);
      // console.log(formData, "formdata");
      const response = await uploadImgVid(formData);
      if (response.status) {
        navigate(`/album/${albumId}`);
      }
    } else toast.error("Validate first");
  };

  const onCreate = async () => {
    if (albName.trim() === "") {
      toast.error("Enter valid name");
      return;
    }
    const response = await createAlbumAction({
      name: albName,
    });
    if (response.status) {
      setAlbId(response.data?.data?.id);
    } else toast.error(response.mesaage);
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
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                mb: 2,
              }}
            >
              <TextField
                variant="outlined"
                fullWidth
                sx={{
                  "& .MuiInputBase-root": {
                    borderRadius: "20px",
                  },
                }}
                placeholder="Name"
                size="small"
                value={albName}
                onChange={(e) => setAlbName(e.target.value)}
              />
              <Button variant="outlined" onClick={onCreate}>
                Create
              </Button>
            </Box>
          </Box>

          {albumId && (
            <Fragment>
              <UploadImgAndVid pairs={pairs} setPairs={setPairs} />

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
                    onClick={onUploadImgVid}
                  >
                    Upload
                  </Button>
                </Box>
              </Paper>
            </Fragment>
          )}
        </Box>
      </Box>
    </div>
  );
};

export default CreateAlbum;
