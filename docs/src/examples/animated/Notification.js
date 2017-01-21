import React from 'react';
import Anime from 'react-anime';
import { Notification } from './../../../../packages/rad-notification/dist/Notification.min.js';

export function NotificationAnimated (props) {
  return (
    <Anime>
      <Notification showNotification={true}
                    notiPlacement="bottomLeft"
                    borderHighlight="#FF9EF8">
        <div>
          <h3 style={{margin: 2}}>Rad Notification Here!</h3>
          <p style={{margin: 2}}>This is a sample Notification.</p>
        </div>
      </Notification>
    </Anime>
  );
}

export var NotificationAnimatedSource =
`
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
