import axios from "axios";
import jwt_decode from "jwt-decode";

import setAuthToken from "../utils/setAuthToken";
import { SET_CURRENT_USER, GET_ERRORS } from "./actionTypes";
import getErrors from "./errorActions";

//@func Login user
//@prop userData: { email: string, password: string, remember: bool }
export const loginUser = (userData, history) => dispatch => {
  return axios
    .post("/api/user/login", userData)
    .then(res => {
      // set Token to LS
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      // Set token to axios header
      setAuthToken(token);
      // Decode token to get user Data
      const user = jwt_decode(token);
      // Set current User
      dispatch(setCurrentUser(user));
    })
    .catch(err => dispatch(getErrors(err.response.data)));
};

//@func Set Current user
//@prop decoded: decoded JWT information
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    user: decoded
  };
};
