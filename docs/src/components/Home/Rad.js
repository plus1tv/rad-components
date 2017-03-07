import React from 'react';
import { css, StyleSheet } from 'aphrodite';
import Anime from 'react-anime';

const styles = StyleSheet.create({
  rad: {
    display: 'flex',
    width: '100%'
  }
});

function Rad(props) {
  return (
    <svg
      className={css(styles.rad)}
      height="258px"
      width="216px"
      version="1.1"
      viewBox="0 0 216 258"
    >
      <defs />
      <g id="Page-1" fill="none" stroke="none" strokeWidth="1">
        <g id="Home" transform="translate(-612.000000, -112.000000)">
          <g id="RAD" transform="translate(612.000000, 112.000000)">
            <Anime
              easing="linear"
              opacity={[0, 1]}
              translateX={[-120, 0]}
              scale={[0.35, 1]}
              delay={(e, i) => 600}
              duration={(e, i) => 500}
            >
              <polygon
                id="Path-2"
                fill="#FF9EF8"
                points="19.0588235 229.46729 10.0588235 0 94.2352941 63.0934579 54 106.897196 82.0588235 164.766355 59.2941176 152.308411 75.1764706 231.878505 42 145 59.2941176 143.065421 35.4705882 113.327103"
              />
            </Anime>
            <Anime
              easing="linear"
              opacity={[0, 1]}
              translateX={[-120, 0]}
              scale={[0.35, 1]}
              delay={(e, i) => 900}
              duration={(e, i) => 500}
            >
              <polygon
                id="Path-2"
                fill="#8574FF"
                points="9 229.46729 0 0 84.1764706 63.0934579 43.9411765 106.897196 72 164.766355 49.2352941 152.308411 65.1176471 231.878505 33.8823529 128.598131 54 143.869159 25.4117647 113.327103"
              />
            </Anime>
            <Anime
              easing="linear"
              opacity={[0, 1]}
              translateX={[-120, 0]}
              scale={[0.35, 1]}
              delay={(e, i) => 1150}
              duration={(e, i) => 500}
            >
              <polygon
                id="Path-3"
                fill="#D0FFFE"
                points="17.4705882 38.9813084 57.1764706 65.5046729 19.0588235 94.8411215"
              />
            </Anime>
            <Anime
              easing="linear"
              opacity={[0, 1]}
              translateX={[-120, 0]}
              scale={[0.35, 1]}
              delay={(e, i) => 550}
              duration={(e, i) => 500}
            >
              <polygon
                id="Path-4"
                fill="#FF9EF8"
                points="64.5882353 123.373832 119.117647 0 141.352941 242.728972 102.176471 102.074766"
              />
            </Anime>
            <Anime
              easing="linear"
              opacity={[0, 1]}
              translateX={[-120, 0]}
              scale={[0.35, 1]}
              delay={(e, i) => 850}
              duration={(e, i) => 500}
            >
              <polygon
                id="Path-4"
                fill="#8574FF"
                points="57.1764706 130.205607 111.705882 6.8317757 133.941176 249.560748 94.7647059 108.906542"
              />
            </Anime>
            <Anime
              easing="linear"
              opacity={[0, 1]}
              translateX={[-120, 0]}
              scale={[0.35, 1]}
              delay={(e, i) => 1150}
              duration={(e, i) => 500}
            >
              <polygon
                id="Path-5"
                fill="#D0FFFE"
                points="91.5882353 90.4205607 104.294118 49.4299065 109.588235 96.046729"
              />
            </Anime>
            <Anime
              easing="linear"
              opacity={[0, 1]}
              translateX={[-120, 0]}
              scale={[0.35, 1]}
              delay={(e, i) => 500}
              duration={(e, i) => 500}
            >
              <polygon
                id="Path-6"
                fill="#FF9EF8"
                points="141.352941 10.8504673 159.882353 258 216 95.2429907"
              />
            </Anime>
            <Anime
              easing="linear"
              opacity={[0, 1]}
              translateX={[-120, 0]}
              scale={[0.35, 1]}
              delay={(e, i) => 800}
              duration={(e, i) => 500}
            >
              <polygon
                id="Path-6"
                fill="#8574FF"
                points="131.823529 10.8504673 150.352941 258 206.470588 95.2429907"
              />
            </Anime>
            <Anime
              easing="linear"
              opacity={[0, 1]}
              translateX={[-120, 0]}
              scale={[0.35, 1]}
              delay={(e, i) => 1100}
              duration={(e, i) => 500}
            >
              <polygon
                id="Path-6"
                fill="#D0FFFE"
                points="154.058824 51.8411215 161.549437 180.037383 184.235294 95.6154548"
              />
            </Anime>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default Rad;
