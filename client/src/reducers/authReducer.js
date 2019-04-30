import { SET_CURRENT_USER } from "../actions/actionTypes";

const initialState = {
  user: {},
  isAuthenticated: false
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        user: action.user,
        isAuthenticated: true
      };
    default:
      return state;
  }
};

export default authReducer;
