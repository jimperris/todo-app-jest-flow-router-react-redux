//@flow
import Todo from './todo.jsx'
import type {State, Dispatch} from '../types/basic'
import {connect} from 'react-redux'
import * as actions from '../actions/actions'
export const mapStateToProps = (state: State) => {
  return {
    todos: state.todos
  }
}
export const mapDispatchToProps = (dispatch: Dispatch) => ({
  removeTodo: (id: number) => dispatch(actions.removeTodo(id)),
  toggleTodo: (id: number) => dispatch(actions.toggleTodo(id))
})

export const TodoContainer = connect(mapStateToProps, mapDispatchToProps)(Todo)
