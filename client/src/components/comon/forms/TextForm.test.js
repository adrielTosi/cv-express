import React from 'react'
import { shallow } from 'enzyme'

import TextForm from './TextForm'
import { findTestAttr } from '../../../test/Utils'

const commonProps = {
  name: "name",
  value: "value",
  label: "label",
  labelFor: "labelFor",
  info: "info",
  type: "text",
  placeholder: "placeholder",
  onChange: jest.fn()
}

const setup = (newProps) => {
  return shallow(<TextForm {...commonProps} {...newProps} />)
}

test("renders without errors", () => {
  const wrapper = setup()
  const TextFormComponent = findTestAttr(wrapper, 'component-text-form')
  expect(TextFormComponent.exists()).toBe(true)
})
test("input has value(property) equals value(props)", () => {
  const { value } = commonProps
  const wrapper = setup()
  const input = wrapper.find("input")
  expect(input.props().value).toBe(value)
})
test("renders information when info props is passed", () => {
  const wrapper = setup()
  const infoTag = findTestAttr(wrapper, 'info')
  expect(infoTag.exists()).toBe(true)
})
test("does not render information when info props is not passed", () => {
  const newProps = { info: null }
  const wrapper = setup(newProps)
  const infoTag = findTestAttr(wrapper, 'info')
  expect(infoTag.exists()).toBe(false)
})
test("onChange props is called when input changes", () => {
  const mockOnChange = jest.fn()
  const newProps = { onChange: mockOnChange }
  const event = { target: { value: "change" } }
  const wrapper = setup(newProps)
  const input = wrapper.find("input")
  input.simulate("change", event)
  expect(mockOnChange).toHaveBeenCalledWith(event)
})