import axiosInstance from ".";

export const uploadImgVid = async (body) => {
  try {
    const res = await axiosInstance.post(`/album/upload`, body, {
      headers: {
        "content-type": "multipart/form-data",
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
    const res = await axiosInstance.post(`/album/create`, body);

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

export const getAlbumListAction = async () => {
  try {
    const res = await axiosInstance.get(`/album/list`);

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

export const getQRAction = async (id) => {
  try {
    const res = await axiosInstance.get(`/album/qr/${id}`);

    if (res.status === 200) {
      return Promise.resolve({
        status: true,
        data: res.data,
        mesaage: "qr successfully fetchd!",
      });
    }
    throw new Error();
  } catch (err) {
    console.log(err);

    delete axiosInstance.defaults.headers.Authorization;
    return Promise.resolve({
      status: false,
      data: null,
      mesaage: "QR Failed to fetch!",
    });
  }
};
