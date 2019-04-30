import React from "react";
import { shallow } from "enzyme";

import { JobsInfo } from "../JobsInfo";
import { findTestAttr } from "../../../test/Utils";

//@to shallow render of JobsInfo component
const setup = (props = {}) => {
  return shallow(<JobsInfo {...props} />);
};

describe("JobsInfo with no initial state", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ jobs: [], setJobsInfo: jest.fn() });
  });
  test("renders without errors", () => {
    const jobsInfo = findTestAttr(wrapper, "component-jobs-info");
    expect(jobsInfo.length).toBe(1);
  });
  test("has correct number of TextForms: 2", () => {
    const textForms = wrapper.find("TextForm");
    expect(textForms.length).toBe(2);
  });
  test("has correct number of TextAreas: 1", () => {
    const textArea = wrapper.find("TextArea");
    expect(textArea.length).toBe(1);
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
  test("No jobs yet message is shown", () => {
    const noJobs = findTestAttr(wrapper, "no-jobs-yet-message");
    expect(noJobs.length).toBe(1);
  });
});
describe("JobsInfo with initial state", () => {
  test("Jobs list is mapped when there are jobs coming from redux", () => {
    const jobs = {
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
    const wrapper = setup({ jobs, setJobsInfo: jest.fn() });
    const jobsSet = wrapper.find("MapJobs");
    expect(jobsSet.length).toBe(1);
  });
});
