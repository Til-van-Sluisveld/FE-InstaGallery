export const selectShoppingCart = (state) => state.cart;

export const selectQuantityOfProductInCart = (id) => {
  return (state) => {
    const existingItems = state.cart.find((item) => item.photoId === id);
    if (existingItems) {
      return existingItems.quantity;
    } else {
      return 0;
    }
  };
};
