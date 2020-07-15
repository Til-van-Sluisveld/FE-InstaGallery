import Axios from "axios";
import { apiUrl } from "../../config/constants";
import { selectToken } from "../user/selectors";

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

export const importPhotos = (toImport) => async (dispatch, getState) => {
  const token = selectToken(getState());
  if (token === null) return;

  try {
    const response = await Axios.post(
      `${apiUrl}/photos/new`,
      {
        toImport,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};
