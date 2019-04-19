import { SET_PERSONAL_INFO } from '../actions/actionTypes'

const initialState = {}

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_PERSONAL_INFO:
      return {
        ...state,
        personal: action.payload
      }
    default:
      return state
  }
}