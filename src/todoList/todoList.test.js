//@flow
import {TodoList} from './todoList.jsx'
import { shallow } from 'enzyme'
import React from 'react'
import type {Todos} from '../types/basic'
describe('post', () => {
  const todos: Todos = [{title: 'jazzo', complete: false, id: 0}, {title: 'zoo', complete: true, id: 1}]
  it('should render and keep props', () => {
    const wrap = shallow(
      <TodoList todos={todos} />
    )
    expect(wrap.exists()).toBeTruthy()
    expect(wrap).toMatchSnapshot()
  })
})
