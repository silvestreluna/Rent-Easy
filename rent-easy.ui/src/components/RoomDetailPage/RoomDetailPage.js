import React from 'react';
import Map from '../Map/Map';
import PhotoGallery from './PhotoGallery';
import dataRequest from '../../data/roomsRequest';
import geoData from '../../data/geoDataRequest';

import './RoomDetailPage.scss';


class RoomDetailPage extends React.Component {
  state = {
    room: [],
    lat: '',
    lon: '',
    displayName: '',
  }

  loadRoom = () => {
    const roomId = this.props.match.params.id;
    dataRequest.getRoomById(roomId)
      .then((resp) => {
        this.setState({ room: resp.data });
        this.getLocationData();
      })
      .catch((error) => console.error(error));
  }

  getLocationData = () => {
    const { street } = this.state.room;
    const { city } = this.state.room;
    const { state } = this.state.room;
    const { zip } = this.state.room;

    const address = `${street}, ${city} ${state} ${zip}`;
    geoData.getGeoLoc(address)
      .then((resp) => {
        this.setState({
          lat: resp.lat,
          lon: resp.lon,
          displayName: resp.display_name,
        });
      })
      .catch();
  }

  componentDidMount() {
    this.loadRoom();
  }

  render() {
    const {
      room,
      lat,
      lon,
      displayName,
    } = this.state;
    return (
      <div className="RoomDetailPage">
        <div className="main">
          <div className="content">
            <PhotoGallery />
            {/* <div className="left">
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
            {/* </div> */}
          </div>
        </div>

        <div className="details-content">
          {/* {
            (room.images !== undefined && room.images.length > 0)
              ? (<img src={`data:image/jpg;base64,${room.images[0].url}`} />)
              : ('')
          } */}
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

          <div className="map-container">
            <Map lat={lat} lon={lon} displayName={displayName}/>
          </div>
        </div>
      </div>
    );
  }
}

export default RoomDetailPage;
