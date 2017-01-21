import React from 'react';
import Anime from 'react-anime';
import { NavDrawer } from 'rad-navdrawer';

export function NavDrawerAnimated (props) {
  return (
    <NavDrawer placement="right">
      <Anime>
        <p>1</p>
        <p>2</p>
      </Anime>
    </NavDrawer>
  );
}

export var NavDrawerAnimatedSource =
`
import React from 'react';
import { NavDrawer } from 'radcomponents';

function NavDrawerAnimated (props) {
  return (
    <NavDrawer placement="right">
      <p>1</p>
      <p>2</p>
    </NavDrawer>
  );
}
`;
