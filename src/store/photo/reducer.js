const initialState = { single: {} };

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "STORE_PHOTO":
      return { ...state, single: { ...payload } };
    default:
      return state;
  }
};
