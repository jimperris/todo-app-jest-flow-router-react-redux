import React from 'react'
import AddTodoContainer from './addTodo'
import {createStore} from 'redux'
import { mount } from 'enzyme'
describe('addTodo component', () => {
  const store = createStore((action, state) => {return state})
  const spy = jest.fn()
  const wrap = mount(
    <AddTodoContainer store={store} addTodoTest={spy} />
  )
  it('should change input text and dispatch addtodo action with input name when button is clicked', () => {
    const button = wrap.find('button')
    const input = wrap.find('input')
    button.simulate('click')
    expect(spy).toHaveBeenCalled()
    input.simulate('keydown', { which: 'a' })
  })
  it('should match snapshot', () => {
    expect(wrap).toMatchSnapshot()
  })
})
