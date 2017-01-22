// @flow
import React, { Component } from 'react';

export type NavdrawerProps = {
  showMenu?: boolean,
  openMenu?: Function,
  closeMenu?: Function,
  menuIcon?: any,
  closeIcon?: any,
  placement: 'right' | 'left'
};

export type NavdrawerState = { showMenu: boolean };

export class Navdrawer extends Component {
  props: NavdrawerProps;
  state: NavdrawerState;
  _showMenu: Function;

  constructor(props: NavdrawerProps) {
    super(props);
    if (!props.showMenu || !props.openMenu || !props.closeMeu) {
      this.state = { showMenu: false };
    }
  }

  _showMenu() {
    this.setState((prevState: NavdrawerState, currProps: NavdrawerProps) => ({
      showMenu: !prevState.showMenu
    }));
  }

  render() {
    const styles = {
      menuLeft: { position: 'absolute', left: 0, top: 0 },
      menuRight: { position: 'absolute', right: 0, top: 0 },
      NavMenu: {
        width: 300,
        display: 'flex',
        marginLeft: 'auto',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: `100vh`,
        boxShadow: this.props.shadow ||
          `0 0px 3px rgba(0,0,0,0.12), 0 2px 6px rgba(0,0,0,0.24)`,
        backgroundColor: '#fff',
        zIndex: 1500
      },
      NavMenuBtn: { display: 'flex', fontSize: 28 },
      ExitMenu: {
        display: 'flex',
        marginRight: 30,
        fontSize: 28,
        marginLeft: 'auto'
      }
    };
    let children = [];
    if (this.props.children) {
      if (Array.isArray(this.props.children)) children = this.props.children;
      else children = [ this.props.children ];
    }
    if (this.props.showMenu || this.state.showMenu) {
      if (this.props.placement === 'left') {
        return (
          <div
            style={{ ...styles.NavMenu, ...styles.menuLeft }}
            className={this.props.className || ''}
          >
            <p
              onClick={
                e =>
                  this.props.closeMenu
                    ? this.props.closeMenu()
                    : this._showMenu()
              }
              style={styles.ExitMenu}
            >
              {this.props.closeIcon || <span>&times;</span>}
            </p>
            {children.map((child: any, key: number) => {
                if (
                  child.type.name !== 'Navbrand' || child.type.name !== 'Link'
                ) {
                  return React.cloneElement(child, { key });
                }
              })}
          </div>
        );
      }
      return (
        <div
          style={{ ...styles.NavMenu, ...styles.menuRight }}
          className={this.props.className || ''}
        >
          <p
            onClick={
              e =>
                this.props.closeMenu ? this.props.closeMenu() : this._showMenu()
            }
            style={styles.ExitMenu}
          >
            {this.props.closeIcon || <span>&times;</span>}
          </p>
          {children.map((child: any, key: number) => {
              if (
                child.type.name !== 'Navbrand' || child.type.name !== 'Link'
              ) {
                return React.cloneElement(child, { key });
              }
            })}
        </div>
      );
    }
    return (
      <div style={styles.NavMenuBtn}>
        <p
          onClick={
            e => this.props.openMenu ? this.props.openMenu() : this._showMenu()
          }
        >
          {this.props.menuIcon || <span>&#9776;</span>}
        </p>
      </div>
    );
  }
}
