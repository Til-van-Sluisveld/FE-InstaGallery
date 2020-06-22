import Axios from "axios";
import { apiUrl } from "../../config/constants";

export const storeGalleries = (galleries) => ({
  type: "STORE_GALLERIES",
  payload: galleries,
});

export const storeSingleGallery = (gallery) => ({
  type: "STORE_SINGLE_GALLERY",
  payload: gallery,
});

export const getGalleries = () => async (dispatch, getState) => {
  try {
    const response = await Axios.get(`${apiUrl}/galleries`);
    dispatch(storeGalleries(response.data));
  } catch (e) {
    console.log(e);
  }
};

export const getSingleGallery = (name) => async (dispatch, getState) => {
  try {
    const response = await Axios.get(`${apiUrl}/galleries/${name}`);
    //console.log("response is:", response.data);
    dispatch(storeSingleGallery(response.data));
  } catch (e) {
    console.log(e);
  }
};
