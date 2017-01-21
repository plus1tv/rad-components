import React from 'react';
import { Tabs, Tab } from 'rad-tabs';

export function TabsSelfContained (props) {
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

export var TabsSelfContainedSource =
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

export var TabsProps =
`
Tabs.propTypes = {
  width: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  height: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  backGroundColor: React.PropTypes.string,
  shadow: React.PropTypes.string,
  tabColor: React.PropTypes.string,
  tabHeight: React.PropTypes.number,
  onTabClick: React.PropTypes.func,
};
Tab.propTypes = {
  label: React.PropTypes.string,
};
`
