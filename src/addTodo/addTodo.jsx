//@flow
import React from 'react'
type Props = {|
  addTodoTest?: (title: string) => void,
  addTodo?: (title: string) => void
|}
type State = {|
  value: string
|}
class AddTodo extends React.Component<Props, State> {
  value: HTMLInputElement
  state: State = {
    value: 'name'
  }
  handleClick() {
    var func: (title: string) => void
    if(this.props.addTodoTest) func = this.props.addTodoTest
    else if(this.props.addTodo) func = this.props.addTodo
    else {func = (title: string) => console.log('ERROR: no function passed' + title)}
    func(this.state.value)
  }
  handleChange(event: SyntheticKeyboardEvent<HTMLButtonElement>) {
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
export default AddTodo
