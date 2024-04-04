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
        message: "Uploaded Successfully!",
      });
    }
    throw new Error();
  } catch (err) {
    console.log(err);
    return Promise.resolve({
      status: false,
      data: null,
      message: err?.response?.data?.message || "Failed to upload!",
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
        message: "Created Successfully!",
      });
    }

    throw new Error();
  } catch (err) {
    console.log(err);
    return Promise.resolve({
      status: false,
      data: null,
      message: err?.response?.data?.message || "Failed to create!",
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
        message: "list fetched successfully!",
      });
    }
    throw new Error();
  } catch (err) {
    console.log(err);
    return Promise.resolve({
      status: false,
      data: null,
      message: err?.response?.data?.message || "Failed to fetch list!",
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
        message: "qr successfully fetched!",
      });
    }
    throw new Error();
  } catch (err) {
    console.log(err);

    delete axiosInstance.defaults.headers.Authorization;
    return Promise.resolve({
      status: false,
      data: null,
      message: err?.response?.data?.message || "QR Failed to fetch!",
    });
  }
};

export const getAlbumDetailsAction = async (id) => {
  try {
    const res = await axiosInstance.get(`/album/${id}`);

    if (res.status === 200) {
      return Promise.resolve({
        status: true,
        data: res.data,
        message: "Album details successfully fetched!",
      });
    }
    throw new Error();
  } catch (err) {
    console.log(err);

    delete axiosInstance.defaults.headers.Authorization;
    return Promise.resolve({
      status: false,
      data: null,
      message: err?.response?.data?.message || "Album details Failed to fetch!",
    });
  }
};
export const deleteAlbumById = async (id) => {
  try {
    const res = await axiosInstance.delete(`/album/${id}`);

    if (res.status === 200) {
      return Promise.resolve({
        status: true,
        data: res.data,
        message: "Album deleted successfully!",
      });
    }
    throw new Error();
  } catch (err) {
    console.log(err);

    delete axiosInstance.defaults.headers.Authorization;
    return Promise.resolve({
      status: false,
      data: null,
      message: err?.response?.data?.message || "Failed to delete!",
    });
  }
};
