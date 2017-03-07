import React from 'react';
import Link from 'react-router/Link';
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  docnav: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '70vh',
    padding: 0,
    borderRight: '0.5px solid #FF9EF8',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    '@media (max-width: 1030px)': {
      display: 'none'
    }
  },
  docMenu: {
    display: 'flex',
    flexDirection: 'column',
    height: '90vh',
    zIndex: 9000
  },
  docMenuOpen: {
    marginLeft: 500,
    display: 'flex',
    flexDirection: 'column',
    height: '90vh',
    zIndex: 9000
  },
  listItem: {
    margin: 20,
    fontSize: 20,
    fontWeight: 200,
    textDecoration: 'none',
    color: '#8574FF'
  },
  list: {
    display: 'flex',
    flexDirection: 'column'
  },
  hide: {
    display: 'none',
    visibility: 'hidden'
  }
});

function Docnav(props) {
  return (
    <div className={css(styles.docnav)}>
      <div className={css(styles.list)}>
        <Link className={css(styles.listItem)} to={`/docs`}>
          Getting Started
        </Link>
        <Link className={css(styles.listItem)} to={`/docs/navbar`}>Navbar</Link>
        <Link className={css(styles.listItem)} to={`/docs/navdrawer`}>
          NavDrawer
        </Link>
        <Link className={css(styles.listItem)} to={`/docs/card`}>Card</Link>
        <Link className={css(styles.listItem)} to={`/docs/codehighlighter`}>
          CodeHighlighter
        </Link>
        <Link className={css(styles.listItem)} to={`/docs/tabs`}>Tabs</Link>
        <Link className={css(styles.listItem)} to={`/docs/stepper`}>
          Stepper
        </Link>
        <Link className={css(styles.listItem)} to={`/docs/modal`}>Modal</Link>
        <Link className={css(styles.listItem)} to={`/docs/notification`}>
          Notification
        </Link>
        <Link className={css(styles.listItem)} to={`/docs/popover`}>
          Popover
        </Link>
      </div>
    </div>
  );
}

export default Docnav;
