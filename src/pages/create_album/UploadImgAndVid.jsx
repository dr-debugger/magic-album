import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import {
  isImage,
  isVideo,
  convertBlobToBase64,
  uniqueId,
} from "../../utils/utilsFunc";
import SplashScreen from "../../components/SplashScreen";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";

// const PREFIX = "MAGIC_ALBUM_";

const UploadImgAndVid = ({ setPairs, pairs }) => {
  const onFileChange = (e, type, id) => {
    const file = e.target.files[0];
    // console.log(file);

    if (file) {
      const dummyArr = [...pairs];
      const index = dummyArr.findIndex((elem) => elem.id === id);

      if (index >= 0) {
        const dummyItem = dummyArr[index];
        let img = dummyItem.img,
          vid = dummyItem.vid;
        if (type === "IMG" && isImage(file.type)) {
          img = file;
        }
        if (type === "VID" && isVideo(file.type)) {
          vid = file;
        }

        dummyArr.splice(index, 1, {
          ...dummyItem,
          img,
          vid,
        });

        setPairs(dummyArr);
      }
    }
  };

  const onCancelItem = (id, type) => {
    const dummyArr = [...pairs];
    const index = dummyArr.findIndex((elem) => elem.id === id);

    if (index >= 0) {
      const dummyItem = dummyArr[index];
      dummyArr.splice(index, 1, {
        ...dummyItem,
        img: type === "IMG" ? null : dummyItem.img,
        vid: type === "VID" ? null : dummyItem.vid,
      });

      setPairs(dummyArr);
    }
  };
  const onAddDelete = (type, id) => {
    if (type === "ADD") {
      const item = {
        id: uniqueId(),
        img: null,
        vid: null,
      };
      setPairs((prev) => [...prev, { ...item }]);
    }
    if (type === "REM") {
      const index = pairs.findIndex((elem) => elem.id === id);

      if (index > -1) {
        const dummyArr = [...pairs];
        dummyArr.splice(index, 1);
        setPairs(dummyArr);
      }
    }
  };

  return (
    <Box>
      <Button
        variant="outlined"
        startIcon={<AddOutlinedIcon />}
        onClick={() => onAddDelete("ADD")}
        sx={{
          my: 2,
        }}
        disabled={pairs.length >= 5}
      >
        Add pairs
      </Button>
      {pairs.length > 0 &&
        pairs.map((elem, i) => (
          <Fragment key={i}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "24px",
                  mb: 2,
                }}
              >
                Photo {i + 1}
              </Typography>
              <IconButton
                onClick={() => onAddDelete("REM", elem.id)}
                disabled={pairs.length === 1}
              >
                <RemoveOutlinedIcon />
              </IconButton>
            </Box>
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
                      <input
                        type="file"
                        accept="image/*"
                        className="file-input"
                        onChange={(e) => onFileChange(e, "IMG", elem.id)}
                      />
                    </Box>
                  )}
                  {elem.img !== null && (
                    <DisplayImgAndVid
                      blob={elem.img}
                      type="IMG"
                      id={elem.id}
                      onCancelItem={onCancelItem}
                    />
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
                  {elem.vid === null && (
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
                      <input
                        type="file"
                        accept="video/*"
                        className="file-input"
                        onChange={(e) => onFileChange(e, "VID", elem.id)}
                      />
                    </Box>
                  )}
                  {elem.vid !== null && (
                    <DisplayImgAndVid
                      blob={elem.vid}
                      type="VID"
                      id={elem.id}
                      onCancelItem={onCancelItem}
                    />
                  )}
                </Grid>
              </Grid>
            </Box>
          </Fragment>
        ))}
    </Box>
  );
};

const DisplayImgAndVid = ({ blob, type, id, onCancelItem }) => {
  const [loading, setLoading] = useState(false);

  const [fileData, setFileData] = useState("");

  const doOperationOnFile = async () => {
    setLoading(true);
    const promise_data = convertBlobToBase64(blob);
    const res = await promise_data;
    if (res.status) {
      setFileData(res.value);
    }
    setLoading(false);
  };

  useEffect(() => {
    doOperationOnFile();
  }, []);

  return (
    <Fragment>
      {type === "IMG" && (
        <Box
          className="flex_center_display"
          sx={{
            position: "relative",
            height: "100%",
          }}
        >
          {loading && <SplashScreen />}

          {!loading && fileData !== "" && (
            <Fragment>
              <img src={fileData} alt="img" className="img_vid" />
              <img
                src="/images/cross.png"
                alt="img"
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  cursor: "pointer",
                }}
                onClick={() => onCancelItem(id, type)}
              />
            </Fragment>
          )}
        </Box>
      )}
      {type === "VID" && (
        <Box
          className="flex_center_display"
          sx={{
            position: "relative",
            height: "100%",
          }}
        >
          {loading && <SplashScreen />}

          {!loading && fileData !== "" && (
            <Fragment>
              <video src={fileData} autoPlay muted className="img_vid" />
              <img
                src="/images/cross.png"
                alt="img"
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  cursor: "pointer",
                }}
                onClick={() => onCancelItem(id, type)}
              />
            </Fragment>
          )}
        </Box>
      )}
    </Fragment>
  );
};

export default UploadImgAndVid;
