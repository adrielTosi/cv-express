import { SET_EDUCATION_INFO } from "../../actions/actionTypes";
import educationReducer from "../educationReducer";

test("educationReducer returns a Object with `jobs` key", () => {
  const props = {
    type: SET_EDUCATION_INFO,
    payload: {}
  };
  const reducer = educationReducer({}, props);
  expect(reducer).toEqual({ education: {} });
});
it("handles SET_EDUCATION_INFO action", () => {
  const props = {
    type: SET_EDUCATION_INFO,
    payload: [
      {
        degree: "Mechanical Engineering",
        local: "Vitoria, Brazil",
        fromDate: "2015",
        toDate: "2019",
        link: "testes.com"
      }
    ]
  };
  const reducer = educationReducer({}, props);
  expect(reducer).toEqual({ education: props.payload });
});
test("educationReducer returns last state if action has no `type` key", () => {
  const props = {
    payload: {}
  };
  const reducer = educationReducer({}, props);
  expect(reducer).toEqual({});
});
