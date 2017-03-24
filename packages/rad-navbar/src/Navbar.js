// @flow
import React, { Component } from 'react';

export type NavbarProps = {
  className?: string,
  position?: 'top' | 'bottom',
  menuPosition?: 'left' | 'right',
  menu?: 'independant',
  breakPoint?: number,
  showMenu?: boolean,
  openMenu?: Function,
  closeMenu?: Function,
  height?: string | number,
  shadow?: string,
  styles?: {
    navbar?: Object,
    navbtn?: Object,
    navdrawer?: { navMenu?: Object, navMenuBtn?: Object, navExitBtn?: Object }
  },
  children: any
};

export type NavbarState = { height: number, width: number, showMenu?: boolean };

export class Navbar extends Component {
  props: NavbarProps;
  state: NavbarState;
  handleResize: Function;

  constructor(props: NavbarProps) {
    super(props);
    if (!props.showMenu || !props.openMenu || !props.closeMenu) {
      this.state = {
        height: window.innerHeight,
        width: window.innerWidth,
        showMenu: false
      };
      this.handleResize = this.handleResize.bind(this);
    }
    this.state = { height: window.innerHeight, width: window.innerWidth };
  }

  handleResize() {
    this.setState((prevState: NavbarState, currProps: NavbarProps) => ({
      height: window.innerHeight,
      width: window.innerWidth
    }));
    if (this.props.showMenu === undefined) {
      if (
        this.state.width > (this.props.breakPoint || 767) && this.state.showMenu
      ) {
        this.setState((prevState: NavbarState, currProps: NavbarProps) => ({
          showMenu: false
        }));
      }
    } else if (this.props.closeMenu) {
      if (
        this.state.width > (this.props.breakPoint || 767) && this.props.showMenu
      ) {
        this.props.closeMenu();
      }
    }
  }

  componentWillMount() {
    if (!this.props.menu) {
      window.addEventListener('resize', this.handleResize);
    }
  }

  componentWillUnmount() {
    if (!this.props.menu) {
      window.removeEventListener('resize', this.handleResize);
    }
  }

  render() {
    const styles = {
      navbar: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        width: '100%',
        backgroundColor: this.props.backgroundColor || '#fff',
        minHeight: this.props.height || 60,
        maxHeight: this.props.height || 94,
        boxShadow: this.props.shadow ||
          `0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)`,
        position: 'fixed',
        bottom: this.props.position === 'bottom' ? 0 : null,
        zIndex: 1000,
        ...(this.props.styles && this.props.styles.navbar
          ? this.props.styles.navbar
          : {})
      },
      navbtn: {
        display: 'flex',
        marginLeft: this.props.menuPosition === 'right' ||
          !this.props.menuPosition
          ? 'auto'
          : null,
        ...(this.props.styles && this.props.styles.navbtn
          ? this.props.styles.navbtn
          : {})
      },
      navdrawer: {
        navMenu: {
          backgroundColor: '#fff',
          ...(this.props.styles &&
            this.props.styles.navdrawer &&
            this.props.styles.navdrawer.navMenu
            ? this.props.styles.navdrawer.navMenu
            : {})
        },
        navMenuBtn: {
          ...(this.props.styles &&
            this.props.styles.navdrawer &&
            this.props.styles.navdrawer.navMenuBtn
            ? this.props.styles.navdrawer.navMenuBtn
            : {})
        },
        navExitBtn: {
          ...(this.props.styles &&
            this.props.styles.navdrawer &&
            this.props.styles.navdrawer.navExitBtn
            ? this.props.styles.navdrawer.navExitBtn
            : {})
        }
      }
    };
    let children = [];
    if (this.props.children) {
      if (Array.isArray(this.props.children)) children = this.props.children;
      else children = [this.props.children];
    }
    if (this.state.width <= (this.props.breakPoint || 767)) {
      return (
        <div style={styles.navbar} className={this.props.className || 'navbar'}>
          {this.props.menuPosition === 'right'
            ? children.map((child: any, key: number) => {
                if (child.type.name === 'Navbrand') {
                  return child;
                }
              })
            : null}
          {this.props.menu === 'independant'
            ? null
            : this.props.showMenu === undefined ||
                !this.props.closeMenu ||
                !this.props.openMenu
                ? <div style={styles.navbtn}>
                    <NavDrawer
                      styles={styles.navdrawer}
                      position={this.props.position}
                      menuPosition={this.props.menuPosition}
                    >
                      {children.map((child: any, key: number) => {
                        if (
                          child.type.name !== 'Navbrand' ||
                          child.type.name !== 'Link'
                        ) {
                          return React.cloneElement(child, {
                            key,
                            width: this.state.width,
                            breakPoint: this.props.breakPoint
                          });
                        }
                      })}
                    </NavDrawer>
                    {this.props.menuPosition === 'left'
                      ? children.map((child: any, key: number) => {
                          if (child.type.name === 'Navbrand') {
                            return child;
                          }
                        })
                      : null}
                  </div>
                : <div style={styles.navbtn}>
                    <NavDrawer
                      className="navdrawer"
                      styles={styles.navdrawer}
                      position={this.props.position}
                      menuPosition={this.props.menuPosition}
                      showMenu={this.props.showMenu}
                      closeMenu={this.props.closeMenu}
                      openMenu={this.props.openMenu}
                    >
                      {children.map((child: any, key: number) => {
                        if (
                          child.type.name !== 'Navbrand' ||
                          child.type.name !== 'Link'
                        ) {
                          return React.cloneElement(child, {
                            key,
                            width: this.state.width,
                            breakPoint: this.props.breakPoint
                          });
                        }
                      })}
                    </NavDrawer>
                  </div>}
        </div>
      );
    }
    return (
      <div style={styles.navbar} className={this.props.className || 'navbar'}>
        {this.props.children}
      </div>
    );
  }
}

