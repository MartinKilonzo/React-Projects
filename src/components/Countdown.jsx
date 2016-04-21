import React from 'react';

class CountdownComponent extends React.Component {
  countdown(endDate) {
    let countdown = {};
    let remaining = new Date(endDate).getTime() - new Date().getTime();
    remaining = Math.round(remaining / 1000); // Truncate milliseconds
    countdown.seconds = remaining % 60; // Extract seconds
    remaining = Math.round(remaining / 60); // Remove seconds
    countdown.minutes = remaining % 60; // Extract minutes
    remaining = Math.round(remaining / 60); // Remove minutes
    countdown.hours = remaining % 24; // Extract hours
    remaining = Math.round(remaining / 24); // Remove hours
    countdown.days = remaining; // Remainder in  days

    const fields = ['days', 'hours', 'minutes', 'seconds'];
    for (let i = 0; i < fields.length; i++) {
      let field = countdown[fields[i]];
      let trim = fields[i].length;
      if (field < 10) {
        if (field === 1) {
          trim--;
        }
        field = '0' + field;
      }
      field += ' ' + fields[i].slice(0, trim);
      countdown[fields[i]] = field;
    }
    this.setState({days: countdown.days, hours: countdown.hours, minutes: countdown.minutes, seconds: countdown.seconds});
  }
  componentWillMount() {
    this.countdown(this.props.endDate);
  }
  componentDidMount() {
    this.countdownInterval = window.setInterval(function() {
      this.countdown(this.props.endDate);
    }.bind(this), 500);
  }
  componentWillUnmount() {
    window.clearInterval(this.countdownInterval);
  }
  render() {
    return (
      <div className="countdown">
        <h2>You have {this.state.days}, {this.state.hours}, {this.state.minutes}, {this.state.seconds} until the next due date.</h2>
      </div>
    );
  }
}

CountdownComponent.defaultProps ={
  endDate: 'April 23, 2016 13:00'
}

export default CountdownComponent;
