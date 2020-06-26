import Axios from "axios";
import { apiUrl } from "../../config/constants";
import { selectShoppingCart } from "./selectors";

export function emptyShoppingCart() {
  return { type: "EMPTY_CART" };
}

export function addToCart(id, src) {
  return { type: "ADD", payload: { id, src } };
}

export function removeFromCart(id) {
  return { type: "REMOVE", payload: { id } };
}

export const processOrder = (
  buyer_name,
  buyer_email,
  buyer_country,
  buyer_city,
  buyer_address,
  buyer_zipcode
) => async (dispatch, getState) => {
  const cart = selectShoppingCart(getState());
  try {
    const response = await Axios.post(`${apiUrl}/invoices`, {
      buyer_name,
      buyer_email,
      buyer_country,
      buyer_city,
      buyer_address,
      buyer_zipcode,
      cart,
    });
    console.log("succes?", response.data);
  } catch (e) {
    console.log(e);
  }
};
