import moxios from "moxios";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import { loginUser, setCurrentUser } from "../authActions";
import getErrors from "../errorActions";
import { makeMockStore } from "../../test/Utils";

// Mock Store
const store = makeMockStore({ user: {}, isAuthenticated: false });

// Moxios Helpers to fake success and error
const mockSuccess = data => ({ status: 200, response: { data } });
const mockError = error => ({ status: 500, response: error });

describe("loginUser", () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  test("successfull api request calls setCurrentUser action", () => {
    // Expected response from success api call
    const user = {
      name: "Adriel Tosi",
      email: "adrieltest@gmail.com",
      password: "123456"
    };
    // response from moxios once the call is made
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(mockSuccess(user));
    });
    // Expected array of called actions
    const expected = [setCurrentUser(user)];

    store.dispatch(loginUser()).then(() => {
      // Array of actual called actions
      const actionsCalled = store.getActions();
      expect(actionsCalled).toEqual(expected);
    });
  });
  test("failed api request calls getErrors action", () => {
    const user = {
      name: "Adriel Tosi",
      email: "adrieltest@gmail.com",
      password: "123456"
    };
    const error = {
      noprofile: "email don't exist"
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith(mockError(error));
    });
    const expected = [getErrors(error)];
    store.dispatch(loginUser(user)).then(() => {
      const actionsCalled = store.getActions();
      expect(actionsCalled).toEqual(expected);
    });
  });
});
