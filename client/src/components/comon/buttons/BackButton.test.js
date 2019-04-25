import React from "react";
import { shallow } from "enzyme";

import { findTestAttr } from "../../../test/Utils";
import BackButton from "./BackButton";

const defaultProps = {
  route: "routeprop" //React-router route passed by parent component
};

const setup = () => {
  return shallow(<BackButton {...defaultProps} />);
};
describe("BackButton component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  test("renders without errors", () => {
    const backButton = findTestAttr(wrapper, "component-back-button");
    expect(backButton.length).toBe(1);
  });
  test("has one button node", () => {
    const buttonNode = wrapper.find("button");
    expect(buttonNode.length).toBe(1);
  });
  test("has one Link component", () => {
    const linkComponent = wrapper.find("Link");
    expect(linkComponent.length).toBe(1);
  });
});
