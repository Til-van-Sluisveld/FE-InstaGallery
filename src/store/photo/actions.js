import Axios from "axios";
import { apiUrl } from "../../config/constants";
import { selectToken } from "../user/selectors";
import { selectSingleGallery } from "../galleries/selectors";

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
