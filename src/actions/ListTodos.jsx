import React from 'react';

class ListTodos extends React.Component {
  render() {
    let ids = this.props.ids;
    let itemClass = this.props.itemClassName;
    return (
      <div className="todoList">{this.props.list.map(function(item) {
          return <div className={ itemClass } key={ids++}>
            {item}
          </div>
        })
}</div>
    );
  }
}

export default ListTodos;
