import thunk from "redux-thunk";
import configureStore from "redux-mock-store";

//@to      Search for data-test attribute in given wrapper
//@prop    wrapper: shallowWrapper; val: string
//@returns node found in wrapper
export const findTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

//@to      create a mock store using create-mock-store for testing actions
//@prop    state: object;
//@returns mock Store with passed initial State
export const mockStore = configureStore([thunk]);
export const makeMockStore = (state = {}) => {
  return mockStore({
    ...state
  });
};
