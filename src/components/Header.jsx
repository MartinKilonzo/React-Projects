import React from 'react';
import {Button} from 'react-bootstrap';

class HeaderComponent extends React.Component {
  render() {
    return (
      <div>
        <Button bsStyle="success" href="#/">Home</Button>
        <Button bsStyle="success" href="#/todo">Todo</Button>
      </div>
    );
  }
}

export default HeaderComponent;
