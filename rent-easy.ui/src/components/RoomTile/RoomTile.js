import React from 'react';
import { Link } from 'react-router-dom';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import './RoomTile.scss';

class RoomTile extends React.Component {
  render() {
    const { room } = this.props;

    const detailPage = `/roomDetail/${room.id}`;
    return (
      <div className="RoomTile">
        <div className="card-img">
        </div>
        <div className="card-body">
          <div className="card-header">
            <div className="head-city-wrapper">
              <p>One bed room available</p>
              <p className="city-name">{room.city}, {room.state}</p>
            </div>
          </div>
          <p>This impressive paella is a perfect party
            dish and a fun meal to cook together with
            your guests. Add 1 cup of frozen peas along
            with the mussels, if you like.</p>
        </div>
        <div className="card-footer">
          <div className="user-wrapper">
            <div className="user">
              <div className="user-avatar">
              </div>
              <p>Jeressia WIllis</p>
            </div>
            <div className="info-icon">
              <Link onClick={this.roomHandler} to={detailPage}>
                <MoreVertIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RoomTile;
