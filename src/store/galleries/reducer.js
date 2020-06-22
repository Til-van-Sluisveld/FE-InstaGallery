const initialState = { all: [], single: {} };

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "STORE_GALLERIES":
      return { ...state, all: [...payload] };
    case "STORE_SINGLE_GALLERY":
      return { ...state, single: { ...payload } };
    default:
      return state;
  }
};
