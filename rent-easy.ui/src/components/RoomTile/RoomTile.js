import React from 'react';

import './RoomTile.scss';

class RoomTile extends React.Component {
  render() {
    const { room } = this.props;
    return (
      <div className="RoomTile">
        <div className="card-header">
          <div className="user-wrapper">
            <div className="user-avatar">
            </div>
          </div>
          <div className="city">
            <p>{room.city} {room.state}</p>
            <p>September 14,2016</p>
          </div>
        </div>
        <div className="card-img">
        </div>
        <div className="card-body">
          <p>This impressive paella is a perfect party
            dish and a fun meal to cook together with
            your guests. Add 1 cup of frozen peas along
            with the mussels, if you like.</p>
        </div>
        <div className="card-footer">
          <p>card footer</p>
        </div>
      </div>
    );
  }
}

export default RoomTile;
