import React from "react";
import { shallow } from "enzyme";

import MapSkills from "../MapSkills";
import { findTestAttr } from "../../../test/Utils";

const defaultProps = {
  skills: [
    {
      skillName: "FronEnd",
      knowledge: ["CSS", "HTML", "Javascript", "React"]
    },
    { skillName: "BackEnd", knowledge: ["NodeJS", "PHP"] }
  ]
};
//@to create a shallow render of MapSkills component
const setup = (props = {}) => {
  return shallow(<MapSkills {...defaultProps} {...props} />);
};

describe("MapSkills component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  test("renders withour errors", () => {
    const mapSkills = findTestAttr(wrapper, "component-map-skills");
    expect(mapSkills.length).toBe(1);
  });
  test("renders correct list of skills passed through props", () => {
    const orderedList = wrapper.find("li");
    expect(orderedList.length).toBe(defaultProps.skills.length);
  });
});
