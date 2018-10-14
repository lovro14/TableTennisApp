import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import matchReducer from "./matchReducer";
import playerReducer from "./playerReducer";

export default combineReducers({
  errors: errorReducer,
  match: matchReducer,
  player: playerReducer
});
