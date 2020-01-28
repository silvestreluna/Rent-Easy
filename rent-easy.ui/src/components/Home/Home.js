import React from 'react';
import Rooms from '../Rooms/Rooms';

class Home extends React.Component {
  state = {
    roomsObj: [],
  }

  render() {
    return (
      <div>
        <Rooms />
      </div>
    );
  }
}

export default Home;
