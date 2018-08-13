//@flow
function filterReducer(filter: string='SHOW_ALL', action: {type: string, filter: string}) {
  switch (action.type) {
  case 'SET_VISIBILITY_FILTER':
    return action.filter
  case 'RESET':
    return 'SHOW_ALL'
  default:
    return filter
  }
}

export default filterReducer
