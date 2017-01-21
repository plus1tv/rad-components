import React from 'react';
import { Navbar, Navbrand, NavItemsLeft, NavItemsRight } from 'rad-navbar';

export function NavbarSelfContained (props) {
  return (
    <Navbar>
      <a to="/">
        <Navbrand title="SomeApp"/>
      </a>
      <NavItemsLeft>
        <a>itemLeft1</a>
      </NavItemsLeft>
      <NavItemsRight>
        <a>itemRight1</a>
      </NavItemsRight>
    </Navbar>
  );
}

export var NavbarSelfContainedSource =
`
import React from 'react';
import { Navbar, NavItemsLeft, NavItemsRight } from 'radcomponents';

function NavbarSelfContained (props) {
  return (
    <Navbar>
      <a to="/">
        <Navbrand title="SomeApp"/>
      </a>
      <NavItemsLeft>
        <a>itemLeft1</a>
        <a>itemLeft2</a>
      </NavItemsLeft>
      <NavItemsRight>
        <a>itemRight1</a>
        <a>itemRight2</a>
      </NavItemsRight>
    </Navbar>
  );
}
`;

export var NavbarProps =
`
Navbar.propTypes = {
  height: React.PropTypes.number,
  shadow: React.PropTypes.string,
};

Navbrand.propTypes = {
  logo: React.PropTypes.string,
  title: React.PropTypes.string,
};
`;
