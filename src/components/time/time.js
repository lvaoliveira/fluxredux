import React from 'react';

class Time extends React.Component {
  render() {
    const { time, date } = this.props;
    return (
      <time className="listItem--time"><span>{ date }</span> <span>{ time } </span></time>
    );
  }
}
Time.propTypes = {
  time: React.PropTypes.string,
  date: React.PropTypes.string,
};
Time.defaultProps = {
  time: '',
  date: '',
};
export default Time;
