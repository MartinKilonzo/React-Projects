import React from 'react';

import DeadlineMonitor from './Todo/DeadlineMonitor.jsx';
import EditMode from './Todo/EditMode.jsx';
import FilterField from './Todo/FilterField.jsx';
import FilterButtons from './Todo/FilterButtons.jsx';
import ListTodos from '../actions/ListTodos.jsx';

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
        <ListTodos {...this.props} itemClassName="todo" />
      </div>
    );
  }
}
const items = ['red', 'blue', 'orange', 'purple'];

TodoComponent.defaultProps = {
  ids: 0,
  class: 'todo',
  list: items
};

export default TodoComponent;
