import React from 'react';
import Anime from 'react-anime';
import { Popover } from './../../../../packages/rad-popover/dist/Popover.min.js';

const Menu = (props) => <div style={{border: '1px solid lightgrey', textAlign: 'center', color: '#8574FF', backgroundColor: '#FF9EF8'}}><p style={{margin: 0,}}>:</p></div>;

export function PopoverAnimated (props) {
  return (
    <Popover Menu={Menu}>
      <Anime>
        <p style={{margin: 0}}>Item 1</p>
        <p style={{margin: 0}}>Item 2</p>
        <p style={{margin: 0}}>Item 3</p>
        <p style={{margin: 0}}>Item 4</p>
      </Anime>
    </Popover>
  );
}

export var PopoverAnimatedSource =
`
import React from 'react';
import { Popover } from 'radcomponents;

const Menu = (props) => <div><p>:</p></div>;

export function PopoverSelfContained (props) {
  return (
    <Popover Menu={Menu}>
      <p>Item 1</p>
      <p>Item 2</p>
      <p>Item 3</p>
      <p>Item 4</p>
    </Popover>
  );
}
`;
