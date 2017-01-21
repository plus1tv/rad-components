import React from 'react';
import { CodeHighlighter } from './../../../../packages/rad-codehighlighter/dist/Codehighlighter.min.js';
import './../../highlighter.css';

export function CodeHighlighterSelfContained (props) {
  return (
    <CodeHighlighter language="javascript">
      {
`
<Router>
  <div className={css(styles.container)}>
    <Match exactly pattern='/' component={Home}/>
    <Match pattern="/docs" component={Documentation}/>
    <Match pattern="/test" component={Test}/>
    <Miss component={NotFound}/>
    <Footer />
  </div>
</Router>
`
      }
    </CodeHighlighter>
  );
}

export var CodeHighlighterSelfContainedSource =
`
import React from 'react';
import { CodeHighlighter } from 'radcomponents';
import './../RADHighlighterTheme.css';

export function CodeHighlighterSelfContained (props) {
  return (
    <CodeHighlighter language="javascript">
      {
          \`
          <Router>
            <div className={css(styles.container)}>
              <Match exactly pattern='/' component={Home}/>
              <Match pattern="/docs" component={Documentation}/>
              <Match pattern="/test" component={Test}/>
              <Miss component={NotFound}/>
              <Footer />
            </div>
          </Router>
          \`
      }
    </CodeHighlighter>
  );
}
`;

export var CodeHighlighterProps =
`
Card.propTypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  shadow: React.PropTypes.string,
};

CardHeader.propTypes = {
  height: React.PropTypes.number,
  avatar: React.PropTypes.string,
  title: React.PropTypes.string,
  subtitle: React.PropTypes.string,
  avatarHeight: React.PropTypes.number,
  avatarWidth: React.PropTypes.number,
  titleSize: React.PropTypes.number,
  subtitleSize: React.PropTypes.number,
};

CardMedia.propTypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  media: React.PropTypes.string,
};
`;
