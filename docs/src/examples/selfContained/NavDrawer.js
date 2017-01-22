import React from 'react';
import { Navdrawer } from 'rad-navdrawer';

export function NavDrawerSelfContained (props) {
  return (
    <Navdrawer placement="right">
      <p>1</p>
      <p>2</p>
    </Navdrawer>
  );
}

export var NavDrawerSelfContainedSource =
`
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

export var NavDrawerProps =
`
NavDrawer.propType = {
  placement: React.PropTypes.oneOf(['right', 'left']),
}
`;
