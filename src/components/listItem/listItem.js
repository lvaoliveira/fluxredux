import React from 'react';
import Item from '../item/item';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  renderItems(item, i) {
    return (
      <li key={i}>
        <Item
          time={item.time}
          date={item.date}
          title={item.title}
          text={item.text}
          origin={item.origin}
          new={false}
        />
      </li>
    );
  }

  render() {
    return (
      <div>
        <ul className="listItem--wrapper">
          <li>
            <Item origin="file" />
          </li>
        </ul>
      </div>
    );
  }
}
export default ListItem;
