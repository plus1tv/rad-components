import React from 'react';

import {
  Navbar,
  Navbrand,
  NavItemsLeft,
  NavItemsRight,
  NavItemsCenter,
  NavDrawer
} from './../../packages/rad-navbar/dist/Navbar.js';

export default function NavbarSelfContained(props) {
  return (
    <Navbar breakPoint={760} height={70} menu="independant" position="bottom">
      <Navbrand>
        <NavDrawer menuPosition="left" position="bottom">
          <ul>
            <li>Test</li>
          </ul>
        </NavDrawer>
        <h3>
          <Navbrand>
            <a to="/">Brand</a>
          </Navbrand>
        </h3>
      </Navbrand>
      <NavItemsLeft>
        <a>itemLeft1</a>
      </NavItemsLeft>
      <NavItemsCenter>
        <a>itemCenter1</a>
      </NavItemsCenter>
      <NavItemsRight>
        <a>itemRight1</a>
      </NavItemsRight>
    </Navbar>
  );
}
