import * as actions from './actions'
describe('actions', () => {
  it('addTodo action', () => {
    expect(actions.addTodo('zoo')).toEqual({type: 'ADD_TODO', id: 0, title: 'zoo'})
    expect(actions.addTodo('boo')).toEqual({type: 'ADD_TODO', id: 1, title: 'boo'})
  })
  it('removeTodo action', () =>  expect(actions.removeTodo(4)).toEqual({type: 'REMOVE_TODO', id: 4}))
  it('setFilter action', () => expect(actions.setVisibilityFilter(actions.VisibilityFilters.SHOW_ALL)).toEqual({type: 'SET_VISIBILITY_FILTER', filter: actions.VisibilityFilters.SHOW_ALL}))
  it('toggleTodo action', () => expect(actions.toggleTodo('free')).toEqual({type: 'TOGGLE_TODO', id: 'free'}))
  it('Filters object', () => expect(actions.VisibilityFilters).toEqual({SHOW_ALL: 'SHOW_ALL', SHOW_COMPLETED: 'SHOW_COMPLETED', SHOW_IN_PROGRESS: 'SHOW_IN_PROGRESS'}))
})
