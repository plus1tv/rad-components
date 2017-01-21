import React, { Component } from 'react';
import { Notification } from 'rad-notification';

export class NotificationControlled extends Component {
  constructor (props) {
    super(props);
    this.state = {
      showNotification: false
    }
  }

  showNotification () {
    this.setState((prevState) => ({showNotification: true}));
  }

  dismiss () {
    alert('do something when you dismiss a <Notification />')
    this.setState((prevState) => ({showNotification: false}));
  }

  render () {
    return (
      <div>
        <button onClick={() => this.showNotification()}>click me to trigger a {'<Notification />'}</button>
        <Notification showNotification={this.state.showNotification}
                      dismiss={() => this.dismiss()}
                      notiPlacement="bottomLeft"
                      borderHighlight="#FF9EF8">
          <div>
            <h3 style={{margin: 2}}>Rad Notification Here!</h3>
            <p style={{margin: 2}}>This is a sample Notification.</p>
          </div>
        </Notification>
      </div>
    );
  }
}

export var NotificationControlledSource =
`import React, { Component } from 'react';
import { Notification } from 'radcomponents';

class NotificationControlled extends Component {
  constructor (props) {
    super(props);
    this.state = {
      showNotification: false
    }
  }

  showNotification () {
    this.setState((prevState) => ({showNotification: true}));
  }

  dismiss () {
    alert('do something when you dismiss a <Notification />')
    this.setState((prevState) => ({showNotification: false}));
  }

  render () {
    return (
      <div>
        <button onClick={() => this.showNotification()}>click me to trigger a {'<Notification />'}</button>
        <Notification showNotification={this.state.showNotification}
                      dismiss={() => this.dismiss()}
                      notiPlacement="bottomLeft"
                      borderHighlight="#FF9EF8">
          <div>
            <h3 style={{margin: 2}}>Rad Notification Here!</h3>
            <p style={{margin: 2}}>This is a sample Notification.</p>
          </div>
        </Notification>
      </div>
    );
  }
}
`;
