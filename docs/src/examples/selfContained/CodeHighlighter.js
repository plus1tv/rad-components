import React from 'react';
import { Codehighlighter } from 'rad-codehighlighter';
import './../../highlighter.css';

export function CodeHighlighterSelfContained(props) {
  return (
    <Codehighlighter language="javascript">
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
    </Codehighlighter>
  );
}

export var CodeHighlighterSelfContainedSource = `
import React from 'react';
import { Codehighlighter } from 'radcomponents';
import './../RADHighlighterTheme.css';

export function CodeHighlighterSelfContained (props) {
  return (
    <Codehighlighter language="javascript">
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
    </Codehighlighter>
  );
}
`;

export var CodeHighlighterProps = `
type CodehighlighterProps = {
  className?: string,
  language: string,
  plugins?: { title: string, func: Function },
  children: any
};
`;
