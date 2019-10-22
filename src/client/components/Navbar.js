import React from 'react';

import { withRouter } from 'react-router';

import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse,
} from 'shards-react';

const filterIcon = require('../../assets/filter.svg');
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.props.toggleScreen);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.props.toggleScreen);
  }

  toggleNavbar = () => {
    this.setState({
      collapseOpen: !this.state.collapseOpen,
    });
  };

  render() {
    const showFilter =
      this.props.location.pathname === '/' ||
      this.props.location.pathname === '/map';
    return (
      <Navbar
        expand="md"
        style={{
          zIndex: 3000,
          width: '100%',
          position: 'fixed',
          backgroundColor: '#393F49',
        }}
      >
        {!this.props.largeScreen && showFilter ? (
          <NavLink onClick={this.props.toggleFilterNav}>
            <div>
              <img
                style={{ height: '30px', width: 'auto' }}
                src={filterIcon}
                alt="filter"
              />
            </div>
          </NavLink>
        ) : (
          <NavbarBrand
            style={{ color: '#FFFFFF', fontSize: '24px' }}
            href="/map"
          >
            RHONY for fun.
          </NavbarBrand>
        )}

        <NavbarToggler onClick={this.toggleNavbar} />

        <Collapse
          style={{ marginLeft: '25px', color: 'white', left: 0 }}
          open={this.state.collapseOpen}
          navbar
          justified
        >
          <Nav navbar>
            <NavItem>
              <NavLink
                style={{ color: '#FFFFFF', fontSize: '20px' }}
                href="/map"
              >
                Map
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={{ color: '#FFFFFF', fontSize: '20px' }}
                href="/cast"
              >
                Cast
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={{ color: '#FFFFFF', fontSize: '20px' }}
                href="/contact"
              >
                Get in Touch
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default withRouter(NavBar);
