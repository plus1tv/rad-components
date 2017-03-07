import React from 'react';
import { Navbar, Navbrand, NavItemsLeft, NavItemsRight } from 'rad-navbar';

export function NavbarSelfContained(props) {
  return (
    <Navbar>
      <Navbrand>
        <h3>
          <Navbrand>
            <a to="/">Brand</a>
          </Navbrand>
        </h3>
      </Navbrand>
      <NavItemsLeft>
        <a>itemLeft1</a>
      </NavItemsLeft>
      <NavItemsRight>
        <a>itemRight1</a>
      </NavItemsRight>
    </Navbar>
  );
}

export var NavbarSelfContainedSource = `
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

export var NavbarProps = `
type NavbarProps = {
  className?: string,
  breakPoint?: number,
  showMenu?: boolean,
  openMenu?: Function,
  closeMenu?: Function,
  height?: string | number,
  shadow?: string,
  styles?: {
    navbar?: Object,
    navbtn?: Object,
    navdrawer?: { navMenu?: Object, navMenuBtn?: Object, navExitBtn?: Object }
  },
  children: any
};

type NavbarState = { height: number, width: number, showMenu?: boolean };

type NavbrandProps = {
  className?: string,
  children: any,
  styles?: Object
};

type NavItemsLeftProps = {
  className?: string,
  width: number,
  breakPoint?: number,
  styles?: { navItems?: Object, navItemsSmall?: Object },
  children: any
};

type NavItemsRightProps = {
  className?: string,
  width: number,
  breakPoint?: number,
  styles?: { navItems?: Object, navItemsSmall?: Object },
  children: any
};
`;
