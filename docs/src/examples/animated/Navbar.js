import React from 'react';
import Anime from 'react-anime';
import { Navbar, Navbrand, NavItemsLeft, NavItemsRight } from 'rad-navbar';

export function NavbarAnimated(props) {
  return (
    <Navbar>
      <Anime
        easing="linear"
        autoplay={true}
        duration={300}
        delay={() => 0}
        translateX={[-100, 0]}
      >
        <Navbrand>
          <a to="/">Brand</a>
        </Navbrand>
      </Anime>
      <NavItemsLeft>
        <Anime
          easing="linear"
          autoplay={true}
          duration={300}
          delay={() => 0}
          translateY={[100, 0]}
        >
          <a>itemLeft1</a>
        </Anime>
      </NavItemsLeft>
      <NavItemsRight>
        <Anime
          easing="linear"
          autoplay={true}
          duration={300}
          delay={() => 0}
          translateY={[-100, 0]}
        >
          <a>itemRight1</a>
        </Anime>
      </NavItemsRight>
    </Navbar>
  );
}

export var NavbarAnimatedSource = `
import React from 'react';
import { Navbar, NavItemsLeft, NavItemsRight } from 'radcomponents';

function NavbarAnimated (props) {
  return (
    <Navbar>
      <a to="/">
        <Navbrand title="SomeApp"/>
      </a>
      <NavItemsLeft>
        <a>itemLeft1</a>
        <a>itemLeft2</a>
      </NavItemsLeft>
      <NavItemsRight>
        <a>itemRight1</a>
        <a>itemRight2</a>
      </NavItemsRight>
    </Navbar>
  );
}
`;
