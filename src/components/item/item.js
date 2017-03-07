import React from 'react';
import Time from '../time/time';
import ListItemActions from '../listItem/listItem.action';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.handleForm = this.handleForm.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
    this.state = {
      text: '',
      title: '',
    };
  }
  updateInputValue(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleForm(e) {
    e.preventDefault();
    ListItemActions.addItem(this.state);
    e.target.reset();
  }
  renderContent() {
    let content = '';
    if (this.props.new) {
      content = (
        <form className="listItem--item listItem--form" onSubmit={this.handleForm}>
          <input type="text" name="title" placeholder="Title" onChange={this.updateInputValue} />
          <textarea name="text" placeholder="text" onChange={this.updateInputValue} />
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
