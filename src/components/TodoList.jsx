import React from 'react';
import Update from 'react-addons-update';

import DeadlineMonitor from './Todo/DeadlineMonitor.jsx';
import NewTodo from './Todo/NewTodo.jsx';
import FilterField from './Todo/FilterField.jsx';
import FilterButtons from './Todo/FilterButtons.jsx';
import ListTodos from '../actions/ListTodos.jsx';

class TodoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: props.list,
      ids: props.ids
    };
    this.newTodo = this.newTodo.bind(this);
  }
  newTodo(todo) {
    let newState = Update(this.state, {
      todos: { $push : [todo] }
    });
    this.setState(newState);
  }
  render() {
    return (
      <div className="todo">
        <DeadlineMonitor/>
        <div className="filters">
          <NewTodo newTodo={this.newTodo}/>
          <FilterField/>
          <FilterButtons/>
        </div>
        <ListTodos todos={this.state.todos} ids={this.state.ids} itemClassName="todo"/>
      </div>
    );
  }
}
const items = ['red', 'blue', 'orange', 'purple'];

TodoComponent.defaultProps = {
  ids: 0,
  class: 'todo',
  list: []
};

export default TodoComponent;
