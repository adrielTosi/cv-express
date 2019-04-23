import { createStore, applyMiddleware } from "redux";
import { middlewares } from "../store";
import rootReducer from "../reducers";

//@to      Create a mock Store for testing
//@param   initialState: Object
//@returns Redux Store
export const mockStore = (initialState = {}) => {
  return createStore(rootReducer, applyMiddleware(middlewares));
};

//@to      Search for data-test attribute in given wrapper
//@param   wrapper: shallowWrapper; val: string
//@returns node found in wrapper
export const findTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};
