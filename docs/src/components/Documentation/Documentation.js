import React from 'react';
import Match from 'react-router/Match';
import Link from 'react-router/Link';
import { css, StyleSheet } from 'aphrodite';
import Anime from 'react-anime';
import { Codehighlighter } from 'rad-codehighlighter';
import Docnav from './Docnav.js';
import ViewSource from './ViewSource.js';
import ViewComponent from './ViewComponent.js';
import Github from './../Github.js';
import Logo from './../Logo.js';
import { Navbar, Navbrand, NavItemsRight, NavItemsMenu } from 'rad-navbar';

const styles = StyleSheet.create({
  documentation: {
    display: 'flex',
    flexWrap: 'wrap-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    margin: '80px 0',
    overflow: 'hidden'
  },
  intro: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 700,
    minHeight: '80vh',
    margin: '-10px 60px',
    overflow: 'hidden'
  },
  header: { fontSize: '40', fontWeight: '600 !important' },
  rad: { color: '#FF9EF8' },
  fucking: { color: '#8574FF' },
  components: { color: '#D0FFFE' },
  links: {
    display: 'flex',
    alignItems: 'center',
    color: '#333',
    textDecoration: 'none',
    ':hover': { textDecoration: 'underline' }
  },
  listItem: {
    margin: 20,
    fontSize: 20,
    fontWeight: 200,
    textDecoration: 'none',
    color: '#8574FF'
  },
  drawerDocs: {
    fontSize: 30,
    margin: 10,
    alignSelf: 'center',
    color: '#FF9EF8'
  },
  drawerContribute: {
    fontSize: 30,
    margin: 10,
    alignSelf: 'center',
    color: '#FF9EF8',
    marginBottom: -50
  },
  viewComponent: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: '45vw',
    minWidth: 500,
    margin: '10px 0px',
    padding: 20,
    '@media (max-width: 650px)': { width: '80vw', minWidth: 360 }
  },
  viewSource: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: 600,
    minWidth: 500,
    margin: '10px 0px',
    '@media (max-width: 650px)': { width: '80vw', minWidth: 360 }
  }
});

