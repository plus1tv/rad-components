// @flow
import React, { Component } from 'react';

export type PopoverProps = {
  className?: string,
  isOpen?: boolean,
  openPopover: Function,
  closePopover: Function,
  poperWidth?: string | number,
  poperHeight?: string | number,
  popeeHeight?: string | number,
  popeeWidth?: string | number,
  menu: Function | any,
  style?: Object
};

export type State = { isOpen: boolean };

export class Popover extends Component {
  props: PopoverProps;
  state: State;
  popover: any;

  constructor(props: PopoverProps) {
    super(props);
    if (!this.props.isOpen) {
      this.state = { isOpen: false };
    }
  }

  componentDidMount() {
    window.addEventListener('click', this.handleOuterClick.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleOuterClick.bind(this));
  }

  handleOuterClick(e: any) {
    if (this.popover !== null) {
      if (this.props.closePopover) {
        if (!this.popover.contains(e.target) && this.props.isOpen) {
          this.props.closePopover();
        }
      }
      if (!this.popover.contains(e.target) && this.state.isOpen) {
        this.toggle();
      }
    }
  }

  toggle() {
    this.setState((prevState: State, currProps: PopoverProps) => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    const styles = {
      container: this.props.container || {},
      popee: {
        padding: 0,
        margin: 0,
        height: this.props.popeeHeight,
        width: this.props.poperHeight || 30
      },
      popover: {
        display: 'flex',
        position: 'absolute',
        flexDirection: 'column',
        width: this.props.poperWidth || 100,
        height: this.props.poperHeight,
        listStyle: 'none',
        fontSize: 14,
        padding: 0,
        padding: 10,
        margin: 2,
        backgroundColor: this.props.backgroundColor || '#fff',
        boxShadow: `0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)`,
        zIndex: 20
      },
      popoverClosed: { display: 'none' },
      popoverItem: { margin: 5 }
    };

    let children = [];

    if (this.props.children) {
      if (Array.isArray(this.props.children)) children = this.props.children;
      else children = [ this.props.children ];
    }

    return (
      <div
        className={this.props.className || ''}
        style={styles.container}
        ref={popover => this.popover = popover}
      >
        <div
          onClick={
            () =>
              this.props.openPopover
                ? this.props.isOpen
                  ? this.props.closePopover()
                  : this.props.openPopover()
                : this.toggle()
          }
          style={styles.popee}
        >
          <this.props.Menu />
        </div>
        {this.props.isOpen || this.state.isOpen ? <ul style={styles.popover}>
              {children.map((child: any, key: number) => {
                  return (
                    <li key={key} style={styles.popoverItem}>
                      {React.cloneElement(child)}
                    </li>
                  );
                })}
            </ul> : null}
      </div>
    );
  }
}
