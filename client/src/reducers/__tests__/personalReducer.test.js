import { SET_PERSONAL_INFO } from "../../actions/actionTypes";
import personalReducer from "../personalReducer";

test("personalReducer returns a Object with `personal` key", () => {
  const props = {
    type: SET_PERSONAL_INFO,
    payload: {}
  };
  const reducer = personalReducer({}, props);
  expect(reducer).toEqual({ personal: {} });
});
test("personalReducer returns last state if action has no `type` key", () => {
  const props = {
    payload: {}
  };
  const reducer = personalReducer({}, props);
  expect(reducer).toEqual({});
});
