import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import NavbarClass from '../components/NavBar/Navbar';
import NavLinks from '../components/NavLinks/NavLinks';
// import Footer from '../components/Footer/Footer';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarClass />
        <NavLinks />
        <Layout />
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
