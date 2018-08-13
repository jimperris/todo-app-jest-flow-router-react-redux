import * as actions from './actions'
describe('actions', () => {
  it('should return correct objects when actions are called', () => {
    expect(actions.addTodo('zoo')).toEqual({type: 'ADD_TODO', id: 0, title: 'zoo'}),
    expect(actions.addTodo('boo')).toEqual({type: 'ADD_TODO', id: 1, title: 'boo'})
    expect(actions.removeTodo(4)).toEqual({type: 'REMOVE_TODO', id: 4})
    expect(actions.setVisibilityFilter(actions.VisibilityFilters.SHOW_ALL)).toEqual({type: 'SET_VISIBILITY_FILTER', filter: actions.VisibilityFilters.SHOW_ALL})
    expect(actions.toggleTodo('free')).toEqual({type: 'TOGGLE_TODO', id: 'free'})
    expect(actions.VisibilityFilters).toEqual({SHOW_ALL: 'SHOW_ALL', SHOW_COMPLETED: 'SHOW_COMPLETED', SHOW_IN_PROGRESS: 'SHOW_IN_PROGRESS'})
  })
})
