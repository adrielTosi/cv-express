import React from "react";
import { shallow } from "enzyme";

import { SkillsInfo } from "../SkillsInfo";
import { findTestAttr } from "../../../test/Utils";

//@to shallow render SkillsInfo component
const setup = (props = {}) => {
  return shallow(<SkillsInfo {...props} />);
};

describe("SkillsInfo with no initial state", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ skills: [], setSkillsInfo: jest.fn() });
  });
  test("renders withour errors", () => {
    const skillsInfo = findTestAttr(wrapper, "component-skills-info");
    expect(skillsInfo.length).toBe(1);
  });
  test("has correct number of TextForms: 2", () => {
    const textForm = wrapper.find("TextForm");
    expect(textForm.length).toBe(2);
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
  test("No skills yet message is shown", () => {
    const noSkills = findTestAttr(wrapper, "no-skills-yet-message");
    expect(noSkills.length).toBe(1);
  });
});

describe("SkillsInfo with initial state", () => {
  test("Skills list is mapped when there are skills coming from redux", () => {
    const skills = {
      skills: [
        {
          skillName: "FronEnd",
          knowledge: ["CSS", "HTML", "Javascript", "React"]
        },
        { skillName: "BackEnd", knowledge: ["NodeJS", "PHP"] }
      ]
    };
    const wrapper = setup({ skills, setSkillsInfo: jest.fn() });
    const skillSet = wrapper.find("MapSkills");
    expect(skillSet.length).toBe(1);
  });
});
