import React, { useEffect, useState } from "react";
import HeaderWithBack from "../../components/HeaderWithBack";
import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useParams } from "react-router-dom";
import { getQRAction } from "../../actions/album_actions";
import { toast } from "react-toastify";

const AlbumInfo = () => {
  const params = useParams();
  const [qrData, setQrData] = useState("");

  const getQr = async () => {
    const res = await getQRAction(params.id);

    if (res.status) {
      setQrData(res.data.data.data);
    } else toast.error(res.message);
  };

  useEffect(() => {
    if (params?.id) {
      getQr();
    }
  }, [params]);

  return (
    <div>
      <HeaderWithBack title="Album Information" link="/album" />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: "700px",
            width: "100%",
            p: 1,
            position: "relative",
          }}
        >
          <Box>
            <Grid container spacing={2}>
              <Grid item md={5} sx={{ width: "100%" }}>
                <Box
                  sx={{
                    bgcolor: "#F5F5F5",
                    borderRadius: "10px",
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    Album QR Code
                  </Typography>
                  {qrData !== "" && (
                    <img src={`data:image/png;base64,${qrData}`} alt="img" />
                  )}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <img
                      src="/images/down_qr.png"
                      alt="img"
                      className="qr_img"
                    />
                    <img
                      src="/images/share_qr.png"
                      alt="img"
                      className="qr_img"
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid item md={7} sx={{ width: "100%" }}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "20px",
                    mb: 1,
                  }}
                >
                  Album Name
                </Typography>
                <TextField
                  disabled
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
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "20px",
                    mb: 1,
                  }}
                >
                  No of Photos (Pairs)
                </Typography>
                <TextField
                  disabled
                  variant="outlined"
                  fullWidth
                  sx={{
                    "& .MuiInputBase-root": {
                      borderRadius: "20px",
                      mb: 2,
                    },
                  }}
                  placeholder="No of Photos (Pairs)"
                  size="small"
                />
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "20px",
                    mb: 1,
                  }}
                >
                  Album Code
                </Typography>
                <TextField
                  disabled
                  variant="outlined"
                  fullWidth
                  sx={{
                    "& .MuiInputBase-root": {
                      borderRadius: "20px",
                      mb: 2,
                    },
                  }}
                  placeholder="Album Code"
                  size="small"
                />
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "24px",
                mb: 4,
              }}
            >
              Album Preview
            </Typography>
            <Grid
              container
              spacing={2}
              sx={{
                bgcolor: "#F5F5F5",
                borderRadius: "10px",
                pb: 2,
              }}
            >
              {Array(4)
                .fill(0)
                .map((e, i) => (
                  <Grid
                    key={i}
                    item
                    md={6}
                    className="flex_center_display"
                    sx={{ width: "100%" }}
                  >
                    <img src="/images/kohli.png" alt="img" />
                  </Grid>
                ))}
            </Grid>
          </Box>
          <Paper
            elevation={2}
            sx={{
              py: 1,
              px: 2,
              zIndex: 9999,
              width: {
                xs: "100%",
                md: "auto",
              },
              position: "fixed",
              bottom: "0%",
              right: {
                xs: "0%",
                md: "40%",
              },
              borderRadius: {
                xs: "0px",
                md: "10px",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Button
                startIcon={<DeleteIcon />}
                sx={{
                  borderRadius: "20px",
                  py: "8px",
                  fontWeight: "bold",
                  mb: 2,
                  my: "auto",
                  minWidth: "150px",
                  color: "red",
                  border: "1px solid red",
                }}
                variant="outlined"
                fullWidth
                // onClick={onUpload}
              >
                Delete
              </Button>
            </Box>
          </Paper>
        </Box>
      </Box>
    </div>
  );
};

export default AlbumInfo;
