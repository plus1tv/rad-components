// @flow
import React from 'react';

export type CardProps = {
  className?: string,
  width?: string | number,
  height?: string | number,
  shadow?: string,
  backgroundColor?: string,
  styles?: Object,
  children: any
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
    <div style={styles} className={props.className || ''}>
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
  styles?: {
    cardHeader?: Object,
    avatar?: Object,
    title?: Object,
    subtitle?: Object
  }
};

export function CardHeader(props: CardHeaderProps) {
  const styles = {
    cardHeader: {
      display: 'flex',
      justifyContent: 'flex-start',
      width: '100%',
      height: props.height || 50,
      padding: '10px 0',
      ...(props.styles && props.styles.cardHeader
        ? props.styles.cardHeader
        : {})
    },
    avatar: {
      display: 'flex',
      alignSelf: 'center',
      borderRadius: '50%',
      width: props.avatarHeight || 40,
      height: props.avatarWidth || 40,
      margin: '0 15px',
      ...(props.styles && props.styles.avatar ? props.styles.avatar : {})
    },
    headerContent: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    title: {
      margin: '1px 0',
      fontSize: props.titleSize || 16,
      fontWeight: 600,
      color: '#333',
      ...(props.styles && props.styles.title ? props.styles.title : {})
    },
    subtitle: {
      margin: '1px 0',
      fontSize: props.subtitleSize || 14,
      color: '#dddddd',
      ...(props.styles && props.styles.subtitle ? props.styles.subtitle : {})
    }
  };

  return (
    <div style={styles.cardHeader} className={props.className || ''}>
      <img style={styles.avatar} src={props.avatar} />
      <div style={styles.headerContent}>
        <p style={styles.title}>{props.title}</p>
        <p style={styles.subtitle}>{props.subtitle}</p>
      </div>
    </div>
  );
}

export type CardMediaProps = {
  className?: string,
  height?: string | number,
  img?: string,
  backgroundColor?: string,
  overlay?: { title: string, subtitle: string },
  overlayHeight?: number,
  overlyTitleSize?: number,
  overlayTitleColor?: string,
  overlaySubtitleSize?: number,
  overlaySubtitleColor?: string,
  styles?: {
    media?: Object,
    overlay?: Object,
    title?: Object,
    subtitle?: Object
  }
};

export function CardMedia(props: CardMediaProps) {
  const styles = {
    media: {
      display: 'flex',
      width: '100%',
      height: props.height,
      backgroundColor: props.backgroundColor || '#fff',
      zIndex: 1,
      position: 'relative',
      ...(props.styles && props.styles.media ? props.styles.media : {})
    },
    overlay: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      width: '100%',
      height: props.overlayHeight || 40,
      backgroundColor: 'rgba(0, 0, 0, 0.541176)',
      marginTop: props.overlayHeight ? -props.overlayHeight - 10 : -50,
      padding: '5px 0',
      zIndex: 20,
      position: 'relative',
      ...(props.styles && props.styles.overlay ? props.styles.overlay : {})
    },
    title: {
      fontSize: props.overlyTitleSize || 16,
      color: props.overlayTitleColor || '#fff',
      margin: 0,
      marginLeft: 10,
      ...(props.styles && props.styles.title ? props.styles.title : {})
    },
    subtitle: {
      fontSize: props.overlaySubtitleSize || 14,
      color: props.overlaySubtitleColor || '#dbdbdb',
      margin: 0,
      marginLeft: 10,
      ...(props.styles && props.styles.subtitle ? props.styles.subtitle : {})
    }
  };

  if (!props.overlay) return <img style={styles.media} src={props.img} />;

  return (
    <div className={props.className || ''}>
      <img style={styles.media} src={props.img} />
      <div style={styles.overlay}>
        <p style={styles.title}>{props.overlay.title}</p>
        <p style={styles.subtitle}>{props.overlay.subtitle}</p>
      </div>
    </div>
  );
}
