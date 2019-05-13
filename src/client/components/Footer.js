import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "shards-react";

export default function Footer() {

  return (
    <Navbar style={{ height: 40, bottom: 0, left: 0, right: 0, position: 'absolute' }} type="dark" theme="light" expand="md">
      <NavbarBrand href="#">RHONY eFinder</NavbarBrand>
      <Nav navbar>
        <NavItem>
          <NavLink to="/map">
            Map
              </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/cast">
            Cast
              </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/form">
            Add Location Form / Contact
              </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}
