import React from 'react';
import { Stepper, Step } from 'rad-stepper';

export function StepperSelfContained (props) {
  return (
    <Stepper breakPoint={1000} seperatorSize={100}>
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

export var StepperSelfContainedSource =
`
import React from 'react';
import { Stepper, Step } from 'radcomponents';

function StepperSelfContained (props) {
  return (
    <Stepper breakPoint={1000} seperatorSize={100}>
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
`;

export var StepperProps =
`
Stepper.propTypes = {
  breakPoint: React.PropTypes.number,
  showStep: React.PropTypes.func,
  activeStep: React.PropTypes.number,
  seperatorSize: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  stepIndexColor: React.PropTypes.string,
};
`
