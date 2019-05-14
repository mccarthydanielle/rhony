import React from 'react'

import {
  Nav,
  NavItem,
  NavLink,
} from "shards-react";

export default function FilterNav() {

  return (
    <Nav navbar
      style={{ border: 'red solid 1px', left: 0, height: '100vh', width: 300 }} expand="md"
    >
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
    </Nav >
  );
}