export type NavDrawerProps = {
  className?: string,
  menuPosition?: 'left' | 'right',
  position?: 'top' | 'bottom',
  showMenu?: boolean,
  openMenu?: Function,
  closeMenu?: Function,
  menuIcon?: any,
  closeIcon?: any,
  children?: any,
  styles?: { navMenu?: Object, navMenuBtn?: Object, navExitBtn?: Object }
};

export type NavDrawerState = { showMenu: boolean };

export class NavDrawer extends Component {
  props: NavDrawerProps;
  state: NavDrawerState;
  _showMenu: Function;

  constructor(props: NavDrawerProps) {
    super(props);
    if (!props.showMenu || !props.openMenu || !props.closeMeu) {
      this.state = { showMenu: false };
    }
  }

  _showMenu() {
    this.setState((prevState: NavDrawerState, currProps: NavDrawerProps) => ({
      showMenu: !prevState.showMenu
    }));
  }

  render() {
    const styles = {
      navMenu: {
        position: 'absolute',
        right: this.props.menuPosition === 'right' || !this.props.menuPosition
          ? 0
          : null,
        top: this.props.position === 'top' || !this.props.position ? 0 : null,
        bottom: this.props.position === 'bottom' ? 0 : null,
        width: 300,
        marginLeft: this.props.menuPosition === 'right' ||
          !this.props.menuPosition
          ? 30
          : -30,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: `100vh`,
        boxShadow: this.props.shadow ||
          `0 0px 3px rgba(0,0,0,0.12), 0 2px 6px rgba(0,0,0,0.24)`,
        backgroundColor: '#fff',
        zIndex: 1500,
        ...(this.props.styles ? this.props.styles.navMenu : {})
      },
      navMenuBtn: {
        display: 'flex',
        fontSize: 28,
        margin: '0 30px',
        ...(this.props.styles ? this.props.styles.navMenuBtn : {})
      },
      navExitBtn: {
        display: 'flex',
        marginRight: 30,
        fontSize: 28,
        marginLeft: 'auto',
        ...(this.props.styles ? this.props.styles.navExitBtn : {})
      }
    };
    if (this.props.showMenu || this.state.showMenu) {
      return (
        <div
          style={styles.navMenu}
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

export type NavbrandProps = {
  className?: string,
  children: any,
  styles?: Object
};

export function Navbrand(props: NavbrandProps) {
  const styles = {
    Navbrand: {
      display: 'flex',
      alignItems: 'center',
      margin: '0 30px',
      ...(props.styles ? props.styles : {})
    }
  };
  return (
    <div
      type="Navbrand"
      style={styles.Navbrand}
      className={props.className || 'navbrand'}
    >
      {props.children}
    </div>
  );
}

export type NavItemsLeftProps = {
  className?: string,
  width: number,
  breakPoint?: number,
  styles?: { navItems?: Object, navItemsSmall?: Object },
  children: any
};

export function NavItemsLeft(props: NavItemsLeftProps) {
  const styles = {
    navItems: {
      display: 'flex',
      margin: 0,
      marginRight: 'auto',
      marginLeft: 30,
      padding: 0,
      ...(props.styles && props.styles.navItems ? props.styles.navItems : {})
    },
    navItemsSmall: {
      display: 'flex',
      flexDirection: 'column',
      margin: 0,
      padding: 0,
      ...(props.styles && props.styles.navItemsSmall
        ? props.styles.navItemsSmall
        : {})
    }
  };
  return (
    <div
      style={
        props.width <= (props.breakPoint || 767)
          ? styles.navItemsSmall
          : styles.navItems
      }
      className={props.className || 'navItemsleft'}
    >
      {props.children}
    </div>
  );
}

export type NavItemsRightProps = {
  className?: string,
  width: number,
  breakPoint?: number,
  styles?: { navItems?: Object, navItemsSmall?: Object },
  children: any
};

export function NavItemsRight(props: NavItemsRightProps) {
  const styles = {
    navItems: {
      display: 'flex',
      margin: 0,
      marginLeft: 'auto',
      marginRight: 30,
      padding: 0,
      ...(props.styles && props.styles.navItems ? props.styles.navItems : {})
    },
    navItemsSmall: {
      display: 'flex',
      flexDirection: 'column',
      margin: 0,
      padding: 0,
      ...(props.styles && props.styles.navItemsSmall
        ? props.styles.navItemsSmall
        : {})
    }
  };

  return (
    <div
      style={
        props.width <= (props.breakPoint || 767)
          ? styles.navItemsSmall
          : styles.navItems
      }
      className={props.className || 'navItemsright'}
    >
      {props.children}
    </div>
  );
}

export type NavItemsCenterProps = {
  className?: string,
  width: number,
  breakPoint?: number,
  styles?: { navItems?: Object, navItemsSmall?: Object },
  children: any
};

export function NavItemsCenter(props: NavItemsRightProps) {
  const styles = {
    navItems: {
      display: 'flex',
      alignSelf: 'center',
      justifyContent: 'center',
      margin: '0 auto',
      padding: 0,
      ...(props.styles && props.styles.navItems ? props.styles.navItems : {})
    },
    navItemsSmall: {
      display: 'flex',
      flexDirection: 'column',
      margin: 0,
      padding: 0,
      ...(props.styles && props.styles.navItemsSmall
        ? props.styles.navItemsSmall
        : {})
    }
  };

  return (
    <div
      style={
        props.width <= (props.breakPoint || 767)
          ? styles.navItemsSmall
          : styles.navItems
      }
      className={props.className || 'navItemsCenter'}
    >
      {props.children}
    </div>
  );
}
