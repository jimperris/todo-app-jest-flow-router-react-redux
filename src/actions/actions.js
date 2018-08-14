//@flow
import type {TodoFilterActions} from '../types/basic'
var num: number = 0
export const addTodo = (title: string): TodoFilterActions => {
  return {
    type: 'ADD_TODO',
    id: num++,
    title: title
  }
}
export const removeTodo = (id: number): TodoFilterActions => {
  return {
    type: 'REMOVE_TODO',
    id: id
  }
}

export const setVisibilityFilter = (filter: string) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter: filter
  }
}

export const toggleTodo = (id: number) => {
  return {
    type: 'TOGGLE_TODO',
    id: id
  }
}

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_IN_PROGRESS: 'SHOW_IN_PROGRESS'
}
