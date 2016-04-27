import React from 'react';

class ListTodos extends React.Component {
  render() {
    let ids = this.props.ids;
    let itemClass = this.props.itemClassName;
    return (
      <div className="todoList">{this.props.todos.map(function(item, key) {
          return <div className={itemClass} key={key}>
            <span>{item.date}</span> <span>{item.due}</span> <span>{item.task}</span> <span>{item.project}</span> <span>{item.complexity}</span> <span>{item.importance}</span>
          </div>
        })}
      </div>
    );
  }
}

export default ListTodos;
