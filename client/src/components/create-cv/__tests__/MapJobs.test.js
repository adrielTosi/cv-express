import React from "react";
import { shallow } from "enzyme";

import MapJobs from "../MapJobs";
import { findTestAttr } from "../../../test/Utils";

const defaultProps = {
  jobs: [
    {
      name: "Job Name",
      link: "http://google.com",
      description: "Best job I ever had"
    },
    {
      name: "Job Name 2 ",
      description: "Second best job I ever had"
    }
  ]
};
//@to create a shallow render of MapJobs component
const setup = (props = {}) => {
  return shallow(<MapJobs {...defaultProps} {...props} />);
};

describe("MapJobs component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  test("renders withour errors", () => {
    const mapJobs = findTestAttr(wrapper, "component-map-jobs");
    expect(mapJobs.length).toBe(1);
  });
  test("renders correct list of skills passed through props", () => {
    const orderedList = wrapper.find("li");
    expect(orderedList.length).toBe(defaultProps.jobs.length);
  });
});
