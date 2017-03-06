import React from 'react';
import Time from '../time/time';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: false,
    };
  }
  render() {
    const { time, date, title, text, origin } = this.props;
    return (
      <div>
        <Time time={time} date={date} />
        <i className={`fa fa-${origin}`} />
        <div className="listItem--item">
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      </div>
    );
  }
}
export default Item;
