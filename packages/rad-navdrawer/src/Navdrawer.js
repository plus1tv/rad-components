// @flow
import React, { Component } from 'react';

export type NavdrawerProps = {
  showMenu?: boolean,
  openMenu?: Function,
  closeMenu?: Function,
  menuIcon?: any,
  closeIcon?: any,
  placement: 'right' | 'left',
  styles?: { navMenu?: Object, navMenuBtn?: Object, navExitBtn?: Object },
  children: any
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
        boxShadow: (
          this.props.shadow ||
            `0 0px 3px rgba(0,0,0,0.12), 0 2px 6px rgba(0,0,0,0.24)`
        ),
        backgroundColor: '#fff',
        zIndex: 1500,
        ...(this.props.styles && this.props.styles.navMenu
          ? this.props.styles.navMenu
          : {})
      },
      navMenuBtn: {
        display: 'flex',
        fontSize: 28,
        ...(this.props.styles && this.props.styles.navMenuBtn
          ? this.props.styles.navMenuBtn
          : {})
      },
      navExitBtn: {
        display: 'flex',
        marginRight: 30,
        fontSize: 28,
        marginLeft: 'auto',
        ...(this.props.styles && this.props.styles.navExitBtn
          ? this.props.styles.navExitBtn
          : {})
      }
    };
    if (this.props.showMenu || this.state.showMenu) {
      return (
        <div
          style={
            this.props.placement === 'left'
              ? { ...styles.NavMenu, ...styles.menuLeft }
              : { ...styles.NavMenu, ...styles.menuRight }
          }
          className={this.props.className || 'navdrawer'}
        >
          <p
            onClick={e =>
              this.props.closeMenu ? this.props.closeMenu() : this._showMenu()}
            style={styles.navExitBtn}
          >
            {this.props.closeIcon || <span>&times;</span>}
          </p>
          {this.props.children}
        </div>
      );
    }
    return (
      <div
        style={styles.navMenuBtn}
        className={this.props.className || 'navdrawer'}
      >
        <p
          onClick={e =>
            this.props.openMenu ? this.props.openMenu() : this._showMenu()}
        >
          {this.props.menuIcon || <span>&#9776;</span>}
        </p>
      </div>
    );
  }
}
