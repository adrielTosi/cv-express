import { SET_JOBS_INFO } from "../actions/actionTypes";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_JOBS_INFO:
      return {
        ...state,
        jobs: action.payload
      };
    default:
      return state;
  }
}
