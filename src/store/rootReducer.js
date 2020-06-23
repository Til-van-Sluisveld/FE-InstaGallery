import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import galleries from "./galleries/reducer";
import photos from "./photo/reducer";

export default combineReducers({
  appState,
  user,
  galleries,
  photos,
});
