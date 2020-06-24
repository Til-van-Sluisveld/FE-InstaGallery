import Axios from "axios";
import { apiUrl } from "../../config/constants";

export const storeSinglePhoto = (photo) => ({
  type: "STORE_PHOTO",
  payload: photo,
});

export const getSinglePhoto = (id) => async (dispatch, getState) => {
  try {
    const response = await Axios.get(`${apiUrl}/photos/${id}`);
    //console.log("Photo gotten from database:", response.data);
    dispatch(storeSinglePhoto(response.data));
  } catch (e) {
    console.log(e);
  }
};

export const importPhoto = (description, info, src, userId) => async (
  dispatch,
  getState
) => {
  //   console.log("importing", description, info, src, "from", userId);
  try {
    const response = await Axios.post(`${apiUrl}/photos/new`, {
      description,
      info,
      src,
      userId,
    });
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};
