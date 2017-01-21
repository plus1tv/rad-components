// @flow
import React, { Component } from 'react';

export type StepperProps = {
  breakPoint?: number,
  showStep?: Function,
  activeStep?: number,
  seperatorSize?: string | number,
  stepIndexColor?: string,
  children: any,
  style?: Object
};

export type State = {
  height: number,
  width: number,
  horizontal: boolean,
  activeStep?: number
};

export class Stepper extends Component {
  props: StepperProps;
  state: State;
  handleResize: Function;

  constructor(props: StepperProps) {
    super(props);
    if (!props.showStep || !props.activeStep) {
      this.state = {
        height: window.innerHeight,
        width: window.innerWidth,
        horizontal: window.innerWidth > (props.breakPoint || 767)
          ? true
          : false,
        activeStep: 0
      };
    } else {
      this.state = {
        height: window.innerHeight,
        width: window.innerWidth,
        horizontal: window.innerWidth > (props.breakPoint || 767) ? true : false
      };
    }
    this.handleResize = this.handleResize.bind(this);
  }

  handleResize(e: any) {
    if (this.state.width <= (this.props.breakPoint || 767)) {
      this.setState((prevState, currProps) => ({
        height: window.innerHeight,
        width: window.innerWidth,
        horizontal: false
      }));
    }

    if (this.state.width > (this.props.breakPoint || 767)) {
      this.setState((prevState, currProps) => ({
        height: window.innerHeight,
        width: window.innerWidth,
        horizontal: true
      }));
    }
  }

  showStep(step: number) {
    this.setState((prevState: State, currProps: StepperProps) => ({
      activeStep: step
    }));
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }
  render() {
    const styles = {
      Hstepper: { display: 'flex', flexDirection: 'column' },
      Vstepper: { display: 'flex', flexDirection: 'row' },
      hStepList: {
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'row',
        listStyle: 'none'
      },
      vStepList: {
        display: 'flex',
        flexDirection: 'column',
        listStyle: 'none'
      },
      stepItem: { display: 'flex', alignItems: 'center' },
      vStepItem: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      },
      vIndexNLabel: { display: 'flex' },
      stepLead: {
        margin: 10,
        display: 'block',
        borderTop: 'solid',
        borderTopWidth: '1px',
        borderColor: '#d9d9d9',
        width: this.props.seperatorSize || 200
      },
      stepIndex: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        height: 30,
        width: 30,
        backgroundColor: this.props.stepIndexColor || '#FF9EF8',
        marginRight: 10,
        color: '#fff'
      },
      vStepLead: { margin: 10, padding: 10, borderLeft: '1px solid #d9d9d9' },
      vStepLast: {
        margin: 10,
        padding: 10,
        borderLeft: '1px solid transparent'
      }
    };
    let children = [];
    if (this.props.children) {
      if (Array.isArray(this.props.children)) children = this.props.children;
      else children = [ this.props.children ];
    }

    if (this.state.horizontal) {
      return (
        <div style={styles.Hstepper}>
          <ul style={styles.hStepList}>
            {children.map((child: any, key: number) => {
                if (key === 0) {
                  return (
                    <li
                      onClick={
                        e =>
                          this.props.showStep
                            ? this.props.showStep(key)
                            : this.showStep(key)
                      }
                      key={key}
                      key={key}
                      style={styles.stepItem}
                    >
                      <p style={styles.stepIndex}>{key + 1}</p>
                      <p>{child.props.label}</p>
                    </li>
                  );
                }
                return (
                  <li
                    onClick={
                      e =>
                        this.props.showStep
                          ? this.props.showStep(key)
                          : this.showStep(key)
                    }
                    key={key}
                    style={styles.stepItem}
                  >
                    <span style={styles.stepLead} />
                    <p style={styles.stepIndex}>{key + 1}</p>
                    <p>{child.props.label}</p>
                  </li>
                );
              })}
          </ul>
          {
            this.props.activeStep != undefined
              ? children[this.props.activeStep]
              : children[this.state.activeStep]
          }
        </div>
      );
    }
    return (
      <div style={styles.Vstepper}>
        <ul style={styles.vStepList}>
          {children.map((child: any, key: number) => {
              return (
                <li
                  onClick={
                    e =>
                      this.props.showStep
                        ? this.props.showStep(key)
                        : this.showStep(key)
                  }
                  key={key}
                  style={styles.vStepItem}
                >
                  <div style={styles.vIndexNLabel}>
                    <p style={styles.stepIndex}>{key + 1}</p>
                    <p>{child.props.label}</p>
                  </div>
                  {
                    key === children.length - 1
                      ? this.state.activeStep === key
                        ? <div style={styles.vStepLast}>
                          {
                            this.props.activeStep != undefined
                              ? children[this.props.activeStep]
                              : children[this.state.activeStep]
                          }
                        </div>
                        : null
                      : <div style={styles.vStepLead}>
                        {
                          this.props.activeStep === key
                            ? children[this.state.activeStep]
                            : this.state.activeStep === key
                              ? children[this.state.activeStep]
                              : null
                        }
                      </div>
                  }
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export type StepProps = { className?: string, children: any };

export function Step(props: StepProps) {
  return (
    <div className={props.className ? props.className : ''}>
      {props.children}
    </div>
  );
}
