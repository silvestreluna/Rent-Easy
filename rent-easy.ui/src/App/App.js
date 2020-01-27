import React from 'react';
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import NavbarClass from '../components/NavBar/Navbar';
import Footer from '../components/Footer/Footer';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarClass />
        <div className="links-wrapper">
          <Link className="new-user-btn" to="/home">
            Home
          </Link>
          <Link className="new-user-btn" to="/new-user">
            New User
          </Link>
        </div>
        <Layout />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
