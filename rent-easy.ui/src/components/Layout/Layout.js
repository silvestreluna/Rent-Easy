import React from 'react';
import {
  Switch, Route, Redirect,
} from 'react-router-dom';
import NewUser from '../NewUser/NewUser';
import Home from '../Home/Home';
import RoomDetailPage from '../RoomDetailPage/RoomDetailPage';

import './Layout.scss';

class Layout extends React.Component {
  render() {
    return (
      <div className="Layout">
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/new-user" component={NewUser}/>
          <Route exact path="/roomDetail/:id" component={RoomDetailPage}/>
          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

export default Layout;
