import reducer from './root'
import {createStore} from 'redux'
import * as actions from '../actions/actions'

const store = createStore(reducer)
beforeEach(() => {
  store.dispatch({type: 'RESET'})
})
it('todo reducer should initiate with correct state', () => {
  expect(store.getState()).toMatchSnapshot()
  expect(store.getState()).toEqual({ todos: [{title: 'add', id: 9999, complete: false}], filter: 'SHOW_ALL'})
})

it('should change visibilityFilter string when called', () => {
  store.dispatch(actions.setVisibilityFilter(actions.VisibilityFilters.SHOW_IN_PROGRESS))
  expect(store.getState().filter).toEqual('SHOW_IN_PROGRESS')
})

it('should create new todo object when called', () => {
  let expectedState = { todos: [{title: 'add', id: 9999, complete: false}, {title: 'darude', id: 0, complete: false}], filter: 'SHOW_ALL' }
  store.dispatch(actions.addTodo('darude'))
  expect(store.getState()).toEqual(expectedState)
})

it('should delete todo when called', () => {
  store.dispatch(actions.removeTodo('23'))
  expect(store.getState()).toEqual({todos: [], filter: 'SHOW_ALL'})
})

it('should toggle a todos completion when called', () => {
  let expectedState = [{title: 'add', id: 9999, complete: true}]
  store.dispatch(actions.toggleTodo(9999))
  expect(store.getState().todos).toEqual(expectedState)
})
