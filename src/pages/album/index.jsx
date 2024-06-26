import React, { useEffect, useState } from "react";
import Header from "../../layouts/Header";
import {
  Box,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import AlbumItems from "./AlbumItems";
import { getAlbumListAction } from "../../actions/album_actions";
import { toast } from "react-toastify";

const Album = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const getAlbums = async () => {
    const res = await getAlbumListAction();
    // console.log(res, "albumlist");
    if (res.status) {
      setData(res.data?.data || []);
    } else toast.error(res.message);
  };

  useEffect(() => {
    getAlbums();
  }, []);
  return (
    <div>
      <Header />
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
        >
          <Box
            sx={{
              cursor: "pointer",
              mb: 3,
              mt: 2,
            }}
            className="flex_center_display"
            onClick={() => {
              navigate("/create-album");
            }}
          >
            <img
              src="/images/create_album.png"
              alt="img"
              className="create_album_img"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2,
              flexDirection: { xs: "column", md: "row" },
              mb: 3,
            }}
          >
            <Typography
              sx={{
                fontSize: "28px",
                fontWeight: "bold",
              }}
            >
              All Albums
            </Typography>
            <FormControl
              variant="standard"
              sx={{
                "& .MuiInputBase-root": {
                  borderRadius: "20px",
                },
              }}
            >
              <OutlinedInput
                size="small"
                id="input-with-icon-adornment"
                placeholder="Search"
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
          </Box>

          <AlbumItems data={data} />
        </Box>
      </Box>
    </div>
  );
};

export default Album;