class Documentation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      showProps: false,
      sourceMounted: false,
      navMounted: false,
      selectedComponent: 0
    };
  }

  componentDidMount() {
    this.setState((prevState, currProps) => ({
      navMounted: !prevState.navMounted
    }));
  }

  selectComponent(key) {
    this.setState((prevState, currProps) => ({ selectedComponent: key }));
  }

  showSource() {
    this.setState((prevState, currProps) => ({
      open: !prevState.open,
      selectedComponent: 0
    }));
  }

  showPropsInfo() {
    this.setState((prevState, currProps) => ({
      showProps: !prevState.showProps
    }));
  }

  blockAnime() {
    this.setState((prevState, currProps) => ({
      sourceMounted: !prevState.sourceMounted
    }));
  }

  render() {
    return (
      <div style={{ width: '100%', overflow: 'hidden' }}>
        <Navbar breakPoint={1030}>
          <Navbrand>
            <Link to="/">
              <Logo />
            </Link>
          </Navbrand>
          <NavItemsMenu>
            <h1 className={css(styles.drawerDocs)}>Docs</h1>
            <span>
              <Link className={css(styles.listItem)} to={`/docs`}>
                Getting Started
              </Link>
            </span>
            <span>
              <Link className={css(styles.listItem)} to={`/docs/navbar`}>
                Navbar
              </Link>
            </span>
            <span>
              <Link className={css(styles.listItem)} to={`/docs/navdrawer`}>
                NavDrawer
              </Link>
            </span>
            <span>
              <Link className={css(styles.listItem)} to={`/docs/card`}>
                Card
              </Link>
            </span>
            <span>
              <Link
                className={css(styles.listItem)}
                to={`/docs/codehighlighter`}
              >
                CodeHighlighter
              </Link>
            </span>
            <span>
              <Link className={css(styles.listItem)} to={`/docs/tabs`}>
                Tabs
              </Link>
            </span>
            <span>
              <Link className={css(styles.listItem)} to={`/docs/stepper`}>
                Stepper
              </Link>
            </span>
            <span>
              <Link className={css(styles.listItem)} to={`/docs/modal`}>
                Modal
              </Link>
            </span>
            <span>
              <Link className={css(styles.listItem)} to={`/docs/notification`}>
                Notification
              </Link>
            </span>
            <span>
              <Link className={css(styles.listItem)} to={`/docs/popover`}>
                Popover
              </Link>
            </span>
            <br />
            <h1 className={css(styles.drawerContribute)}>Contribute</h1>
          </NavItemsMenu>
          <NavItemsRight>
            <span>
              <a
                className={css(styles.links)}
                target="_blank"
                href="https://www.paypal.me/donatetomyoss"
              >
                Donate
              </a>
            </span>
            <span>
              <a
                className={css(styles.links)}
                target="_blank"
                href="https://github.com/hyperfuse/radcomponents"
              >
                <Github />
              </a>
            </span>
          </NavItemsRight>
        </Navbar>
        <div className={css(styles.documentation)}>
          {this.state.open
            ? <Anime
                autoplay={
                  this.state.open && !this.state.sourceMounted ? true : false
                }
                easing="linear"
                opacity={[0, 1]}
                translateX={[-200, 0]}
                duration={(e, i) => 550}
              >
                <div className={css(styles.viewSource)}>
                  <ViewSource
                    pathname={this.props.location}
                    blockAnime={this.blockAnime.bind(this)}
                    open={this.state.open}
                    showSource={() => this.showSource()}
                    showPropsInfo={() => this.showPropsInfo()}
                    showProps={this.state.showProps}
                    selectedComponent={this.state.selectedComponent}
                    selectComponent={this.selectComponent.bind(this)}
                  />
                </div>
              </Anime>
            : <Anime
                autoplay={this.state.navMounted ? false : true}
                easing="linear"
                opacity={[0, 1]}
                translateX={[-200, 0]}
                duration={(e, i) => 550}
              >
                <div className={css(styles.Docnav)}>
                  <Docnav
                    pathname={this.props.location}
                    width={this.state.width}
                  />
                </div>
              </Anime>}
          <Match
            exactly
            pattern={this.props.pathname}
            render={() => (
              <Anime
                easing="linear"
                opacity={[0, 1]}
                translateX={[200, 0]}
                duration={(e, i) => 550}
              >
                <div className={css(styles.intro)}>
                  <h1 className={css(styles.header)}>
                    <span className={css(styles.rad)}>RAD</span>
                    {' '}
                    <span className={css(styles.components)}>COMPONENTS</span>
                  </h1>
                  <div className>
                    <p style={{ fontSize: 15 }}>
                      I made RAD COMPONENTS for myself and friends who didn't want


                      to continuously remake components we already made in the past. Just


                      like every all the other component library that has been made.


                      The main difference is the dripping swagu and RADness these components


                      bring to the table.
                    </p>
                    <p>
                      This is the initial release of RADCOMPONENTS so there may be


                      some bugs or issues we have to get rid of. Also if you find something


                      in the components that you think can be way more RAD then make a


                      RAD PULL REQUEST, we would love to make the world more RAD.
                    </p>
                    <h1 style={{ margin: 5 }}>Usage</h1>
                    <p>
                      To get up and running with this library first do the following
                    </p>
                    <code>npm install --save radcomponents</code>
                    <br />
                    <Codehighlighter language="javascript">
                      {
                        `
    import React from 'react';
    import { Tabs, Tab } from 'radcomponents';

    function ExampleTabs (props) \{
      return (
        <Tabs>
          <Tab label="Tab 1">
          </Tab>
          <Tab label="Tab 2">
          </Tab>
          <Tab label="Tab 3">
          </Tab>
        </Tabs>
      );
    \}
                    `
                      }
                    </Codehighlighter>
                  </div>
                </div>
              </Anime>
            )}
          />
          <Match
            pattern={`${this.props.pathname}/:rad`}
            render={() => (
              <Anime
                autoplay={this.state.sourceMounted ? false : true}
                easing="linear"
                opacity={[0, 1]}
                translateX={[200, 0]}
                duration={(e, i) => 550}
              >
                <div className={css(styles.viewComponent)}>
                  <ViewComponent
                    pathname={this.props.location}
                    open={this.state.open}
                    showSource={() => this.showSource()}
                    selectedComponent={this.state.selectedComponent}
                  />
                </div>
              </Anime>
            )}
          />
        </div>
      </div>
    );
  }
}

export default Documentation;
