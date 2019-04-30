import { GET_ERRORS } from "../actions/actionTypes";

const errorReducer = (state = {}, action) => {
  switch (action.types) {
    case GET_ERRORS:
      return {
        ...state,
        errors: action.payload
      };
    default:
      return state;
  }
};
