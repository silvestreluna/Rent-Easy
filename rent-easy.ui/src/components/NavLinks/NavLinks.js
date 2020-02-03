import React from 'react';
import { Link } from 'react-router-dom';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import AddCircleOutlineSharpIcon from '@material-ui/icons/AddCircleOutlineSharp';

import './NavLinks.scss';

class NavLinks extends React.Component {
  render() {
    return (
      <div className="links-wrapper">
      <Link className="icon" to="/home">
        <HomeSharpIcon />
      </Link>

      <Link className="icon" to="/newRoom">
        <AddCircleOutlineSharpIcon />
      </Link>

      <Link className="icon" to="/new-user">
        <PersonAddOutlinedIcon />
      </Link>
    </div>
    );
  }
}

export default NavLinks;
