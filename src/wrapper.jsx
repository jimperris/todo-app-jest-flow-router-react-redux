//@flow
import React from 'react'
import { Provider } from 'react-redux'

import TodoContainer from './todo/todo.jsx'
import TodoList  from './todoList/todoList.jsx'
import VisibilityFilter from './visibilityFilter/visibilityFilter.jsx'
import AddTodo from './addTodo/addTodo.jsx'
import reducer from './reducers/root'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createStore } from 'redux'

const store = createStore(reducer, {
  todos: [{title: 'add', id: 9999, complete: false}],
  filter: 'SHOW_ALL'
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const Wrapper = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path={'/'} render={() => (
          <div>
            <AddTodo />
            <TodoList />
            <VisibilityFilter />
          </div>
        )} />
        <Route path={'/todos/:id'} render={(match) => <TodoContainer id={parseInt(match.match.params.id, 10)}/>}/>
      </Switch>
    </Router>
  </Provider>
)
export default Wrapper
