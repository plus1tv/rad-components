import React from 'react';
import { Popover } from 'rad-popover';

const Menu = props => (
  <div
    style={{
      border: '1px solid lightgrey',
      textAlign: 'center',
      color: '#8574FF',
      backgroundColor: '#FF9EF8'
    }}
  >
    <p style={{ margin: 0 }}>:</p>
  </div>
);

export function PopoverSelfContained(props) {
  return (
    <Popover Menu={Menu}>
      <p style={{ margin: 0 }}>Item 1</p>
      <p style={{ margin: 0 }}>Item 2</p>
      <p style={{ margin: 0 }}>Item 3</p>
      <p style={{ margin: 0 }}>Item 4</p>
    </Popover>
  );
}

export var PopoverSelfContainedSource = `
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

export var PopoverProps = `
type PopoverProps = {
  className?: string,
  isOpen?: boolean,
  openPopover: Function,
  closePopover: Function,
  poperWidth?: string | number,
  poperHeight?: string | number,
  popeeHeight?: string | number,
  popeeWidth?: string | number,
  menu: Function | any,
  styles?: {
    popee?: Object,
    popover?: Object,
    popoverClosed?: Object,
    popoverItem?: Object
  },
  children?: any
};
type State = { isOpen: boolean };
`;
