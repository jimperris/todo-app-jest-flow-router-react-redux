//@flow
import React from 'react'
import { Link } from 'react-router-dom'
//import fetchPosts from './actions.js'
import type {Todos} from '../types/basic'
const TodoList = (todos: Todos) => {
  console.log(todos)
  return (
    <div>
      {todos.map((todo, i) => {
        return (
          <div key={i}>
            <Link to={`/todos/${todo.id}`}>
              {todo.title}
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default TodoList
