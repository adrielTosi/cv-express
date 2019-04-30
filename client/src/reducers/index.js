import { combineReducers } from "redux";
import personalReducer from "./personalReducer";
import skillsReducer from "./skillsReducer";
import jobsReducer from "./jobsReducer";
import educationReducer from "./educationReducer";
import authReducer from "./authReducer";

export default combineReducers({
  personal: personalReducer,
  skills: skillsReducer,
  jobs: jobsReducer,
  education: educationReducer,
  auth: authReducer
});
