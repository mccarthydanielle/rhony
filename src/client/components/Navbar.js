import React from 'react';

import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse,
} from 'shards-react';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
    };
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar() {
    this.setState({
      ...this.state,
      ...{
        collapseOpen: !this.state.collapseOpen,
      },
    });
  }

  render() {
    return (
      <Navbar type="light" expand="md" style={{ backgroundColor: '#393F49' }}>
        <NavbarBrand style={{ color: '#FFFFFF', fontSize: '24px' }} href="/map">
          RHONY for fun.
        </NavbarBrand>
        <NavbarToggler onClick={this.toggleNavbar} />

        <Collapse open={this.state.collapseOpen} navbar>
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
                Contact
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={{ color: '#FFFFFF', fontSize: '20px' }}
                href="/about"
              >
                About
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
