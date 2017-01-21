import React from 'react';
import { css, StyleSheet } from 'aphrodite';
import Anime from 'react-anime';

const styles = StyleSheet.create({
  container: {
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
  },
  content: {

  },
  link: {
    textDecoration: 'none',
    color: '#8574FF',
  },
  heart: {
    color: '#FF9EF8',
    fontSize: 20,
    margin: '15px 5px',
    textDecoration: 'none',
  }
});

function Footer (props) {
  return (
    <div className={css(styles.container)}>
      <p className={css(styles.content)}>
        Made with</p>
      <Anime easing="easeOutElastic" loop={true} scale={[1, 1.5]} duration={(e, i) => 750}>
        <div className={css(styles.heart)}><a className={css(styles.heart)} target="_blank" href="https://www.paypal.me/donatetomyoss">&hearts;</a></div>
      </Anime>
      <p>
      by
      <a className={css(styles.link)} href="https://github.com/kennetpostigo"> Kennet Postigo</a>
      </p>
    </div>
  );
}

export default Footer;
