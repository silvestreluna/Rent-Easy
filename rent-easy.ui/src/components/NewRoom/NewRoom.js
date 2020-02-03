import React from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container';

import './NewRoom.scss';

const baseUrl = 'http://production.shippingapis.com/ShippingAPI.dll?API=CityStateLookup&XML=';

class NewRoom extends React.Component {
  loadAddress = () => {
  }

  render() {
    return (
      <Container className="NewRoom" maxWidth="lg">
        <h1>hello</h1>
      </Container>
    );
  }
}

export default NewRoom;
