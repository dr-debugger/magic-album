import axios from "axios";
import { BASE_URL, token } from "../constants";

export const uploadImgVid = async (body) => {
  try {
    const res = await axios.post(`${BASE_URL}/album/upload`, body, {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.status === 200) {
      return Promise.resolve({
        status: true,
        data: res.data,
        mesaage: "Upload Successfully!",
      });
    }
    throw new Error();
  } catch (err) {
    console.log(err);
    return Promise.resolve({
      status: false,
      data: null,
      mesaage: "Failed to upload!",
    });
  }
};
export const createAlbumAction = async (body) => {
  try {
    const res = await axios.post(`${BASE_URL}/album/create`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.status === 200) {
      return Promise.resolve({
        status: true,
        data: res.data,
        mesaage: "Create Successfully!",
      });
    }

    throw new Error();
  } catch (err) {
    console.log(err);
    return Promise.resolve({
      status: false,
      data: null,
      mesaage: "Failed to create!",
    });
  }
};
