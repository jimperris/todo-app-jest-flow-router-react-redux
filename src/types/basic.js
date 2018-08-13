//@flow
import {Store as ReduxStore, Dispatch as ReduxDispatch} from 'redux'
export type ReduxInitAction = {type: '@@INIT'}
export type TodoFilterActions =
| {type: 'ADD_TODO', id: number, title: string}
| {type: 'REMOVE_TODO', id: number}
| {type: 'SET_VISIBILITY_FILTER', filter: string, id?: number}
| {type: 'TOGGLE_TODO', id: number}
| {type: 'RESET', id?: number}
export type Action = ReduxInitAction | TodoFilterActions
export type Dispatch = ReduxDispatch<Action>
export type Todo = {
  +id: number,
  +title: string,
  +complete: boolean,
}
export type Todos = Array<Todo>
export type Filter = string
export type State = { todos: Todos, filter: Filter }
export type Store = ReduxStore<State, Action>
