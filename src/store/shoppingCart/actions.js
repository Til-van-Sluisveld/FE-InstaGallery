export function emptyShoppingCart() {
  return { type: "EMPTY_CART" };
}

export function addToCart(id, src) {
  return { type: "ADD", payload: { id, src } };
}

export function removeFromCart(id) {
  return { type: "REMOVE", payload: { id } };
}
