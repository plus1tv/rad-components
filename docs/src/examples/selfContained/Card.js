import React from 'react';
import { Card, CardHeader, CardMedia } from './../../../../packages/rad-card/dist/Card.min.js';

export function CardSelfContained (props) {
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

export var CardSelfContainedSource =
`
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

export var CardProps =
`
Card.propTypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  shadow: React.PropTypes.string,
};

CardHeader.propTypes = {
  height: React.PropTypes.number,
  avatar: React.PropTypes.string,
  title: React.PropTypes.string,
  subtitle: React.PropTypes.string,
  avatarHeight: React.PropTypes.number,
  avatarWidth: React.PropTypes.number,
  titleSize: React.PropTypes.number,
  subtitleSize: React.PropTypes.number,
};

CardMedia.propTypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  media: React.PropTypes.string,
};
`;
