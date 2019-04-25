import { SET_SKILLS_INFO } from "../../actions/actionTypes";
import skillsReducer from "../skillsReducer";

test("skillsReducer returns a Object with `skills` key", () => {
  const props = {
    type: SET_SKILLS_INFO,
    payload: {}
  };
  const reducer = skillsReducer({}, props);
  expect(reducer).toEqual({ skills: {} });
});
test("skillsReducer returns last state if action has no `type` key", () => {
  const props = {
    payload: {}
  };
  const reducer = skillsReducer({}, props);
  expect(reducer).toEqual({});
});
