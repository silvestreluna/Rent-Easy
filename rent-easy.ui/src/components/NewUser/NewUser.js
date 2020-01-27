import React from 'react';
import Container from '@material-ui/core/Container';
import {
  Form, FormGroup, Label, Input,
} from 'reactstrap';

import './NewUser.scss';

class NewUser extends React.Component {
  state = {
    fname: '',
    lname: '',
    userEmail: '',
    phoneNue: '',
  }

  addUserToDb = (e) => {
    e.preventDefault();
    const userInfo = {
      fname: 'test',
      lname: 'last name',
      email: 'email@test.com',
      phoneNum: '123456789123',
    };
    console.error(userInfo);
  }

  render() {
    return (
      <Container maxWidth="lg">
        <div className="NewUser">
          <div className="new-user-form">
            <Form onSubmit={this.addUserToDb}>
              <div className="name-wrapper">
                <FormGroup>
                  <Label for="firstName"></Label>
                  <Input type="text" name="fname" id="firstName" placeholder="First Name" />
                </FormGroup>

                <FormGroup>
                  <Label for="lastName"></Label>
                  <Input type="text" name="lname" id="lastName" placeholder="Last Name" />
                </FormGroup>
              </div>
              <div className="email-phone-wrapper">
                <FormGroup>
                  <Label for="user-email"></Label>
                  <Input type="text" name="email" id="user-email" placeholder="Email"/>
                </FormGroup>
                <FormGroup>
                  <Label for="phoneNum"></Label>
                  <Input type="text" name="phone#" id="phoneNum" placeholder="Phone Number"/>
                </FormGroup>
              </div>
              <button type="submit" id="sign-in-btn">Sign in</button>
            </Form>
          </div>
        </div>
      </Container>
    );
  }
}

export default NewUser;
