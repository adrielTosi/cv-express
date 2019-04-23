import React from "react";
import { shallow } from "enzyme";

import { findTestAttr } from "../../../test/Utils";
import NextButton from "./NextButton";

const defaultProps = {
  action: jest.fn() //Redux action passed by parent component
};

const setup = () => {
  return shallow(<NextButton {...defaultProps} />);
};
describe("NextButton component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  test("renders without errors", () => {
    const nextButton = findTestAttr(wrapper, "component-next-button");
    expect(nextButton.length).toBe(1);
  });
  test("has one button node", () => {
    const buttonNode = wrapper.find("button");
    expect(buttonNode.length).toBe(1);
  });
  test("calls `action` props when button is clicked", () => {
    const buttonNode = wrapper.find("button");
    buttonNode.simulate("click");
    expect(defaultProps.action).toHaveBeenCalled();
  });
});
