//@flow
import React from 'react'
import {AddTodo} from './addTodo.jsx'
import {createStore} from 'redux'
import { mount } from 'enzyme'
import type {Action, State} from '../types/basic'
describe('addTodo component', () => {
  const store = createStore((action: Action, state: State) => {return state})
  const spy = jest.fn()
  const wrap = mount(
    <AddTodo store={store} addTodo={spy} />
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
