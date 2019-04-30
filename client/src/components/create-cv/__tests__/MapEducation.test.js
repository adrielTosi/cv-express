import React from "react";
import { shallow } from "enzyme";

import MapEducation from "../MapEducation";
import { findTestAttr } from "../../../test/Utils";

const defaultProps = {
  education: [
    {
      degree: "Business",
      fromDate: "02/05/2015",
      toDate: "02/05/2019",
      local: "NY",
      link: "test.test.com"
    },
    {
      degree: "Business",
      fromDate: "02/05/2015",
      toDate: "02/05/2019",
      local: "NY",
      link: "test.test.com"
    }
  ]
};
//@to create a shallow render of MapEducation component
const setup = (props = {}) => {
  return shallow(<MapEducation {...defaultProps} {...props} />);
};

describe("MapEducation component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  test("renders withour errors", () => {
    const mapJobs = findTestAttr(wrapper, "component-map-education");
    expect(mapJobs.length).toBe(1);
  });
  test("renders correct list of skills passed through props", () => {
    const orderedList = wrapper.find("li");
    expect(orderedList.length).toBe(defaultProps.education.length);
  });
});
