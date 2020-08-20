import Axios from "axios";
import { apiUrl } from "../../config/constants";
import { selectSingleGallery, selectGalleries } from "../galleries/selectors";
import { selectToken } from "../user/selectors";
import { storeSingleGallery } from "../galleries/actions";

export const storeSinglePhoto = (photo) => ({
  type: "STORE_PHOTO",
  payload: photo,
});

export const getSinglePhoto = (id) => async (dispatch, getState) => {
  const gallery = selectSingleGallery(getState());
  if (Object.keys(gallery).length) {
    const photoFound = gallery.photos.find(
      (photo) => photo.id === parseInt(id)
    );
    dispatch(storeSinglePhoto(photoFound));
  } else {
    try {
      const response = await Axios.get(`${apiUrl}/photos/${id}`);
      dispatch(storeSinglePhoto(response.data));
    } catch (e) {
      console.log(e);
    }
  }
};

export const deletePhoto = (id) => async (dispatch, getState) => {
  const token = selectToken(getState());
  const oldGallery = selectSingleGallery(getState());
  const newGallery = {
    ...oldGallery,
    photos: oldGallery.photos.filter((photo) => photo.id !== id),
  };
  try {
    const response = await Axios.delete(`${apiUrl}/photos/delete/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("response:", response);
    dispatch(storeSingleGallery(newGallery));
  } catch (e) {
    console.log(e);
  }
};
