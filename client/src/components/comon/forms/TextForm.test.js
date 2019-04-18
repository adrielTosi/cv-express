import React from 'react'
import { shallow, simulate } from 'enzyme'

import TextForm from './TextForm'
import { findTestAttr } from '../../../test/Utils'

test("renders without errors", () => {
  const wrapper = shallow(<TextForm />)
  const TextFormComponent = findTestAttr(wrapper, 'component-text-form')
  expect(TextFormComponent.exists()).toBe(true)
})
test("input has value(property) equals value(props)", () => {
  const valueProps = "value"
  const wrapper = shallow(<TextForm value={valueProps} />)
  const input = wrapper.find("input")
  expect(input.props().value).toBe(valueProps)
})
test("renders information when info props is passed", () => {
  const wrapper = shallow(<TextForm info="info" />)
  const infoTag = findTestAttr(wrapper, 'info')
  expect(infoTag.exists()).toBe(true)
})
test("onChange props is called when input changes", () => {
  const mockOnChange = jest.fn()
  const event = { target: { value: "change" } }
  const wrapper = shallow(<TextForm onChange={mockOnChange} />)
  const input = wrapper.find("input")
  input.simulate("change", event)
  expect(mockOnChange).toHaveBeenCalledWith(event)
})