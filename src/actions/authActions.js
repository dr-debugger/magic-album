import axiosInstance from ".";

export const meAction = async () => {
  try {
    const res = await axiosInstance.get(`/auth/profile`);

    if (res.status === 200) {
      return Promise.resolve({
        status: true,
        data: res.data,
        message: "user successfully fetchd!",
      });
    }
    throw new Error();
  } catch (err) {
    console.log(err);

    delete axiosInstance.defaults.headers.Authorization;
    return Promise.resolve({
      status: false,
      data: null,
      message: "Failed to fetch!",
    });
  }
};
export const loginAction = async (body) => {
  try {
    const res = await axiosInstance.post(`/auth/login`, body);

    if (res.status === 200) {
      return Promise.resolve({
        status: true,
        data: res.data,
        message: "login Successfully!",
      });
    }
    throw new Error();
  } catch (err) {
    console.log(err);
    return Promise.resolve({
      status: false,
      data: null,
      message: "Failed to login!",
    });
  }
};
