import React from 'react';
import { Card, CardHeader, CardMedia } from 'rad-card';

export function CardSelfContained(props) {
  return (
    <Card>
      <CardHeader
        avatar="https://avatars2.githubusercontent.com/u/8888991?v=3&amp;s=400"
        title="Kennet Postigo"
        subtitle="Developer @Hyperfuse"
      />
      <CardMedia
        media="https://9to5mac.files.wordpress.com/2013/09/rolling-waves.jpg"
        overlay={{ title: 'Flowing In', subtitle: 'We Here' }}
      />
      <div style={{ margin: 10 }}>
        <h3 style={{ margin: 4 }}>Hello Guys</h3>
        <p style={{ margin: 2 }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad.
        </p>
      </div>
    </Card>
  );
}

export var CardSelfContainedSource = `
import React from 'react';
import { Card, CardHeader, CardMedia } from 'radcomponents';

function CardSelfContained (props) {
  return (
    <Card>
      <CardHeader avatar="https://avatars2.githubusercontent.com/u/8888991?v=3&s=400"
                  title="Kennet Postigo"
                  subtitle="Developer @Hyperfuse"/>
      <CardMedia media="https://9to5mac.files.wordpress.com/2013/09/rolling-waves.jpg"
                 overlay={{title:"Flowing In", subtitle: "We Here"}}/>
      <div style={{margin: 10}}>
        <h3 style={{margin: 4}}>Hello Guys</h3>
        <p style={{margin: 2}}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad.
        </p>
      </div>
    </Card>
  );
}
`;

export var CardProps = `
type CardProps = {
  className?: string,
  width?: string | number,
  height?: string | number,
  shadow?: string,
  backgroundColor?: string,
  styles?: Object,
  children: any
};

type CardHeaderProps = {
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
    headerContent?: Object,
    title?: Object,
    subtitle?: Object
  }
};

type CardMediaProps = {
  className?: string,
  width?: string | number,
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
`;
