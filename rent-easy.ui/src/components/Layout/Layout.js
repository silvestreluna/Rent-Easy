import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NewUser from '../NewUser/NewUser';
import Home from '../Home/Home';

import './Layout.scss';

class Layout extends React.Component {
  render() {
    return (
      <div className="Layout">
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/new-user">
            <NewUser />
          </Route>
          <Redirect from="*" to="/home" />
        </Switch>
      </div>
    );
  }
}

export default Layout;
