import { SET_SKILLS_INFO } from "../actions/actionTypes";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_SKILLS_INFO:
      return {
        ...state,
        skills: action.payload
      };
    default:
      return state;
  }
}
