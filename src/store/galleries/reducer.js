const initialState = { all: [], single: {} };

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "STORE_GALLERIES":
      return { ...state, all: [...payload] };
    case "STORE_SINGLE_GALLERY":
      return { ...state, single: { ...payload } };
    case "IMPORT_TO_GALLERY":
      if (state.all.find((gallery) => gallery.name === payload.name)) {
        return {
          ...state,
          all: [
            ...state.all.map((gallery) =>
              gallery.name === payload.name
                ? { ...gallery, photos: [...payload.photos, ...gallery.photos] }
                : gallery
            ),
          ],
        };
      }
    default:
      return state;
  }
};
