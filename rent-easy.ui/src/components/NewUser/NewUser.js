import React from 'react';
import Container from '@material-ui/core/Container';
import {
  Form, FormGroup, Label, Input,
} from 'reactstrap';
import data from '../../data/userRequest';

import './NewUser.scss';

class NewUser extends React.Component {
  state = {
    fname: '',
    lname: '',
    userEmail: '',
    phoneNum: '',
  }

  resetState = () => {
    this.setState({
      fname: '',
      lname: '',
      userEmail: '',
      phoneNum: '',
    });
  }

  getUserInputValue = (e) => {
    const { value } = e.target;
    const inputName = e.target.name;
    this.setState({ [inputName]: value });
  }

  addUserToDb = (e) => {
    e.preventDefault();
    const userInfo = {
      fname: this.state.fname,
      lname: this.state.lname,
      email: this.state.userEmail,
      phoneNum: this.state.phoneNum,
    };
    data.addNewUser(userInfo)
      .then(() => {
        this.resetState();
        this.props.history.push('/roomDetail');
      })
      .catch((error) => console.error(error));
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
                  <Input type="text" value={this.state.fname} name="fname" id="firstName" placeholder="First Name" onChange={this.getUserInputValue} />
                </FormGroup>

                <FormGroup>
                  <Label for="lastName"></Label>
                  <Input type="text" value={this.state.lname} name="lname" id="lastName" placeholder="Last Name" onChange={this.getUserInputValue} />
                </FormGroup>
              </div>
              <div className="email-phone-wrapper">
                <FormGroup>
                  <Label for="user-email"></Label>
                  <Input type="text" value={this.state.userEmail} name="userEmail" id="user-email" placeholder="Email" onChange={this.getUserInputValue}/>
                </FormGroup>
                <FormGroup>
                  <Label for="phoneNum"></Label>
                  <Input type="text" value={this.state.phoneNum} name="phoneNum" id="phoneNum" placeholder="Phone Number" onChange={this.getUserInputValue} />
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
