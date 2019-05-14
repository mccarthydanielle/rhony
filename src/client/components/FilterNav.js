import React from 'react'

import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
} from "shards-react";

export default function FilterNav() {

  return (
    <Navbar expand="md" >
      <Nav navbar>
        <NavItem>
          <NavLink href="/map">
            Seasons
              </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/cast">
            blah blah
              </NavLink>
        </NavItem>
      </Nav>
    </Navbar >
  );
}
