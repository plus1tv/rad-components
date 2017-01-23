import React from 'react';
import { Tabs, Tab } from './../../packages/rad-tabs/dist/Tabs.js';

export default class TabsControlled extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }

  showTab (tabIndex) {
    alert('do something when you click a <Tab />');
    this.setState((prevState) => ({activeTab: tabIndex}));
  }

  render () {
    return (
      <Tabs activeTab={this.state.activeTab} showTab={(index) => this.showTab(index)}>
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
}
