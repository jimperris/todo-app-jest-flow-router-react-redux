import Todo from './todo.jsx'
import { mount } from 'enzyme'
import React from 'react'
import * as actions from '../actions/actions'
import {findTodo} from './todo.jsx'
import {mapStateToProps, mapDispatchToProps} from './todo'
import {BrowserRouter as Router} from 'react-router-dom'
describe('maps', () => {
  it('mapStateToProps', () => {
    expect(mapStateToProps({todos: [{title: 'hairo'}]})).toEqual({todos: [{title: 'hairo'}]})
  })
  it('mapDispatchToProps', () => {
    const dispatch = jest.fn()
    mapDispatchToProps(dispatch).removeTodo('3')
    expect(dispatch.mock.calls[0][0]).toEqual(actions.removeTodo('3'))
  })
})

describe('findTodo function', () => {
  let todo = findTodo({todos: [{id: 2}, {title: 'ooooof', id: '14'}], id: '14'})
  expect(todo).toEqual({title: 'ooooof', id: '14'})
})

describe('post', () => {
  const wrap = mount(
    <Router>
      <Todo id={0} todos={[{title: 'name', id: 0, complete: false}]} />
    </Router>
  )
  it('should render and keep props', () => {
    expect(wrap.exists()).toBeTruthy()
  })
  it('should match snapshot', () => {
    expect(wrap).toMatchSnapshot()
  })
})
