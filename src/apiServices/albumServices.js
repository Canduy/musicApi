import * as request from "../utils/request";

const album = async (id) => {
  try {
    const respon = await request.get("song", {
      params: {
        id,
      },
    });
    return respon.data;
  } catch (error) {
    console.log(error);
  }
};

export { album };
