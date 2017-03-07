import React from 'react';
import { css, StyleSheet } from 'aphrodite';
import { getTitle } from './../../utils.js';
import { Codehighlighter } from 'rad-codehighlighter';
import './../../highlighter.css';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRight: '1px solid #FF9EF8'
  },
  viewSource: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    margin: '0 40px',
    backgroundColor: '#F9FFFF'
  },
  highlight: {
    maxWidth: 650,
    borderLeft: '4px solid #8574FF'
  },
  editorBar: {
    display: 'flex',
    backgroundColor: '#8574FF',
    width: '100%',
    height: 60
  },
  editorTab: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#FF9EF8',
    width: '100%',
    height: 60
  },
  editorActiveTab: {
    backgroundColor: '#8574FF'
  },
  editorTabText: {
    color: '#D0FFFE',
    fontWeight: 300,
    fontSize: 16,
    letterSpacing: 2,
    margin: 0
  },
  midTab: {
    borderLeft: '1px solid #D0FFFE',
    borderRight: '1px solid #D0FFFE'
  },
  viewProps: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    backgroundColor: '#FF9EF8',
    color: '#D0FFFE'
  },
  propsHeader: {
    display: 'flex',
    alignItems: 'center'
  },
  viewHeader: {
    display: 'flex',
    alignItems: 'center',
    height: 60,
    fontWeight: 300,
    letterSpacing: 2,
    margin: 0,
    marginLeft: 20
  },
  show: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: 700,
    letterSpacing: 2,
    margin: 0,
    marginLeft: 'auto',
    marginRight: 20
  }
});

class ViewSource extends React.Component {
  componentDidMount() {
    this.props.blockAnime();
  }

  componentWillUnmount() {
    this.props.blockAnime();
  }

  render() {
    let activeInfo = getTitle(this.props.pathname.pathname);

    if (this.props.showProps) {
      return (
        <div className={css(styles.container)}>
          <div className={css(styles.viewSource)}>
            <div className={css(styles.editorBar)}>
              <div
                onClick={() => this.props.selectComponent(0)}
                className={
                  this.props.selectedComponent === 0
                    ? css(styles.editorTab, styles.editorActiveTab)
                    : css(styles.editorTab)
                }
              >
                <h2 className={css(styles.editorTabText)}>
                  Self Contained {activeInfo.activeTitle}.js
                </h2>
              </div>
              <div
                onClick={() => this.props.selectComponent(1)}
                className={
                  this.props.selectedComponent === 1
                    ? css(
                        styles.editorTab,
                        styles.midTab,
                        styles.editorActiveTab
                      )
                    : css(styles.editorTab, styles.midTab)
                }
              >
                <h2 className={css(styles.editorTabText)}>
                  Controlled {activeInfo.activeTitle}.js
                </h2>
              </div>
              <div
                onClick={() => this.props.selectComponent(2)}
                className={
                  this.props.selectedComponent === 2
                    ? css(styles.editorTab, styles.editorActiveTab)
                    : css(styles.editorTab)
                }
              >
                <h2 className={css(styles.editorTabText)}>
                  Animated {activeInfo.activeTitle}.js
                </h2>
              </div>
            </div>
          </div>
          <div className={css(styles.viewProps)}>
            <div className={css(styles.propsHeader)}>
              <h2 className={css(styles.viewHeader)}>{`<Props>`}</h2>
              <h2
                className={css(styles.show)}
                onClick={this.props.showPropsInfo}
              >
                &#x025B4;
              </h2>
            </div>
            <Codehighlighter
              className={css(styles.highlight)}
              language="javascript"
              plugins={[
                {
                  title: 'line-numbers',
                  func: lineNumbers
                }
              ]}
            >
              {activeInfo.activeProps}
            </Codehighlighter>
          </div>
        </div>
      );
    }
    return (
      <div className={css(styles.container)}>
        <div className={css(styles.viewSource)}>
          <div className={css(styles.editorBar)}>
            <div
              onClick={() => this.props.selectComponent(0)}
              className={
                this.props.selectedComponent === 0
                  ? css(styles.editorTab, styles.editorActiveTab)
                  : css(styles.editorTab)
              }
            >
              <h2 className={css(styles.editorTabText)}>
                Self Contained {activeInfo.activeTitle}.js
              </h2>
            </div>
            <div
              onClick={() => this.props.selectComponent(1)}
              className={
                this.props.selectedComponent === 1
                  ? css(styles.editorTab, styles.midTab, styles.editorActiveTab)
                  : css(styles.editorTab, styles.midTab)
              }
            >
              <h2 className={css(styles.editorTabText)}>
                Controlled {activeInfo.activeTitle}.js
              </h2>
            </div>
            <div
              onClick={() => this.props.selectComponent(2)}
              className={
                this.props.selectedComponent === 2
                  ? css(styles.editorTab, styles.editorActiveTab)
                  : css(styles.editorTab)
              }
            >
              <h2 className={css(styles.editorTabText)}>
                Animated {activeInfo.activeTitle}.js
              </h2>
            </div>
          </div>
          <Codehighlighter
            className={css(styles.highlight)}
            language="javascript"
            plugins={[
              {
                title: 'line-numbers',
                func: lineNumbers
              }
            ]}
          >
            {activeInfo.activeSource[this.props.selectedComponent]}
          </Codehighlighter>
        </div>
        <div className={css(styles.viewProps)}>
          <div className={css(styles.propsHeader)}>
            <h2 className={css(styles.viewHeader)}>{`<Props>`}</h2>
            <h2 className={css(styles.show)} onClick={this.props.showPropsInfo}>
              &#x025BE;
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

function lineNumbers(Prism) {
  if (typeof self === 'undefined' || !self.Prism || !self.document) {
    return;
  }
  Prism.hooks.add('complete', function(env) {
    if (!env.code) {
      return;
    }

    var pre = env.element.parentNode;
    var clsReg = /\s*\bline-numbers\b\s*/;
    if (
      !pre ||
        !/pre/i.test(pre.nodeName) ||
        !clsReg.test(pre.className) && !clsReg.test(env.element.className)
    ) {
      return;
    }

    if (env.element.querySelector('.line-numbers-rows')) {
      return;
    }

    if (clsReg.test(env.element.className)) {
      env.element.className = env.element.className.replace(clsReg, '');
    }
    if (!clsReg.test(pre.className)) {
      pre.className += ' line-numbers';
    }

    var match = env.code.match(/\n(?!$)/g);
    var linesNum = match ? match.length + 1 : 1;
    var lineNumbersWrapper;

    var lines = new Array(linesNum + 1);
    lines = lines.join('<span></span>');

    lineNumbersWrapper = document.createElement('span');
    lineNumbersWrapper.setAttribute('aria-hidden', 'true');
    lineNumbersWrapper.className = 'line-numbers-rows';
    lineNumbersWrapper.innerHTML = lines;

    if (pre.hasAttribute('data-start')) {
      pre.style.counterReset = 'linenumber ' +
        (parseInt(pre.getAttribute('data-start'), 10) - 1);
    }
    env.element.appendChild(lineNumbersWrapper);
  });
}

export default ViewSource;
