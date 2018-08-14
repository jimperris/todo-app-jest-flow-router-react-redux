//@flow
import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import type { Todo, Todos, State } from '../types/basic'
const TodoList = ({todos}: {todos: Array<Todo>}) => {
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

const getVisibleTodos = (todos: Todos, filter: string) => {
  switch (filter) {
  case 'SHOW_ALL': return todos
  case 'SHOW_COMPLETED': return todos.filter(t => t.complete)
  case 'SHOW_IN_PROGRESS': return todos.filter(t => !t.complete)
  default: throw new Error('Unknown filter: ' + filter)
  }
}
const mapStateToProps = (state: State) => ({
  todos: getVisibleTodos(state.todos, state.filter)
})
const Component = connect(mapStateToProps)(TodoList)

export default Component
