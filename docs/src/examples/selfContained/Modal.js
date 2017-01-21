import React from 'react';
import { Modal } from 'rad-modal';

const Opener = (props) => <button>Im Self Contained</button>;

export function ModalSelfContained (props) {
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

export var ModalSelfContainedSource =
`
import React from 'react';
import { Modal } from 'radcomponents';

const Opener = (props) => <button>Im Self Contained</button>;

function ModalSelfContained (props) {
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

export var ModalProps =
`
Modal.propTypes = {
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  modalOpener: React.PropTypes.oneOfType([React.PropTypes.func, React.PropTypes.element]),
  toggle: React.PropTypes.func,
  isOpen: React.PropTypes.bool,
};
`
