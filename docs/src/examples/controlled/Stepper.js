import React, { Component } from 'react';
import { Stepper, Step } from 'rad-stepper';

export class StepperControlled extends Component {
  constructor (props) {
    super(props);
    this.state = {
      activeStep: 0
    };
  }

  showStep (stepIndex) {
    alert('do something when you click a <Step />');
    this.setState((prevState) => ({activeStep: stepIndex}));
  }

  render () {
    return (
      <Stepper activeStep={this.state.activeStep}
               showStep={(index) => this.showStep(index)}
               breakPoint={1000}
               seperatorSize={100}>
        <Step label="Rad">
          <p>This is a RAD Step</p>
        </Step>
        <Step label="Awesome">
          <p>This is a Awesome Step</p>
        </Step>
        <Step label="Great">
          <p>This is a Great Step</p>
        </Step>
      </Stepper>
    );
  }
}

export var StepperControlledSource =
`import React, { Component } from 'react';
import { Stepper, Step } from 'radcomponents';

class StepperControlled extends Component {
  constructor (props) {
    super(props);
    this.state = {
      activeStep: 0
    };
  }

  showStep (stepIndex) {
    alert('do something when you click a <Step />');
    this.setState((prevState) => ({activeStep: stepIndex}));
  }

  render () {
    return (
      <Stepper activeStep={this.state.activeStep}
               showStep={(index) => this.showStep(index)}
               breakPoint={1000}
               seperatorSize={100}>
        <Step label="Rad">
          <p>This is a RAD Step</p>
        </Step>
        <Step label="Awesome">
          <p>This is a Awesome Step</p>
        </Step>
        <Step label="Great">
          <p>This is a Great Step</p>
        </Step>
      </Stepper>
    );
  }
}
`;
