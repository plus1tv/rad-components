import React from 'react';
import { css, StyleSheet } from 'aphrodite';
import { getTitle } from './../../utils.js';

const styles = StyleSheet.create({
  viewComponent: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '70vh',
    maxHeight: '65vh',
    overflow: 'hidden'
  },
  view: {
    width: 100,
    height: 40,
    fontSize: 20,
    backgroundColor: '#FF9EF8',
    border: '3px solid #D0FFFE',
    color: '#8574FF',
    marginLeft: 'auto'
  },
  header: {
    alignSelf: 'center',
    color: '#8574FF'
  },
  componentContainerCenter: {
    display: 'flex',
    flexDirection: 'column',
    height: 'inherit',
    justifyContent: 'center',
    alignItems: 'center'
  },
  componentContainerEdge: {
    display: 'flex',
    flexDirection: 'column',
    height: 'inherit',
    justifyContent: 'center'
  }
});

function ViewComponent(props) {
  let activeInfo = getTitle(props.pathname.pathname);

  if (props.open) {
    return (
      <div className={css(styles.viewComponent)}>
        <button onClick={props.showSource} className={css(styles.view)}>
          &times;
        </button>
        <h1 className={css(styles.header)}>{activeInfo.activeTitle}</h1>
        <div
          className={
            props.pathname.pathname === '/docs/navbar'
              ? css(styles.componentContainerEdge)
              : css(styles.componentContainerCenter)
          }
        >
          {activeInfo.activeComponents[props.selectedComponent]}
        </div>
      </div>
    );
  }
  return (
    <div className={css(styles.viewComponent)}>
      <button onClick={props.showSource} className={css(styles.view)}>
        {`<>`}
      </button>
      <h1 className={css(styles.header)}>{activeInfo.activeTitle}</h1>
      <div
        className={
          props.pathname.pathname === '/docs/navbar'
            ? css(styles.componentContainerEdge)
            : css(styles.componentContainerCenter)
        }
      >
        {activeInfo.activeComponents[props.selectedComponent]}
      </div>
    </div>
  );
}

export default ViewComponent;
