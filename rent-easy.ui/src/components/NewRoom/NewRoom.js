import React from 'react';
import data from '../../data/addressChecker';
import uspsId from '../../data/myUspsId.json';

import './NewRoom.scss';

const myId = uspsId.usps.id;

class NewRoom extends React.Component {
  state = {
    street: '',
    city: '',
    state: '',
    zip: '',
    isMasterRoom: '',
    privateBathroom: '',
    title: '',
    roomDesc: '',
    availDate: '',
  }

  // getCityNState = () => {
  //   const xmlZip = `<CityStateLookupRequest USERID="${myId}"><ZipCode ID= "0"><Zip5>38134</Zip5></ZipCode></CityStateLookupRequest>`;
  //   data.getCityAndStateByZip(xmlZip)
  //     .then((resp) => {
  //       const parser = new DOMParser();
  //       const xmlDOM = parser.parseFromString(resp, 'text/xml');
  //       const city = xmlDOM.getElementsByTagName('City')[0].innerHTML;
  //       const state = xmlDOM.getElementsByTagName('State')[0].innerHTML;
  //       const zip = xmlDOM.getElementsByTagName('Zip5')[0].innerHTML;
  //     })
  //     .catch((error) => console.error(error));
  // }

  getUserInputValue = (e) => {
    const { value } = e.target;
    const inputName = e.target.name;
    if (inputName === 'isMasterRoom' || inputName === 'privateBathroom') {
      this.setState({ [inputName]: e.target.checked });
    }
    this.setState({ [inputName]: value });
  }


  componentDidMount() {
    // this.getCityNState();
  }

  render() {
    return (
      <form className="container">

        <div className="form-group">
          <label htmlFor="avail-date">Title</label>
          <input type="date" name="availDate" className="form-control" id="avail-date" onChange={this.getUserInputValue} />
        </div>

        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input name="title" className="form-control" id="title" onChange={this.getUserInputValue} />
        </div>

        <div className="form-group">
          <label htmlFor="roomDesc">Room Description</label>
          <textarea name="roomDesc" className="form-control" id="roomDesc" rows="3" onChange={this.getUserInputValue} ></textarea>
        </div>

        <div className="custom-control custom-checkbox mb-3">
          <input type="checkbox" className="custom-control-input" id="masterRoom" name="isMasterRoom" onChange={this.getUserInputValue} />
          <label className="custom-control-label" htmlFor="masterRoom">Master Bedroom</label>
        </div>

        <div className="custom-control custom-checkbox mb-3">
          <input type="checkbox" className="custom-control-input" id="privateBathroom" name="privateBathroom" onChange={this.getUserInputValue} />
          <label className="custom-control-label" htmlFor="privateBathroom">Private Bathroom</label>
        </div>

        <div className="form-row">
          <div className="col-5">
            <input name="street" id="street" className="form-control" placeholder="Street" onChange={this.getUserInputValue} />
          </div>

          <div className="col">
            <input name="city" id="city" className="form-control" placeholder="City" onChange={this.getUserInputValue} />
          </div>

          <div className="col-1">
            <input name="state" id="state" className="form-control" placeholder="ST" onChange={this.getUserInputValue} />
          </div>

          <div className="col">
            <input name="zip" id="zip" className="form-control" placeholder="Zip" onChange={this.getUserInputValue} />
          </div>
        </div>
      </form>
    );
  }
}

export default NewRoom;
