//@flow
import type {Dispatch} from '../types/basic'
import {connect} from 'react-redux'
import * as actions from '../actions/actions'
import AddTodo from './addTodo.jsx'

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addTodo: (name: string) => dispatch(actions.addTodo(name))
})
const Component = connect(null, mapDispatchToProps)(AddTodo)
export default Component
