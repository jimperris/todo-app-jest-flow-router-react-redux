//@flow
import {connect} from 'react-redux'
import type {State, Dispatch} from '../types/basic'
import * as actions from '../actions/actions'
import React from 'react'
import {VisibilityFilters} from '../actions/actions'
export const VisibilityFilter = ({filter, setFilter}: {filter: string, setFilter: (filter: string) => void}) => {
  return (
    <div>
      <button className={'showAll'} onClick={() => setFilter(VisibilityFilters.SHOW_ALL)}
        style={filter === 'SHOW_ALL' ? {color: 'blue'} : {color: 'black'}}>Show All</button>
      <button className={'showCompleted'} onClick={() => setFilter(VisibilityFilters.SHOW_COMPLETED)}
        style={filter === 'SHOW_COMPLETED' ? {color: 'blue'} : {color: 'black'}}>Show Completed</button>
      <button className={'showInProgress'} onClick={() => setFilter(VisibilityFilters.SHOW_IN_PROGRESS)}
        style={filter === 'SHOW_IN_PROGRESS' ? {color: 'blue'} : {color: 'black'}}>  Show In Progress</button>
    </div>
  )
}
const mapStateToProps = (state: State) => ({
  filter: state.filter
})
const mapDispatchToProps = (dispatch: Dispatch) => ({
  setFilter: (filter: string) => dispatch(actions.setVisibilityFilter(filter))
})
const Component = connect(mapStateToProps, mapDispatchToProps)(VisibilityFilter)
export default Component
