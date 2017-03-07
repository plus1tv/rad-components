import React from 'react';
import { Navdrawer } from 'rad-navdrawer';

export function NavDrawerSelfContained(props) {
  return (
    <Navdrawer placement="right">
      <p>1</p>
      <p>2</p>
    </Navdrawer>
  );
}

export var NavDrawerSelfContainedSource = `
import React from 'react';
import { NavDrawer } from 'radcomponents';

function NavDrawerSelfContained (props) {
  return (
    <Navdrawer placement="right">
      <p>1</p>
      <p>2</p>
    </Navdrawer>
  );
}
`;

export var NavDrawerProps = `
type NavdrawerProps = {
  showMenu?: boolean,
  openMenu?: Function,
  closeMenu?: Function,
  menuIcon?: any,
  closeIcon?: any,
  placement: 'right' | 'left',
  styles?: { navMenu?: Object, navMenuBtn?: Object, navExitBtn?: Object },
  children: any
};
type NavdrawerState = { showMenu: boolean };
`;
