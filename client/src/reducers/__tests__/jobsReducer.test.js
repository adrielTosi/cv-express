import { SET_JOBS_INFO } from "../../actions/actionTypes";
import jobsReducer from "../jobsReducer";

test("jobsReducer returns a Object with `jobs` key", () => {
  const props = {
    type: SET_JOBS_INFO,
    payload: {}
  };
  const reducer = jobsReducer({}, props);
  expect(reducer).toEqual({ jobs: {} });
});
it("handles SET_JOBS_INFO action", () => {
  const props = {
    type: SET_JOBS_INFO,
    payload: [
      {
        name: "Job Name 2 ",
        description: "Second best job I ever had"
      }
    ]
  };
  const reducer = jobsReducer({}, props);
  expect(reducer).toEqual({ jobs: props.payload });
});
test("jobsReducer returns last state if action has no `type` key", () => {
  const props = {
    payload: {}
  };
  const reducer = jobsReducer({}, props);
  expect(reducer).toEqual({});
});
