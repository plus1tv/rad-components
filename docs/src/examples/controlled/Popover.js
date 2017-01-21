import React, { Component } from 'react';
import { Popover } from './../../../../packages/rad-popover/dist/Popover.min.js';

const Menu = (props) => <div style={{border: '1px solid lightgrey', textAlign: 'center', color: '#8574FF', backgroundColor: '#FF9EF8'}}><p style={{margin: 0,}}>:</p></div>

export class PopoverControlled extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  openPopover () {
    alert('Do something when you OPEN the <Popover />');
    this.setState((prevState) => ({isOpen: true}));
  }

  closePopover () {
    alert('Do something when you CLOSE the <Popover />');
    this.setState((prevState) => ({isOpen: false}));
  }

  render () {
    return (
      <Popover isOpen={this.state.isOpen}
               closePopover={() => this.closePopover()}
               openPopover={() => this.openPopover()}
               Menu={Menu}>
        <p style={{margin: 0}}>Item 1</p>
        <p style={{margin: 0}}>Item 2</p>
        <p style={{margin: 0}}>Item 3</p>
        <p style={{margin: 0}}>Item 4</p>
      </Popover>
    );
  }
}

export var PopoverControlledSource =
`import React, { Component } from 'react';
import { Popover } from 'radcomponents';

class PopoverControlled extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  openPopover () {
    alert('Do something when you OPEN the <Popover />');
    this.setState((prevState) => ({isOpen: true}));
  }

  closePopover () {
    alert('Do something when you CLOSE the <Popover />');
    this.setState((prevState) => ({isOpen: false}));
  }

  render () {
    return (
      <Popover isOpen={this.state.isOpen}
               closePopover={() => this.closePopover()}
               openPopover={() => this.openPopover()}
               Menu={Menu}>
        <p style={{margin: 0}}>Item 1</p>
        <p style={{margin: 0}}>Item 2</p>
        <p style={{margin: 0}}>Item 3</p>
        <p style={{margin: 0}}>Item 4</p>
      </Popover>
    );
  }
}
`;
