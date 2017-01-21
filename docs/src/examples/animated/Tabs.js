import React from 'react';
import Anime from 'react-anime';
import { Tabs, Tab } from './../../../../packages/rad-tabs/dist/Tabs.min.js';

export function TabsAnimated (props) {
  return (
    <Tabs>
      <Tab label="RAD">
        <Anime>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <h3>Some RAD Content 1 </h3>
          </div>
        </Anime>
      </Tab>
      <Tab label="Awesome">
        <Anime>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <h3>Some Awesome Content 2 </h3>
          </div>
        </Anime>
      </Tab>
      <Tab label="Interesting">
        <Anime>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <h3>Some Interesting Content 3 </h3>
          </div>
        </Anime>
      </Tab>
    </Tabs>
  );
}

export var TabsAnimatedSource =
`
import React from 'react';
import { Tabs, Tab } from 'radcomponents';

function TabsSelfContained (props) {
  return (
    <Tabs>
      <Tab label="RAD">
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <h3>Some RAD Content 1 </h3>
        </div>
      </Tab>
      <Tab label="Awesome">
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <h3>Some Awesome Content 2 </h3>
        </div>
      </Tab>

      <Tab label="Interesting">
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <h3>Some Interesting Content 3 </h3>
        </div>
      </Tab>
    </Tabs>
  );
}
`;
