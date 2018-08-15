//@flow
import {TodoComp} from './todo.jsx'
import { mount } from 'enzyme'
import React from 'react'
import * as actions from '../actions/actions'
import {findTodo} from './todo.jsx'
import {mapStateToProps, mapDispatchToProps} from './todo'
import {BrowserRouter as Router} from 'react-router-dom'
describe('maps', () => {
  it('mapStateToProps', () => {
    expect(mapStateToProps({todos: [{title: 'hairo', id: 3, complete: false}], filter: 'SHOW_ALL'})).toEqual({todos: [{title: 'hairo', id: 3, complete: false}]})
  })
  it('mapDispatchToProps', () => {
    const dispatch = jest.fn()
    mapDispatchToProps(dispatch).removeTodo(3)
    expect(dispatch.mock.calls[0][0]).toEqual(actions.removeTodo(3))
  })
})

describe('findTodo function', () => {
  let todo = findTodo([{id: 2, title: 'flomp', complete: false}, {title: 'ooooof', complete: false, id: 14}], 14)
  expect(todo).toEqual({title: 'ooooof', id: 14, complete: false})
})

describe('post', () => {
  const wrap = mount(
    <Router>
      <TodoComp id={0} toggleTodo={() => undefined} removeTodo={() => undefined} todos={[{title: 'name', id: 0, complete: false}]} />
    </Router>
  )
  it('should render and keep props', () => {
    expect(wrap.exists()).toBeTruthy()
  })
  it('should match snapshot', () => {
    expect(wrap).toMatchSnapshot()
  })
})
