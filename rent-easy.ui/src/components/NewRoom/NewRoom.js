import React from 'react';
// import data from '../../data/addressChecker';
// import uspsId from '../../data/myUspsId.json';
import roomData from '../../data/roomsRequest';

import './NewRoom.scss';

// const myId = uspsId.usps.id;

class NewRoom extends React.Component {
  state = {
    street: '',
    city: '',
    state: '',
    zip: '',
    isMasterRoom: false,
    privateBathroom: false,
    title: '',
    roomDesc: '',
    availDate: '',
    price: '',
    img: [],
  }

  getUserInputValue = (e) => {
    const { value } = e.target;
    const inputName = e.target.name;
    this.setState({ [inputName]: value });
  }

  checkboxChangeHandler = (e) => {
    const isChecked = e.target.checked;
    const inputName = e.target.name;
    this.setState({ [inputName]: isChecked });
  }

  imgSelectionHandler = (e) => {
    e.preventDefault();
    const allFiles = e.target.files;
    const tempImgs = [];
    const imgFiles = [];

    for (let i = 0; i < allFiles.length; i += 1) {
      const img = URL.createObjectURL(allFiles.item(i));
      tempImgs.push(img);
      imgFiles.push(allFiles[i]);
      console.error(allFiles[i]);
    }
    this.setState({ img: tempImgs });
  }

  addNewRoomToDb = (e) => {
    e.preventDefault();

    const newRoomObj = {
      street: this.state.street,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      isMasterRoom: this.state.isMasterRoom,
      privateBathroom: this.state.privateBathroom,
      title: this.state.title,
      roomDesc: this.state.roomDesc,
      availDate: this.state.availDate,
      price: this.state.price,
      userId: 1,
    };

    roomData.addNewRoom(newRoomObj)
      .then((resp) => {
        this.setState({
          street: '',
          city: '',
          state: '',
          zip: '',
          isMasterRoom: false,
          privateBathroom: false,
          title: '',
          roomDesc: '',
          availDate: '',
          price: '',
        });

        this.props.history.push('/home');
      })
      .catch((error) => console.error(error));
  }

  componentDidMount() {
    // this.getCityNState();
  }

  render() {
    const {
      street,
      city,
      state,
      zip,
      isMasterRoom,
      privateBathroom,
      title,
      roomDesc,
      availDate,
      price,
      img,
    } = this.state;

    const displayTempImgs = img.map((imgUrl) => <img src={imgUrl} key={imgUrl} alt="product img"/>);

    return (
      <form className="container" onSubmit={this.addNewRoomToDb}>

        <div className="form-group">
          <label htmlFor="avail-date">Move in date</label>
          <input type="date" name="availDate" className="form-control" id="avail-date" value={availDate} onChange={this.getUserInputValue} />
        </div>

        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input name="title" className="form-control" id="title" value={title} onChange={this.getUserInputValue} />
        </div>

        <div className="form-group">
          <label htmlFor="roomDesc">Room Description</label>
          <textarea name="roomDesc" className="form-control" id="roomDesc" rows="3" value={roomDesc} onChange={this.getUserInputValue} ></textarea>
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">$</span>
          </div>
          <input type="number" name="price" className="form-control" value={price} onChange={this.getUserInputValue} />
        </div>

        <div className="custom-control custom-checkbox mb-3">
          <input type="checkbox" className="custom-control-input" id="masterRoom" name="isMasterRoom" onChange={this.checkboxChangeHandler} checked={isMasterRoom} />
          <label className="custom-control-label" htmlFor="masterRoom">Master Bedroom</label>
        </div>

        <div className="custom-control custom-checkbox mb-3">
          <input type="checkbox" className="custom-control-input" id="privateBathroom" name="privateBathroom" onChange={this.checkboxChangeHandler} checked={privateBathroom} />
          <label className="custom-control-label" htmlFor="privateBathroom">Private Bathroom</label>
        </div>

        <div className="form-row">
          <div className="col-5">
            <input name="street" id="street" className="form-control" placeholder="Street" value={street} onChange={this.getUserInputValue} />
          </div>

          <div className="col">
            <input name="city" id="city" className="form-control" placeholder="City" value={city} onChange={this.getUserInputValue} />
          </div>

          <div className="col-1">
            <input name="state" id="state" className="form-control" placeholder="ST" value={state} onChange={this.getUserInputValue} />
          </div>

          <div className="col">
            <input name="zip" id="zip" className="form-control" placeholder="Zip" value={zip} onChange={this.getUserInputValue} />
          </div>
        </div>

        <div className="custom-file mt-5 mb-5">
          <input type="file" className="custom-file-input" id="room-imgs" multiple onChange={this.imgSelectionHandler}/>
          <label className="custom-file-label" htmlFor="room-imgs">Add at least 5 room images.</label>
        </div>

        <div className="diplay-temp-img">
          {
            (img)
              ? (
                <div className="temp-img-wrapper">
                  {displayTempImgs}
                </div>
              )
              : (
                ''
              )
          }
        </div>

        <div className="col-sm-10 mt-5">
          <button type="submit" className="btn btn-primary">Sign in</button>
        </div>
      </form>
    );
  }
}

export default NewRoom;
