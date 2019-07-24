import React from 'react';
import '../css/App.css';
import Navbar from './Navbar';
import Routes from '../routes';

import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import '../css/App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      largeScreen: true,
      showFilterNav: true,
    };
  }
  toggleScreen = () => {
    this.setState(
      { largeScreen: window.innerWidth > 800 },
      this.checkScreenSize
    );
  };

  toggleFilterNav = () => {
    this.setState({ showFilterNav: !this.state.showFilterNav });
  };

  checkScreenSize = () => {
    if (window.innerWidth < 800) {
      this.setState({ showFilterNav: false });
    } else {
      this.setState({ showFilterNav: true });
    }
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar
            largeScreen={this.state.largeScreen}
            toggleScreen={this.toggleScreen}
            toggleFilterNav={this.toggleFilterNav}
          />
          <Routes showFilterNav={this.state.showFilterNav} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
