// @flow
import React from 'react';

export type CardProps = {
  className?: string,
  width?: string | number,
  height?: string | number,
  shadow?: string,
  backgroundColor?: string,
  styles?: Object,
  children: Object
};

export function Card(props: CardProps) {
  const styles = {
    display: 'flex',
    flexDirection: 'column',
    boxShadow: props.shadow ||
      `0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)`,
    backgroundColor: props.backgroundColor || '#fff',
    width: props.width || 400,
    minHeight: props.height || 300,
    margin: 5,
    overflow: 'hidden',
    ...props.styles
  };

  return (
    <div style={styles}>
      {props.children}
    </div>
  );
}

export type CardHeaderProps = {
  className?: string,
  height?: string | number,
  avatar?: string,
  title?: string,
  subtitle?: string,
  avatarHeight?: number,
  avatarWidth?: number,
  titleSize?: number,
  subtitleSize?: number,
  style?: {
    cardHeader?: Object,
    avatar?: Object,
    headerContent?: Object,
    title?: Object,
    subtitle?: Object,
  }
};

export function CardHeader(props: CardHeaderProps) {
  const styles = {
    CardHeader: {
      display: 'flex',
      justifyContent: 'flex-start',
      width: '100%',
      height: props.height || 50,
      padding: '10px 0',
      ...((props.style && props.style.cardHeader) ? props.style.cardHeader : {})
    },
    avatar: {
      alignSelf: 'center',
      borderRadius: '50%',
      width: props.avatarHeight || 40,
      height: props.avatarWidth || 40,
      margin: '0 15px',
      ...((props.style && props.style.avatar) ? props.style.avatar : {})
    },
    headerContent: {
      display: 'flex',
      alignSelf: 'center',
      flexDirection: 'column',
      ...((props.style && props.style.headerContent) ? props.style.headerContent : {})
    },
    title: {
      margin: '1px 0',
      fontSize: props.titleSize || 16,
      fontWeight: 600,
      color: '#333',
      ...((props.style && props.style.title) ? props.style.title : {})
    },
    subtitle: {
      margin: '1px 0',
      fontSize: props.subtitleSize || 14,
      color: '#dddddd',
      ...((props.style && props.style.subtitle) ? props.style.subtitle : {})
    }
  };

  return (
    <div styles={styles.CardHeader}>
      <img styles={styles.avatar} src={props.avatar} />
      <div styles={styles.headerContent}>
        <p styles={styles.title}>{props.title}</p>
        <p styles={styles.subtitle}>{props.subtitle}</p>
      </div>
    </div>
  );
}

export type CardMediaProps = {
  width?: string | number,
  height?: string | number,
  media?: string,
  backgroundColor?: string,
  overlay?: { title: string, subtitle: string },
  overlayHeight?: number,
  overlyTitleSize?: number,
  overlayTitleColor?: string,
  overlaySubtitleSize?: number,
  overlaySubtitleColor?: string
};

export function CardMedia(props: CardMediaProps) {
  const styles = {
    media: {
      display: 'flex',
      width: props.width || '100%',
      height: props.height,
      backgroundColor: props.backgroundColor || '#fff',
      zIndex: 1,
      position: 'relative'
    },
    overlay: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      width: '100%',
      height: props.overlayHeight || 40,
      backgroundColor: 'rgba(0, 0, 0, 0.541176)',
      marginTop: (props.overlayHeight ? -props.overlayHeight - 10 : -50),
      padding: '5px 0',
      zIndex: 20,
      position: 'relative'
    },
    title: {
      fontSize: props.overlyTitleSize || 16,
      color: props.overlayTitleColor || '#fff',
      margin: 0,
      marginLeft: 10
    },
    subtitle: {
      fontSize: props.overlaySubtitleSize || 14,
      color: props.overlaySubtitleColor || '#dbdbdb',
      margin: 0,
      marginLeft: 10
    }
  };

  if (!props.overlay) return <img style={styles.media} src={props.media} />;

  return (
    <div className={props.className ? props.className : ''}>
      <img style={styles.media} src={props.media} />
      <div style={styles.overlay}>
        <p style={styles.title}>{props.overlay.title}</p>
        <p style={styles.subtitle}>{props.overlay.subtitle}</p>
      </div>
    </div>
  );
}
