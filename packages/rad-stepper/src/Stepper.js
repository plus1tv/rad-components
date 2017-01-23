// @flow
import React, { Component } from 'react';

export type StepperProps = {
  breakPoint?: number,
  showStep?: Function,
  activeStep?: number,
  seperatorSize?: string | number,
  stepIndexColor?: string,
  styles?: {
    hStepList?: Object,
    vStepList?: Object,
    hStepItem?: Object,
    vStepItem?: Object,
    hstepLead?: Object,
    stepIndex?: Object,
    vStepLead?: Object,
    vStepLast?: Object
  },
  children: any
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
    if (props.showStep && typeof props.activeStep === 'number') {
      this.state = {
        height: window.innerHeight,
        width: window.innerWidth,
        horizontal: window.innerWidth > (props.breakPoint || 767) ? true : false
      };
    } else {
      this.state = {
        height: window.innerHeight,
        width: window.innerWidth,
        horizontal: window.innerWidth > (props.breakPoint || 767)
          ? true
          : false,
        activeStep: 0
      };
    }
    this.handleResize = this.handleResize.bind(this);
  }

  handleResize(e: any): void {
    if (this.state.width <= (this.props.breakPoint || 767)) {
      this.setState((prevState: State, currProps: StepperProps) => ({
        height: window.innerHeight,
        width: window.innerWidth,
        horizontal: false
      }));
    }

    if (this.state.width > (this.props.breakPoint || 767)) {
      this.setState((prevState: State, currProps: StepperProps) => ({
        height: window.innerHeight,
        width: window.innerWidth,
        horizontal: true
      }));
    }
  }

  showStep(step: number): void {
    this.setState((prevState: State, currProps: StepperProps) => ({
      activeStep: step
    }));
  }

  componentDidMount(): void {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount(): void {
    window.removeEventListener('resize', this.handleResize);
  }
  render() {
    const styles = {
      hStepper: { display: 'flex', flexDirection: 'column' },
      vStepper: { display: 'flex', flexDirection: 'row' },
      hStepList: {
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'row',
        ...(this.props && this.props.styles && this.props.styles.hStepList
          ? this.props.styles.hStepList
          : {})
      },
      vStepList: {
        listStyle: 'none',
        ...(this.props.styles && this.props.styles.vStepList
          ? this.props.styles.vStepList
          : {})
      },
      hStepItem: {
        display: 'flex',
        alignItems: 'center',
        ...(this.props.styles && this.props.styles.hStepItem
          ? this.props.styles.hStepItem
          : {})
      },
      vStepItem: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        ...(this.props.styles && this.props.styles.vStepItem
          ? this.props.styles.vStepItem
          : {})
      },
      vIndexNLabel: { display: 'flex' },
      hstepLead: {
        margin: 10,
        display: 'block',
        borderTop: 'solid',
        borderTopWidth: '1px',
        borderColor: '#d9d9d9',
        width: this.props.seperatorSize || 200,
        ...(this.props.styles && this.props.styles.hstepLead
          ? this.props.styles.hstepLead
          : {})
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
        color: '#fff',
        ...(this.props.styles && this.props.styles.stepIndex
          ? this.props.styles.stepIndex
          : {})
      },
      vStepLead: {
        margin: 10,
        padding: 10,
        borderLeft: '1px solid #d9d9d9',
        ...(this.props.styles && this.props.styles.vStepLead
          ? this.props.styles.vStepLead
          : {})
      },
      vStepLast: {
        margin: 10,
        padding: 10,
        borderLeft: '1px solid transparent',
        ...(this.props.styles && this.props.styles.vStepLast
          ? this.props.styles.vStepLast
          : {})
      }
    };
    let children: [any] = [];
    if (this.props.children) {
      if (Array.isArray(this.props.children)) children = this.props.children;
      else children = [ this.props.children ];
    }

    if (this.state.horizontal) {
      return (
        <div style={styles.hStepper} className={this.props.className || 'stepper'}>
          <ul style={styles.hStepList}>
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
                    style={styles.hStepItem}
                  >
                    {key === 0 ? null : <span style={styles.hstepLead} />}
                    <p style={styles.stepIndex}>{key + 1}</p>
                    <p>{child.props.label}</p>
                  </li>
                );
              })}
          </ul>
          {
            typeof this.props.activeStep === 'number'
              ? children[this.props.activeStep]
              : children[this.state.activeStep]
          }
        </div>
      );
    }
    return (
      <div style={styles.vStepper} className={this.props.className || 'stepper'}>
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
                  {key === children.length - 1 ? <div style={styles.vStepLast}>
                        {
                          this.props.activeStep === key
                            ? children[this.props.activeStep]
                            : this.state.activeStep === key
                              ? children[this.state.activeStep]
                              : null
                        }
                      </div> : <div style={styles.vStepLead}>
                        {
                          this.props.activeStep === key
                            ? children[this.props.activeStep]
                            : this.state.activeStep === key
                              ? children[this.state.activeStep]
                              : null
                        }
                      </div>}
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
    <div className={props.className ? props.className : 'step'}>
      {props.children}
    </div>
  );
}
