import React from 'react';
import Anime from 'react-anime';
import { Navdrawer } from 'rad-navdrawer';

export function NavDrawerAnimated(props) {
  return (
    <Navdrawer placement="right">
      <Anime>
        <p>1</p>
        <p>2</p>
      </Anime>
    </Navdrawer>
  );
}

export var NavDrawerAnimatedSource = `
import React from 'react';
import { Navdrawer } from 'radcomponents';

function NavDrawerAnimated (props) {
  return (
    <Navdrawer placement="right">
      <p>1</p>
      <p>2</p>
    </Navdrawer>
  );
}
`;
