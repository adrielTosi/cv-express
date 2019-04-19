import React from 'react'
import { shallow } from 'enzyme'

import TextArea from './TextArea'
import { findTestAttr } from '../../../test/Utils'

const commonProps = {
  maxlength: 400,
  label: "laber",
  placeholder: "placeholder",
  labelFor: "labelFor",
  info: "info",
  name: "name",
  value: "",
  onChange: jest.fn()
}

const setup = (newProps) => {
  return shallow(<TextArea {...commonProps} {...newProps} />)
}

test("renders without errors", () => {
  const wrapper = setup()
  const TextAreaComponent = findTestAttr(wrapper, 'component-text-area')
  expect(TextAreaComponent.exists()).toBe(true)
})
test("textarea has value(property) equals value(props)", () => {
  const { value } = commonProps
  const wrapper = setup()
  const textarea = wrapper.find("textarea")
  expect(textarea.props().value).toBe(value)
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
  const event = { target: { value: "c" } }
  const wrapper = setup(newProps)
  const textarea = wrapper.find("textarea")
  textarea.simulate("change", event)
  expect(mockOnChange).toHaveBeenCalledWith(event)
})