import React from "react";
import { shallow, mount } from "enzyme";

import { PersonalInfo } from "../PersonalInfo";
import { findTestAttr } from "../../../test/Utils";

//@to shallow render PersonalInfo component
const setup = (props = {}) => {
  return shallow(<PersonalInfo {...props} />);
};

describe("PersonalInfo with no initial state", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ personal: {} });
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

describe("personal state in redux empty", () => {
  test("forms are empty when redux state is empty", () => {
    const initialState = {};
    const wrapper = mount(<PersonalInfo personal={initialState} />);
    const nameInput = wrapper.find("input").first();
    expect(nameInput.props().value).toBe("");
    wrapper.unmount();
  });
});

describe("personal state in redux with information", () => {
  test("forms are filled when redux state.personal is not empty", () => {
    const personalState = {
      personal: {
        cvName: "cv name",
        firstName: "john",
        lastName: "doe",
        address: "empty street, 19",
        email: "johndow@gmail.com",
        website: "www.johndoe.com",
        bio: "I am a passionate developer."
      }
    };
    const wrapper2 = mount(<PersonalInfo personal={personalState} />);
    wrapper2.update();
    const nameInput = wrapper2.find("input").first();
    expect(nameInput.props().value).toBe("cv name");
  });
});
