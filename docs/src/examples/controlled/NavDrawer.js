import React, { Component } from 'react';
import { Navdrawer } from 'rad-navdrawer';

export class NavDrawerControlled extends Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: false };
  }

  openMenu() {
    alert('Do something when you open the menu');
    this.setState(prevState => ({ showMenu: true }));
  }

  closeMenu() {
    alert('Do something when you close the menu');
    this.setState(prevState => ({ showMenu: false }));
  }

  render() {
    return (
      <Navdrawer
        placement="right"
        showMenu={this.state.showMenu}
        openMenu={() => this.openMenu()}
        closeMenu={() => this.closeMenu()}
      >
        <p>1</p>
        <p>2</p>
      </Navdrawer>
    );
  }
}

export var NavDrawerControlledSource = `
import React, { Component } from 'react';
import { NavDrawer } from 'radcomponents';

export class NavDrawerControlled extends Component {
  constructor () {
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
      <Navdrawer placement="right"
                 showMenu={showMenu}
                 openMenu={() => this.openMenu()}
                 closeMenu={() => this.closeMenu()}>
        <p>1</p>
        <p>2</p>
      </Navdrawer>
    );
  }
}
`;
