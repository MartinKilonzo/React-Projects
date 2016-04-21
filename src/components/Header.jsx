import React from 'react';
import {Button} from 'react-bootstrap';

class HeaderComponent extends React.Component {
  render() {
    return (
      <div>
      <Button bsStyle="success">Todo</Button>
      <a href="#">Home</a>
      <a href="#/todo">Todo</a>
      </div>
    );
  }
}

export default HeaderComponent;
