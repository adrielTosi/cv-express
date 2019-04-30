import { SET_EDUCATION_INFO } from "../actions/actionTypes";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_EDUCATION_INFO:
      return {
        ...state,
        education: action.payload
      };
    default:
      return state;
  }
}
