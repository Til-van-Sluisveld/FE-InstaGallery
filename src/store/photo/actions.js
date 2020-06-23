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
