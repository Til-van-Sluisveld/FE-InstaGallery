import Axios from "axios";
import { apiUrl } from "../../config/constants";

export const storeGalleries = (galleries) => ({
  type: "STORE_GALLERIES",
  payload: galleries,
});

export const getGalleries = () => async (dispatch, getState) => {
  try {
    const response = await Axios.get(`${apiUrl}/galleries`);
    //console.log("response is:", response.data);
    dispatch(storeGalleries(response.data));
  } catch (e) {
    console.log(e);
  }
};
