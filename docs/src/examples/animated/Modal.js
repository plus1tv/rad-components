import React from 'react';
import Anime from 'react-anime';
import { Modal } from './../../../../packages/rad-modal/dist/Modal.min.js';

const Opener = (props) => <button>Im Self Contained</button>;

export function ModalAnimated (props) {
  return (
    <Modal ModalOpener={Opener}>
      <Anime easing="linear"
         autoplay={true}
         duration={300}
         delay={() => 0}
         translateY={[-100, 0]}>
        <div>
          <h2>This Modal is Pretty Rad!?!?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <div>
            <button style={{width: 120, height: 30, borderRadius: 0}}>Do Something</button>
            <button style={{width: 120, height: 30, borderRadius: 0}}>Do Something Else</button>
          </div>
        </div>
      </Anime>
    </Modal>
  );
}

export var ModalAnimatedSource =
`
import React from 'react';
import { Modal } from 'radcomponents';

const Opener = (props) => <button>Im Self Contained</button>;

function ModalAnimated (props) {
  return (
    <Modal ModalOpener={Opener}>
      <h2>This Modal is Pretty Rad!?!?</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
        ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </p>
      <div>
        <button style={{width: 120, height: 30, borderRadius: 0}}>Do Something</button>
        <button style={{width: 120, height: 30, borderRadius: 0}}>Do Something Else</button>
      </div>
    </Modal>
  );
}
`;
