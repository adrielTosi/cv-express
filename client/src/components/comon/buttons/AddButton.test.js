import React from "react";
import { shallow } from "enzyme";

import AddButton from "./AddButton";
import { findTestAttr } from "../../../test/Utils";

const defaultProps = {
  handleAdd: jest.fn(),
  test: jest.fn()
};
//@to shallow render AddButton component
const setup = (props = {}) => {
  return shallow(<AddButton {...defaultProps} {...props} />);
};

describe("AddButton component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  test("renders without errors", () => {
    const componentAddButton = findTestAttr(wrapper, "component-add-button");
    expect(componentAddButton.length).toBe(1);
  });
  test("has one button node", () => {
    const buttonNode = wrapper.find("button");
    expect(buttonNode.length).toBe(1);
  });
  test("prop function is called when button is clicked", () => {
    const buttonNode = wrapper.find("button");
    buttonNode.simulate("click");
    expect(defaultProps.handleAdd).toHaveBeenCalled();
  });
});
