//@flow
import {connect} from 'react-redux'
import type {State, Dispatch} from '../types/basic'
import * as actions from '../actions/actions'
import VisibilityFilter from './visibilityFilter.jsx'
const mapStateToProps = (state: State) => {
  return {
    filter: state.filter
  }
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
  setFilter: (filter: string) => dispatch(actions.setVisibilityFilter(filter))
})
const Component = connect(mapStateToProps, mapDispatchToProps)(VisibilityFilter)
export default Component
