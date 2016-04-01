import React from 'react';

import Clock from './Clock';
import Countdown from './Countdown';

class HelloWorldComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, { this.props.author }!</h1>
        <Clock />
        <Countdown />
      </div>
    );
  }
}

HelloWorldComponent.defaultProps = {
  author: 'Martin'
};

export default HelloWorldComponent;
