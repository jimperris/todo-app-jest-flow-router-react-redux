//@flow
import {combineReducers} from 'redux'
import todosReducer from './todoReducer'
import filterReducer from './filterReducer'
import type { State, Action } from '../types/basic'
const reducer: (state: State, action: Action) => void = combineReducers({
  todos: todosReducer, filter: filterReducer
})
export default reducer
