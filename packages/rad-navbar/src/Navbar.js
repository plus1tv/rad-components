// @flow
import React, { Component } from 'react';

export type NavbarProps = {
  className?: string,
  breakPoint?: number,
  showMenu?: boolean,
  openMenu?: Function,
  closeMenu?: Function,
  height?: string | number,
  shadow?: string,
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
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    const styles = {
      Navbar: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        width: '100%',
        backgroundColor: this.props.backgroundColor || '#fff',
        minHeight: this.props.height || 60,
        maxHeight: this.props.height || 64,
        boxShadow: this.props.shadow ||
          `0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)`,
        position: 'fixed',
        zIndex: 1000
      },
      NavDrawer: {
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
    if (this.state.width <= (this.props.breakPoint || 767)) {
      return (
        <div style={styles.Navbar} className={this.props.className || ''}>
          {children.map((child: any, key: number) => {
              if (
                child.type.name === 'Navbrand' || child.type.name === 'Link'
              ) {
                return React.cloneElement(child, {
                  key,
                  width: this.state.width
                });
              }
            })}
          {
            this.props.showMenu === undefined ||
              !this.props.closeMenu ||
              !this.props.openMenu
              ? <div style={styles.NavDrawer}>
                <NavDrawer>
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
              </div>
              : <div style={styles.NavDrawer}>
                <NavDrawer
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
              </div>
          }
        </div>
      );
    }
    return (
      <div style={styles.Navbar} className={this.props.className || ''}>
        {children.map((child: any, key: number) => {
            if (child.type.name !== 'NavItemsMenu') {
              return React.cloneElement(child, {
                key,
                width: this.state.width,
                breakPoint: this.props.breakPoint
              });
            }
          })}
      </div>
    );
  }
}

export type NavbrandProps = {
  className?: string,
  logo?: string,
  logoWidth?: string | number,
  logoHeight?: string | number,
  title?: string,
  children: any
};

export function Navbrand(props: NavbrandProps) {
  const styles = {
    Navbrand: { display: 'flex', alignItems: 'center', margin: '0 30px' },
    logo: {
      width: props.logoWidth || 80,
      height: props.logoHeight || 50,
      margin: '0 30px'
    },
    title: { fontWeight: 700, fontSize: 24, color: '#333', margin: '0 30px' }
  };
  if (props.children) {
    return (
      <div
        type="Navbrand"
        style={styles.Navbrand}
        className={props.className || ''}
      >
        {props.children}
      </div>
    );
  }
  if (props.logo && props.title && !props.children) {
    return (
      <div style={styles.Navbrand} className={props.className || ''}>
        <img style={styles.logo} src={props.logo} />
        <p style={styles.title}>{props.title}</p>
      </div>
    );
  }

  if (!props.logo && !props.children && props.title) return (
      <p style={styles.title} className={props.className || ''}>
        {props.title}
      </p>
    );

  if (props.logo && !props.children && !props.title)
    return (
      <img
        style={styles.logo}
        className={props.className || ''}
        src={props.logo}
      />
    );
}

export type NavDrawerProps = {
  showMenu?: boolean,
  openMenu?: Function,
  closeMenu?: Function,
  menuIcon?: any,
  closeIcon?: any,
  placement?: 'right' | 'left',
  children?: any
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

export type NavItemsLeftProps = {
  className?: string,
  width: number,
  breakPoint?: number,
  style?: Object
};

export function NavItemsLeft(props: NavItemsLeftProps) {
  const styles = {
    navItemsLeft: {
      display: 'flex',
      margin: 0,
      marginRight: 'auto',
      marginLeft: 30,
      padding: 0,
      ...(props.style && props.style.navItemsLeft
        ? props.style.navItemsLeft
        : {})
    },
    navItemsLeftSmall: {
      display: 'flex',
      flexDirection: 'column',
      margin: 0,
      padding: 0,
      ...(props.style && props.style.navItemsLeftSmall
        ? props.style.navItemsLeftSmall
        : {})
    },
    navItem: { listStyle: 'none', margin: 0, margin: '0px 15px', fontSize: 18 }
  };

  let children = [];
  if (props.children) {
    if (Array.isArray(props.children)) children = props.children;
    else children = [ props.children ];
  }

  if (props.width <= (props.breakPoint || 767)) {
    return (
      <ul style={styles.navItemsLeftSmall} className={props.className}>
        {children.map((child: any, key: number) => (
            <li key={key} style={styles.navItem}>
              {React.cloneElement(child, { key: key })}
            </li>
          ))}
      </ul>
    );
  }

  return (
    <ul style={styles.navItemsLeft} className={props.className}>
      {children.map((child: any, key: number) => (
          <li key={key} style={styles.navItem}>
            {React.cloneElement(child, { key: key })}
          </li>
        ))}
    </ul>
  );
}

export type NavItemsMenuProps = { className: string };

export function NavItemsMenu(props: NavItemsMenuProps) {
  const styles = {
    navItemsMenu: { display: 'flex', flexDirection: 'column', padding: 0 },
    navItem: { listStyle: 'none', margin: '0 15px', fontSize: 18 }
  };

  let children = [];
  if (props.children) {
    if (Array.isArray(props.children)) children = props.children;
    else children = [ props.children ];
  }

  return (
    <ul style={styles.navItemsMenu} className={props.className}>
      {children.map((child: any, key: number) => (
          <li key={key} style={styles.navItem}>
            {React.cloneElement(child, { key: key })}
          </li>
        ))}
    </ul>
  );
}

export type NavItemsRightProps = {
  className?: string,
  width: number,
  breakPoint?: number
};

export function NavItemsRight(props: NavItemsRightProps) {
  const styles = {
    NavItemsRight: {
      display: 'flex',
      margin: 0,
      marginLeft: 'auto',
      marginRight: 30,
      padding: 0
    },
    NavItemsRightSmall: {
      display: 'flex',
      flexDirection: 'column',
      margin: 0,
      padding: 0
    },
    navItem: { listStyle: 'none', margin: 0, margin: '0px 15px', fontSize: 18 }
  };

  let children = [];
  if (props.children) {
    if (Array.isArray(props.children)) children = props.children;
    else children = [ props.children ];
  }

  children.map((child: any, key: number) => child);

  if (props.width <= (props.breakPoint || 767)) {
    return (
      <ul style={styles.NavItemsRightSmall} className={props.className || ''}>
        {children.map((child: any, key: number) => (
            <li key={key} style={styles.navItem}>
              {React.cloneElement(child, { key: key })}
            </li>
          ))}
      </ul>
    );
  }

  return (
    <div style={styles.NavItemsRight} className={props.className}>
      {children.map((child: any, key: number) => (
          <li key={key} style={styles.navItem}>
            {React.cloneElement(child, { key: key })}
          </li>
        ))}
    </div>
  );
}
