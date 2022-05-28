import * as request from "../utils/request";

const home = async () => {
  const respon = await request.get("top100");
  return respon.data;
};

export { home };
