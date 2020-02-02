import React from 'react';
import dataRequest from '../../data/roomsRequest';

import './RoomDetailPage.scss';


class RoomDetailPage extends React.Component {
  state = {
    room: [],
  }

  loadRoom = () => {
    const roomId = this.props.match.params.id;
    dataRequest.getRoomById(roomId)
      .then((resp) => this.setState({ room: resp.data }))
      .catch((error) => console.error(error));
  }

  componentDidMount() {
    this.loadRoom();
  }

  render() {
    const { room } = this.state;
    console.error(room);
    return (
      <div className="RoomDetailPage">
        <div className="main">
          <div className="content">
            <div className="left">
              <div className="img-container">
              </div>
            </div>

            <div className="right">
              <div className="img-wrap-one">
                <div className="img1"></div>
                <div className="img2"></div>

              </div>

              <div className="img-wrap-two">
                <div className="img1"></div>
                <div className="img2"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="details-content">
          <div className="title">
            <p>{room.title}</p>
          </div>

          <div className="room-details">
            <div className="room-details-wrapper">
              {(room.isMasterRoom) ? (<p>Master Bedroom </p>) : ('')}
              {(room.privateBathroom) ? (<p>Private Bathroom</p>) : ('')}
            </div>
          </div>
          <div className="address-wrapper">
            <p>{room.street} {room.city}, {room.state} {room.zip}</p>

          </div>
          <div>
            <p>{room.roomDesc}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default RoomDetailPage;
