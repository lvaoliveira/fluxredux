import React from 'react';
import ListItem from '../listItem/listItem';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: false,
    };
  }

  render() {
    return (
      <div>
        <ListItem />
      </div>
    );
  }
}
export default Main;
