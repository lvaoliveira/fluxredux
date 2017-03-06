import React from 'react';
import Item from '../item/item';

import data from '../../data';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: false,
    };
  }
  renderItems(item, i) {
    console.log(item);
    return (
      <Item time={item.time} date={item.date} title={item.title} text={item.text} origin={item.origin} key={i} />
    );
  }
  render() {
    return (
      <ul className="listItem--wrapper">
        <li>
          { data.map(this.renderItems) }
        </li>
      </ul>
    );
  }
}
export default ListItem;
