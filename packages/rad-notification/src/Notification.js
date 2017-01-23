// @flow
import React from 'react';

export type NotificationProps = {
  className?: string,
  width?: string | number,
  height?: string | number,
  showNotification: boolean,
  dismiss: Function,
  notiPlacement?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight',
  borderHighlight: string,
  backgroundColor?: string,
  styles?: {
    notification?: Object,
    dismiss?: Object,
    centerContainer?: Object,
    notificationDismissed?: Object
  },
  children: any
};

export function Notification(props: NotificationProps) {
  const styles = {
    topLeft: { position: 'fixed', left: 0, top: 0 },
    topRight: { position: 'fixed', right: 0, top: 0 },
    bottomLeft: { position: 'fixed', left: 0, bottom: 0 },
    bottomRight: { position: 'fixed', right: 0, bottom: 0 },
    notification: {
      display: 'flex',
      padding: 8,
      margin: 25,
      width: props.width || 355,
      height: props.height || 80,
      borderLeft: `5px solid ${props.borderHighlight}`,
      backgroundColor: props.background || '#fff',
      boxShadow: `0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)`,
      ...(props.styles && props.styles.notification
        ? props.styles.notification
        : {})
    },
    dismiss: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 'auto',
      borderRadius: '50%',
      fontSize: 20,
      textDecoration: 'none',
      width: 30,
      height: 30,
      textAlign: 'center',
      border: 'none',
      color: '#dad8d8',
      backgroundColor: 'transparent',
      ...(props.styles && props.styles.dismiss ? props.styles.dismiss : {})
    },
    centerContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      ...(props.styles && props.styles ? props.styles : {})
    },
    notificationDismissed: {
      display: 'none',
      visibility: 'none',
      ...(props.styles && props.styles.notificationDismissed
        ? props.styles.notificationDismissed
        : {})
    }
  };
  return (
    <div
      style={
        props.showNotification
          ? props.notiPlacement === 'topLeft'
            ? { ...styles.topLeft, ...styles.notification }
            : props.notiPlacement === 'topRight'
              ? { ...styles.topRight, ...styles.notification }
              : props.notiPlacement === 'bottomLeft'
                ? { ...styles.bottomLeft, ...styles.notification }
                : { ...styles.bottomRight, ...styles.notification }
          : styles.notificationDismissed
      }
      className={props.className || 'notification'}
    >
      <div
        style={styles.centerContainer}
        className={props.className || 'notification'}
      >
        {props.children}
      </div>
      <button style={styles.dismiss} onClick={() => props.dismiss()}>
        ×
      </button>
    </div>
  );
}
