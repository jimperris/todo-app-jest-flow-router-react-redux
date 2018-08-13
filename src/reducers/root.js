import {combineReducers} from 'redux'
import todosReducer from './todoReducer'
import filterReducer from './filterReducer'
const reducer = combineReducers({
  todos: todosReducer,
  filter: filterReducer
})
export default reducer
