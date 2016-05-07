import React from 'react';

class ListTodos extends React.Component {
  intensity(field) {
    const intensityColors = ['white', 'green', 'yellow', 'orange', 'red'];
    let color;
    // console.log(field);
    switch (field) {
      case 'none': color = intensityColors[0]; break;
      case 'minor': color = intensityColors[1]; break;
      case 'moderate': color = intensityColors[2]; break;
      case 'complex': color = intensityColors[3]; break;
      case 'important': color = intensityColors[3]; break;
      case 'extreme': color = intensityColors[4]; break;
      default: 'none'
    }
    return {color: color};
  }
  render() {
    const ids = this.props.ids;
    const itemClass = this.props.itemClassName;

    return (
      <div className="todoList">{this.props.todos.map(function(item, key) {
          return <div className={itemClass} key={key}>
            <span className="listItem">{item.date} </span>
            <span className="listItem">{item.due} </span>
            <span className="listItem">{item.task} </span>
            <span className="listItem">{item.project} </span>
            <span className="listItem complexity" style={this.intensity(item.complexity)}>{item.complexity} </span>
            <span className="listItem importance" style={this.intensity(item.importance)}>{item.importance} </span>
          </div>
        }.bind(this))}
      </div>
    );
  }
}

export default ListTodos;
