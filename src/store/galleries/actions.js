import Axios from "axios";
import { apiUrl } from "../../config/constants";
import { selectGalleries } from "./selectors";

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
    //sort by date so newest pictures appear first in gallery
    response.data.forEach((gallery) => {
      gallery.photos.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
    });
    dispatch(storeGalleries(response.data));
  } catch (e) {
    console.log(e);
  }
};

export const getSingleGallery = (name) => async (dispatch, getState) => {
  const state = selectGalleries(getState());
  if (state.length) {
    const galleryFound = state.find((gallery) => gallery.name === name);
    dispatch(storeSingleGallery(galleryFound));
  } else {
    try {
      const response = await Axios.get(`${apiUrl}/galleries/${name}`);
      console.log("data", response.data);
      response.data.photos.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      dispatch(storeSingleGallery(response.data));
    } catch (e) {
      console.log(e);
    }
  }
};
