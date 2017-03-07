import React from 'react';
import { Tabs, Tab } from 'rad-tabs';

export function TabsSelfContained(props) {
  return (
    <Tabs>
      <Tab label="RAD">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <h3>Some RAD Content 1 </h3>
        </div>
      </Tab>
      <Tab label="Awesome">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <h3>Some Awesome Content 2 </h3>
        </div>
      </Tab>

      <Tab label="Interesting">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <h3>Some Interesting Content 3 </h3>
        </div>
      </Tab>
    </Tabs>
  );
}

export var TabsSelfContainedSource = `
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

export var TabsProps = `
type TabsProps = {
  className?: string,
  width?: string | number,
  height?: string | number,
  backgroundColor?: string,
  shadow?: string,
  tabColor?: string,
  tabHeight?: number,
  activeTab?: number,
  showTab?: Function,
  styles?: { tabs?: Object, tabsList?: Object, tabItem?: Object },
  children: any
};
type State = { activeTab: number };
`;
