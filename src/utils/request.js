import axios from "axios";

const request = axios.create({
  baseURL: "https://music-player-pink.vercel.app/api/",
});

export const get = async (path, options) => {
  const respon = await request.get(path, options);
  return respon.data;
};

export default request;
