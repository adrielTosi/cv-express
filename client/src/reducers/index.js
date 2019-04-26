import { combineReducers } from "redux";
import personalReducer from "./personalReducer";
import skillsReducer from "./skillsReducer";
import jobsReducer from "./jobsReducer";

export default combineReducers({
  personal: personalReducer,
  skills: skillsReducer,
  jobs: jobsReducer
});
