//@flow
import type {State, Todos, Todo} from '../types/basic'
import TodoList from './todoList.jsx'
import {connect} from 'react-redux'
const getVisibleTodos = (todos: Todos, filter: string) => {
  switch (filter) {
  case 'SHOW_ALL':
    return todos
  case 'SHOW_COMPLETED':
    return todos.filter(t => t.complete)
  case 'SHOW_IN_PROGRESS':
    return todos.filter(t => !t.complete)

  default:
    throw new Error('Unknown filter: ' + filter)
  }
}
const mapStateToProps = (state: State) => {
  return {
    todos: getVisibleTodos(state.todos, state.filter)
  }
}
const Component = connect(mapStateToProps)(TodoList)
export default Component
