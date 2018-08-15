//@flow
import React from 'react'
import {AddTodo} from './addTodo.jsx'
import { shallow, mount } from 'enzyme'
describe('addTodo component', () => {
  const spy = jest.fn()
  const wrap = mount(
    <AddTodo addTodo={spy} />
  )
  it('should match snapshot', () => {
    expect(wrap).toMatchSnapshot()
  })
  it('should call spy', () => {
    const button = wrap.find('button')
    button.simulate('click')
    expect(spy).toHaveBeenCalled()
  })
  it('should change input text and state with it', () => {
    const input = wrap.find('input')

    input.simulate('change', {target: {value: 'namea'}})
    expect(wrap.state('value')).toBe('namea')
  })
})
