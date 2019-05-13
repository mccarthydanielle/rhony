import React from 'react';
import '../css/App.css';
import Navbar from './Navbar'
import Footer from './Footer'
import Routes from '../routes'

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
