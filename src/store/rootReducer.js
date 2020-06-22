import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import galleries from "./galleries/reducer";

export default combineReducers({
  appState,
  user,
  galleries,
});
