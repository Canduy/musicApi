import * as request from "../utils/request";

const song = async (id) => {
  try {
    const respon = await request.get("playlist", {
      params: {
        id,
      },
    });
    return respon.data;
  } catch (error) {
    console.log(error);
  }
};

export { song };
