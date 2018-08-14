/* @flow */
import type {Todos, State, Dispatch} from '../types/basic'
import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from '../actions/actions'

export const findTodo = (todos: Todos, id: number) => {
  for(var i = 0; i < todos.length; i++) {
    if(todos[i].id === id) {
      return todos[i]
    }
  }
  throw new Error('ERROR FROM A ME: TODO WAS NOT FOUND')
}

export const TodoComp = (
  {id, todos, toggleTodo, removeTodo}: {id: number, todos: Todos, toggleTodo: (id: number) => void, removeTodo: (id: number) => void}
) => {

  let todo = findTodo(todos, id)
  return (
    <div>
      <Link to='/'>Home</Link>
      <h2 style={{border: '1px solid black'}} onClick={() => toggleTodo(todo.id)}>{todo.title}</h2>
      <h4>{todo.complete ? 'complete' : 'in progress'}</h4>
      <Link to='/' onClick={() => removeTodo(todo.id)}>Remove</Link>
    </div>
  )
}

export const mapStateToProps = (state: State) => ({
  todos: state.todos
})

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  removeTodo: (id: number) => dispatch(actions.removeTodo(id)),
  toggleTodo: (id: number) => dispatch(actions.toggleTodo(id))
})
const Todo = connect(mapStateToProps, mapDispatchToProps)(TodoComp)

export default Todo
