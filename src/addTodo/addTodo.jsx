//@flow
import React, { Component } from 'react'
import type { Dispatch } from '../types/basic'
import { connect } from 'react-redux'
import * as actions from '../actions/actions'

type Props = {
  addTodo: (title: string) => void
}
type State = {
  value: string
}
export class AddTodo extends Component<Props, State> {
  value: HTMLInputElement
  state = {
    value: 'name'
  }
  handleClick = () => {
    this.props.addTodo(this.state.value)
  }
  handleChange = (event: SyntheticKeyboardEvent<HTMLInputElement>) => {
    this.setState({value: event.currentTarget.value})
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addTodo: (name: string) => dispatch(actions.addTodo(name))
})
const AddTodoCont = connect(null, mapDispatchToProps)(AddTodo)
export default AddTodoCont
