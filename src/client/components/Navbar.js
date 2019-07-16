import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'shards-react';

export default function NavBar() {
  return (
    <Navbar type="light" expand="md">
      <NavbarBrand style={{ fontSize: '24px' }} href="/map">
        RHONY for fun.
      </NavbarBrand>
      <Nav navbar>
        <NavItem>
          <NavLink style={{ fontSize: '20px' }} href="/map">
            Map
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={{ fontSize: '20px' }} href="/cast">
            Cast
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={{ fontSize: '20px' }} href="/contact">
            Contact
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={{ fontSize: '20px' }} href="/about">
            About
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}
