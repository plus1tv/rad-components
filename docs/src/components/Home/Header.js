import React from 'react';
import Anime from 'react-anime';
import Link from 'react-router/Link';
import { css, StyleSheet } from 'aphrodite';

import Rad from './Rad.js';
// import Alien from './Alien.js';
import Unicorn from './Unicorn.js';
import UnicornReverse from './UnicornReverse.js';
import Consolation from './Consolation.js';
import ConsolationReverse from './ConsolationReverse.js';

const styles = StyleSheet.create({
  header: {
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundImage: 'linear-gradient(#8574ff 0%, #fd88f5 100%)'
  },
  consolation: {
    marginLeft: 10,
    marginRight: 10
  },
  consolationContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-around',
    padding: '40px 0'
  },
  unicornContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between'
  },
  unicorn: {
    width: '100%',
    display: 'flex',
    margin: 0,
    marginLeft: 'auto'
  },
  unicornReverse: {
    width: '100%',
    display: 'flex',
    margin: 0,
    marginRight: 'auto'
  },
  getStarted: {
    color: '#D0FFFE',
    width: 300,
    height: 50,
    backgroundColor: 'transparent',
    border: '4px solid #D0FFFE',
    fontSize: 20,
    margin: 20,
    textAlign: 'center'
  },
  getStartedContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  RFC: {
    color: '#D0FFFE',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 200
  }
});

function Header(props) {
  return (
    <div className={css(styles.header)}>
      <div className={css(styles.consolationContainer)}>
        <Consolation className={css(styles.consolation)} />
        <ConsolationReverse className={css(styles.consolation)} />
      </div>
      {/*<Alien />*/}
      <Rad />
      <Anime
        opacity={[0, 1]}
        delay={(e, i) => (i + 1) * 1000}
        duration={(e, i) => 8000}
      >
        <div className={css(styles.getStartedContainer)}>
          <h1 className={css(styles.RFC)}>RAD COMPONENTS</h1>
          <span>
            <Link to="/docs">
              <button className={css(styles.getStarted)}>GET STARTED</button>
            </Link>
          </span>
        </div>
      </Anime>
      <div className={css(styles.unicornContainer)}>
        <Unicorn className={css(styles.unicorn)} />
        <UnicornReverse className={css(styles.unicornReverse)} />
      </div>
    </div>
  );
}

export default Header;
