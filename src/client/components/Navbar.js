import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "shards-react";

export default function NavBar() {

  return (
    <Navbar type="dark" theme="primary" expand="md">
      <NavbarBrand href="/map">RHONY Finder</NavbarBrand>
      <Nav navbar>
        <NavItem>
          <NavLink href="/map">
            Map
              </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/cast">
            Cast
              </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/contribute">
            Contribute
              </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/about">
            About
              </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}
