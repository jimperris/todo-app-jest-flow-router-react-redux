//@flow
import React from 'react'
import {AddTodo} from './addTodo.jsx'
import { shallow } from 'enzyme'
describe('addTodo component', () => {
  const spy = jest.fn()
  const wrap = shallow(
    <AddTodo addTodo={spy} />
  )
  it('should match snapshot', () => {
    expect(wrap).toMatchSnapshot()
  })
  it('should change input text and dispatch addtodo action with input name when button is clicked', () => {
    const button = wrap.find('button')
    button.simulate('click')
    const input = wrap.find('input')
    input.simulate('keydown', { which: 'a' })
    expect(spy).toHaveBeenCalled()
    expect(input.props().value).toBe('namea')
  })
})
