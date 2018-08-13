/* @flow */
import type {Todos} from '../types/basic'
import React from 'react'
import { Link } from 'react-router-dom'

export const findTodo = (todos: Todos, id: number) => {
  for(var i = 0; i < todos.length; i++) {
    if(todos[i].id === id) {
      return todos[i]
    }
  }
  console.log('ERROR: TODO NOT FOUND')
  return {}
}
const TodoComp = (
  id: number, todos: Todos,
  toggleTodo: (id: number) => void, removeTodo: (id: number) => void
) => {
  let todo = findTodo(todos, id)
  return (
    <div>
      <Link to='/'>Home</Link>
      <h2 style={{border: '1px solid black'}}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.title}
      </h2>
      <h4>{todo.complete ? 'complete' : 'in progress'}</h4>
      <Link to='/' onClick={() => removeTodo(todo.id)}>
        Remove
      </Link>
    </div>
  )
}

export default TodoComp
