import Axios from "axios";
import { apiUrl } from "../../config/constants";

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
  try {
    const invoice = await Axios.post(`${apiUrl}/invoice`, {
      buyer_name,
      buyer_email,
      buyer_country,
      buyer_city,
      buyer_address,
      buyer_zipcode,
    });
    console.log("invoice is:", invoice);
  } catch (e) {
    console.log(e);
  }
  //   console.log(
  //     "Buyer info:",
  //     buyer_name,
  //     buyer_email,
  //     buyer_country,
  //     buyer_city,
  //     buyer_address,
  //     buyer_zipcode
  //   );
};
