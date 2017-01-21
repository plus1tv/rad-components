import React from 'react';
import Anime from 'react-anime';
import { Stepper, Step } from './../../../../packages/rad-stepper/dist/Stepper.min.js';

export function StepperAnimated (props) {
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

export var StepperAnimatedSource =
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
