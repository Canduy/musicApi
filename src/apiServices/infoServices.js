import * as request from "../utils/request";

const info = async (id) => {
  try {
    const respon = await request.get("info", {
      params: {
        id,
      },
    });
    return respon.data;
  } catch (error) {
    console.log(error);
  }
};

export { info };
