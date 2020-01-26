import React from 'react';
import Layout from '../components/Layout/Layout';
import NavbarClass from '../components/NavBar/Navbar';
import Footer from '../components/Footer/Footer';
import './App.scss';

function App() {
  return (
    <div className="App">
      <NavbarClass />
      <Layout />
      <Footer />
    </div>
  );
}

export default App;
