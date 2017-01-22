import React, { Component } from 'react';
import { Navbar, Navbrand, NavItemsRight, NavItemsLeft } from 'rad-navbar';

export class NavbarControlled extends Component {
  constructor (props) {
    super(props);
    this.state = {
      showMenu: false,
    }
  }

  openMenu () {
    alert('Do something when you open the menu');
    this.setState((prevState) => ({showMenu: true}));
  }

  closeMenu () {
    alert('Do something when you close the menu');
    this.setState((prevState) => ({showMenu: false}));
  }

  render () {
    return (
      <Navbar showMenu={this.state.showMenu}
              openMenu={() => this.openMenu()}
              closeMenu={() => this.closeMenu()}>
        <Navbrand>
          <a to="/">Brand</a>
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
}

export var NavbarControlledSource =
`
import React, { Component } from 'react';
import { Navbar, Navbrand, NavItemsRight, NavItemsLeft } from 'radcomponents';

export class NavbarControlled extends Component {
  constructor (props) {
    super(props);
    this.state = {
      showMenu: false,
    }
  }

  openMenu () {
    alert('Do something when you open the menu');
    this.setState((prevState) => ({showMenu: true}));
  }

  closeMenu () {
    alert('Do something when you close the menu');
    this.setState((prevState) => ({showMenu: false}));
  }

  render () {
    return (
      <Navbar showMenu={this.state.showMenu}
              openMenu={() => this.openMenu()}
              closeMenu={() => this.closeMenu()}>
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
}
`;
