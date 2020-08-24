import Axios from "axios";
import { apiUrl } from "../../config/constants";
import { selectGalleries } from "./selectors";
import { selectToken, selectUser } from "../user/selectors";
import { appLoading, appDoneLoading } from "../appState/actions";

export const storeGalleries = (galleries) => ({
  type: "STORE_GALLERIES",
  payload: galleries,
});

export const storeSingleGallery = (gallery) => ({
  type: "STORE_SINGLE_GALLERY",
  payload: gallery,
});

export const importPhotosToGallery = (photos, name) => ({
  type: "IMPORT_TO_GALLERY",
  payload: { photos, name },
});

export const getGalleries = () => async (dispatch, getState) => {
  dispatch(appLoading());
  try {
    const response = await Axios.get(`${apiUrl}/galleries`);
    //sort by date so newest pictures appear first in gallery
    response.data.forEach((gallery) => {
      gallery.photos.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
    });
    dispatch(storeGalleries(response.data));
    dispatch(appDoneLoading());
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
    dispatch(appLoading());
    try {
      const response = await Axios.get(`${apiUrl}/galleries/${name}`);
      console.log("data", response.data);
      response.data.photos.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      dispatch(storeSingleGallery(response.data));
      dispatch(appDoneLoading());
    } catch (e) {
      console.log(e);
    }
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
    const state = selectGalleries(getState());
    if (state.length) {
      const name = selectUser(getState()).name;
      dispatch(importPhotosToGallery(response.data, name));
    }
  } catch (e) {
    console.log(e);
  }
};
