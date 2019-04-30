import { GET_ERRORS } from "./actionTypes";

const getErrors = payload => {
  return {
    type: GET_ERRORS,
    payload
  };
};

export default getErrors;
