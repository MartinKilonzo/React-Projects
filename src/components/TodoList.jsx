import React from 'react';

import DeadlineMonitor from './DeadlineMonitor.jsx';
import EditMode from './EditMode.jsx';
import FilterField from './FilterField.jsx';
import FilterButtons from './FilterButtons.jsx';
import List from '../actions/List.jsx';

class TodoComponent extends React.Component {
  render() {
    return (
      <div className="todo">
         <DeadlineMonitor />
         <div className="filters">
           <EditMode />
           <FilterField />
           <FilterButtons />
         </div>
        <TodoListComponent />
      </div>
    );
  }
}

TodoComponent.defaultProps = {};

const items = ['red', 'blue', 'green'];

class TodoListComponent extends React.Component {
  render() {
    return (
      <List list={ items } itemClassName="list" />
    );
  }
}

export default TodoComponent
