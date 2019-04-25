import { combineReducers } from "redux";
import personalReducer from "./personalReducer";
import skillsReducer from "./skillsReducer";

export default combineReducers({
  personal: personalReducer,
  skills: skillsReducer
});
