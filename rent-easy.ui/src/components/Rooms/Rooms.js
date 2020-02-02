import React from 'react';
import data from '../../data/roomsRequest';
import RoomTile from '../RoomTile/RoomTile';

import './Rooms.scss';

class Rooms extends React.Component {
  state = {
    rooms: [],
  }

  getRoomsOnLoad = () => {
    data.getAllRooms()
      .then((resp) => this.setState({ rooms: resp }))
      .catch((error) => console.error(error));
  }

  componentDidMount() {
    this.getRoomsOnLoad();
  }

  render() {
    const { rooms } = this.state;

    const allRooms = rooms.map((room) => <RoomTile key={room.id} room={room} />);
    return (
      <div className="Rooms">
        { allRooms }
      </div>
    );
  }
}

export default Rooms;
