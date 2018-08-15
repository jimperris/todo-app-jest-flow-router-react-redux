//@flow
import type {Todos, TodoFilterActions } from '../types/basic'
function todosReducer(state: Todos=[], action: TodoFilterActions): Todos {
  switch (action.type) {
  case 'ADD_TODO':
    return [
      ...state,
      {
        title: action.title || 'no title',
        complete: false,
        id: action.id 
      }
    ]
  case 'RESET':
    return [{title: 'add', id: 9999, complete: false}]
  case 'TOGGLE_TODO':
    return state.map(todo =>
      (todo.id === action.id) ? {...todo, complete: !todo.complete} : todo
    )
  case 'REMOVE_TODO':
    var index = 0
    state.map((todo, i) => {
      action.id === todo.id ? index = i : null
    })
    return [
      ...state.slice(0, index),
      ...state.slice(index + 1)
    ]
  default:
    return state
  }
}

export default todosReducer
