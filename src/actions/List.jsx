import React from 'react';

class List extends React.Component {
  assignIds() {
    for (let id = 0; id < this.props.list.length; id++) {
      this.props.list[id] = {
        id: id,
        class: this.props.itemClassName,
        content: this.props.list[id]
      };
    }
  }
  componentWillMount() {
    this.assignIds();
  }
  render() {
    return (
      <div>{
          this.props.list.map(function(item) {
          return <div className={ item.class } key={ item.id }>{ item.content }</div>
        })
      }</div>
    );
  }
}

export default List;
