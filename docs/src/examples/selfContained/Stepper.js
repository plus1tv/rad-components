import React from 'react';
import { Stepper, Step } from 'rad-stepper';

export function StepperSelfContained(props) {
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

export var StepperSelfContainedSource = `
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

export var StepperProps = `
type StepperProps = {
  className?: string,
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
type State = {
  height: number,
  width: number,
  horizontal: boolean,
  activeStep?: number
};
`;
