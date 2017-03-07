import React from 'react';
import { Notification } from 'rad-notification';

export function NotificationSelfContained(props) {
  return (
    <Notification
      showNotification={true}
      notiPlacement="bottomLeft"
      borderHighlight="#FF9EF8"
    >
      <div>
        <h3 style={{ margin: 2 }}>Rad Notification Here!</h3>
        <p style={{ margin: 2 }}>This is a sample Notification.</p>
      </div>
    </Notification>
  );
}

export var NotificationSelfContainedSource = `
import React from 'react';
import { Notification } from 'radcomponents';

export function NotificationSelfContained (props) {
  return (
    <Notification showNotification={true}
                  notiPlacement="bottomLeft"
                  borderHighlight="#FF9EF8">
      <div>
        <h3 style={{margin: 2}}>Rad Notification Here!</h3>
        <p style={{margin: 2}}>This is a sample Notification.</p>
      </div>
    </Notification>
  );
}
`;

export var NotificationProps = `
type NotificationProps = {
  className?: string,
  width?: string | number,
  height?: string | number,
  showNotification: boolean,
  dismiss: Function,
  notiPlacement?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight',
  borderHighlight: string,
  backgroundColor?: string,
  styles?: {
    notification?: Object,
    dismiss?: Object,
    centerContainer?: Object,
    notificationDismissed?: Object
  },
  children: any
};
`;
