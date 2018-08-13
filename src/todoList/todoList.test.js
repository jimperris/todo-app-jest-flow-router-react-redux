import TodoList from './todoList.jsx'
import { shallow } from 'enzyme'
import React from 'react'
describe('post', () => {
  const todos = [{title: 'jazzo', completed: false, id: 0}, {title: 'zoo', completed: true, id: 1}]
  it('should render and keep props', () => {
    const wrap = shallow(
      <TodoList todos={todos} />
    )
    expect(wrap.exists()).toBeTruthy()
    expect(wrap).toMatchSnapshot()
  })
})
