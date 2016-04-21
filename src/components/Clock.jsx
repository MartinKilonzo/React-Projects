import React from 'react';

class ClockComponent extends React.Component {
  clock() {
    let clock = {};
    let time = new Date().getTime() - new Date().getTimezoneOffset() * 60 * 1000;
    time = Math.round(time / 1000); // Truncate milliseconds
    clock.seconds = time % 60; // Extract seconds
    time = Math.round(time / 60); // Remove seconds
    clock.minutes = time % 60; // Extract minutes
    time = Math.round(time / 60); // Remove minutes
    clock.hours = time % 24 > 12
      ? time % 12
      : time % 24; // Extract hours (ignore the remainder)
    if (time % 24 > 12) {
      clock.meridian = 'pm';
    } else {
      clock.meridian = 'am';
    }
    // Add padding for the units in [field]
    const fields = ['minutes', 'seconds'];
    for (let i = 0; i < fields.length; i++) {
      if (clock[fields[i]] < 10) {
        clock[fields[i]] = '0' + clock[fields[i]];
      }
    }
    this.setState({hours: clock.hours, minutes: clock.minutes, seconds: clock.seconds, meridian: clock.meridian});
  }
  componentWillMount() {
    this.clock();
  }
  componentDidMount() {
    this.props.intervalIds.push(
    window.setInterval(function() {
      this.clock();
    }.bind(this), 500)
  );
  }
  componentWillUnmount() {
    this.props.intervalIds.forEach(function(timer){
      window.clearInterval(timer);
    });
  }
  render() {
    return (
      <div className="clock">
        <h2>It's {this.state.hours}:{this.state.minutes} {this.state.meridian}</h2>
      </div>
    );
  }
}

ClockComponent.defaultProps = {
  intervalIds: []
}

export default ClockComponent;
