const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "EMPTY_CART": {
      return [];
    }
    case "ADD": {
      if (state.find((item) => item.photoId === payload.id)) {
        return state.map((item) =>
          item.photoId === payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [
          ...state,
          { photoId: payload.id, quantity: 1, src: payload.src },
        ];
      }
    }
    case "REMOVE": {
      const specificProduct = state.find((item) => item.photoId === payload.id);
      if (specificProduct.quantity === 1) {
        return state.filter((item) => item.photoId !== specificProduct.photoId);
      } else {
        return state.map((item) =>
          item.photoId === payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    }
    default:
      return state;
  }
};
