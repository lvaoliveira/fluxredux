import React from 'react';

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: false,
    };
  }
  render() {
    console.log(this.props);
    const { time, date } = this.props;
    return (
      <time className="listItem--time"><span>{ date }</span> <span>{ time } </span></time>   
    );
  }
}
export default Time;
