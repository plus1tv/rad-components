import React from 'react';
import Anime from 'react-anime';
import { Card, CardHeader, CardMedia } from 'rad-card';

export function CardAnimated(props) {
  return (
    <Card>
      <Anime
        easing="linear"
        autoplay={true}
        duration={300}
        delay={() => 0}
        translateY={[-100, 0]}
      >
        <div>
          <CardHeader
            avatar="https://avatars2.githubusercontent.com/u/8888991?v=3&amp;s=400"
            title="Kennet Postigo"
            subtitle="Developer @Hyperfuse"
          />
        </div>
      </Anime>
      <Anime
        easing="linear"
        autoplay={true}
        duration={300}
        delay={() => 0}
        translateX={[-360, 0]}
      >
        <div>
          <CardMedia
            media="https://9to5mac.files.wordpress.com/2013/09/rolling-waves.jpg"
            overlay={{ title: 'Flowing In', subtitle: 'We Here' }}
          />
        </div>
      </Anime>
      <Anime
        easing="linear"
        autoplay={true}
        duration={300}
        delay={() => 0}
        translateY={[100, 0]}
      >
        <div style={{ margin: 10 }}>
          <h3 style={{ margin: 4 }}>Hello Guys</h3>
          <p style={{ margin: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad.
          </p>
        </div>
      </Anime>
    </Card>
  );
}

export var CardAnimatedSource = `
import React from 'react';
import Anime from 'react-anime';
import { Card, CardHeader, CardMedia } from 'radcomponents';

export function CardAnimated (props) {
  return (
    <Card>
      <Anime easing="linear"
         autoplay={true}
         duration={300}
         delay={() => 0}
         translateY={[-100, 0]}>
         <div>
           <CardHeader avatar="https://avatars2.githubusercontent.com/u/8888991?v=3&s=400"
                       title="Kennet Postigo"
                       subtitle="Developer @Hyperfuse"/>
         </div>
      </Anime>
      <Anime easing="linear"
         autoplay={true}
         duration={300}
         delay={() => 0}
         translateX={[-360, 0]}>
        <div>
          <CardMedia media="https://9to5mac.files.wordpress.com/2013/09/rolling-waves.jpg"
                     overlay={{title:"Flowing In", subtitle: "We Here"}}/>
        </div>
      </Anime>
      <Anime easing="linear"
         autoplay={true}
         duration={300}
         delay={() => 0}
         translateY={[100, 0]}>
        <div style={{margin: 10}}>
          <h3 style={{margin: 4}}>Hello Guys</h3>
          <p style={{margin: 2}}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad.
          </p>
        </div>
        </Anime>
    </Card>
  );
}
`;
