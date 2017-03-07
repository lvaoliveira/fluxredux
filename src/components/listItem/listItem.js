import React from 'react';
import Item from '../item/item';
import ListItemStore from './listItem.store';

function getInitialState() {
  return {
    items: ListItemStore.getItem(),
  };
}
class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = getInitialState();
  }
  componentDidMount() {
    ListItemStore.addChangeListener(this.onChange.bind(this));
  }

  onChange() {
    this.setState(getInitialState());
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
          { this.state.items.map(this.renderItems) }
        </ul>
      </div>
    );
  }
}
export default ListItem;
