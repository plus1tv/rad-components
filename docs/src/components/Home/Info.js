import React from 'react';
import { css, StyleSheet } from 'aphrodite';

import Pringle from './Pringle.js';
import PringleStack from './PringleStack.js';
import Customize from './Customize.js';

const styles = StyleSheet.create({
  info: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: 40
  },
  infoBlock: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 300,
    color: '#8574FF',
  }
});

function Info (props) {
  return (
    <div className={css(styles.info)}>
      <div className={css(styles.infoBlock)}>
        <Customize />
        <h3>Customize</h3>
        <p>
          Rad Components are meant to be easily cusomizable and extendable by
          developers. Matching existing themes or components is easy.
        </p>
      </div>
      <div className={css(styles.infoBlock)}>
        <Pringle />
        <h3>Pringle Weight</h3>
        <p>
          RAD components are extremely light weight not taking up much size in your bundles.
        </p>
      </div>
      <div className={css(styles.infoBlock)}>
        <PringleStack />
        <h3>Composable</h3>
        <p>
          RAD components are minimal implementations that are easily composible
          with your own components or other components in the RAD component library.
        </p>
      </div>
    </div>
  );
}

export default Info;
