import React from "react";
import { shallow } from "enzyme";

import { EducationInfo } from "../EducationInfo";
import { findTestAttr } from "../../../test/Utils";

//@to shallow render of EducationInfo component
const setup = (props = {}) => {
  return shallow(<EducationInfo {...props} />);
};

describe("EducationInfo with no initial state", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ education: [], setEducationInfo: jest.fn() });
  });
  test("renders without errors", () => {
    const educationInfo = findTestAttr(wrapper, "component-education-info");
    expect(educationInfo.length).toBe(1);
  });
  test("has correct number of TextForms: 5", () => {
    const textForms = wrapper.find("TextForm");
    expect(textForms.length).toBe(5);
  });
  test("has 'next' button", () => {
    const nextButton = wrapper.find("NextButton");
    expect(nextButton.length).toBe(1);
  });
  test("has 'back' button", () => {
    const backButton = wrapper.find("BackButton");
    expect(backButton.length).toBe(1);
  });
  test("has an AddButton component ", () => {
    const addButton = wrapper.find("AddButton");
    expect(addButton.length).toBe(1);
  });
  test("No education yet message is shown", () => {
    const noEducation = findTestAttr(wrapper, "no-education-yet-message");
    expect(noEducation.length).toBe(1);
  });
});

describe("EducationInfo with initial state", () => {
  test("education list is mapped when there are education coming from redux", () => {
    const education = {
      education: [
        {
          degree: "Mechanical Engineering",
          local: "Vitoria, Brazil",
          fromDate: "2015",
          toDate: "2019",
          link: "testes.com"
        },
        {
          degree: "Computer Science",
          local: "Vitoria, Brazil",
          fromDate: "2015",
          toDate: "2019",
          link: "testesdd.com"
        }
      ]
    };
    const wrapper = setup({ education, setEducationInfo: jest.fn() });
    const educationSet = wrapper.find("MapEducation");
    expect(educationSet.length).toBe(1);
  });
});
