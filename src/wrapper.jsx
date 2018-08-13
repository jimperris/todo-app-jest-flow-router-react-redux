
import React from 'react'
import { Provider } from 'react-redux'

import {TodoContainer} from './todo/todo.js'
import TodoList  from './todoList/todoList'
import VisibilityFilter from './visibilityFilter/visibilityFilter'
import AddTodo from './addTodo/addTodo'
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
        <Route path={'/todos/:id'} render={(match) => <TodoContainer id={match.match.params.id}/>}/>
      </Switch>
    </Router>
  </Provider>
)
export default Wrapper
