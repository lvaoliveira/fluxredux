import React from 'react';
import Time from '../time/time';

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  renderContent() {
    let content = '';
    if (this.props.new) {
      content = (
        <form className="listItem--item listItem--form">
          <input type="text" name="title" placeholder="Title" />
          <textarea name="text" placeholder="text" />
          <button type="submit" className="listItem--button">
            <span className="listItem--button_label">
              <i className="fa fa-floppy-o" aria-hidden="true" />
            </span>Save
          </button>
        </form>
      );
    } else {
      content = (
        <div className="listItem--item">
          <h2>{this.props.title}</h2>
          <p>{this.props.text}</p>
        </div>
      );
    }
    return content;
  }
  render() {
    const { time, date, origin } = this.props;
    return (
      <div>
        <Time time={time} date={date} />
        <i className={`timeLine--icon fa fa-${origin}`} />
        {this.renderContent()}
      </div>
    );
  }
}
Item.propTypes = {
  new: React.PropTypes.bool,
  title: React.PropTypes.string,
  text: React.PropTypes.string,
  time: React.PropTypes.string,
  date: React.PropTypes.string,
  origin: React.PropTypes.string,
};
Item.defaultProps = {
  new: true,
  title: '',
  text: '',
  time: '',
  date: '',
  origin: '',
};
export default Item;
