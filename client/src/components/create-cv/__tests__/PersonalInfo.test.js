import React from "react";
import { shallow } from "enzyme";

import { PersonalInfo } from "../PersonalInfo";
import { findTestAttr } from "../../../test/Utils";

const setup = (props = {}) => {
  return shallow(<PersonalInfo {...props} />);
};

describe("PersonalInfo with no initial state", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  test("renders withour errors", () => {
    const personalInfo = findTestAttr(wrapper, "component-personal-info");
    expect(personalInfo.length).toBe(1);
  });
  test("has correct number of TextForms: 6", () => {
    const textForm = wrapper.find("TextForm");
    expect(textForm.length).toBe(6);
  });
  test("has correct number of TextArea: 1", () => {
    const textArea = wrapper.find("TextArea");
    expect(textArea.length).toBe(1);
  });
  test("has 'next' button", () => {
    const nextButton = wrapper.find("NextButton");
    expect(nextButton.length).toBe(1);
  });
});

describe("PersonalInfo with initial state coming from redux", () => {});
