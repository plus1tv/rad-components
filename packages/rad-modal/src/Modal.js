// @flow

import React, { Component } from 'react';
import {
  findDOMNode,
  unmountComponentAtNode,
  unstable_renderSubtreeIntoContainer
} from 'react-dom';

class Portal extends Component {
  // Bind eventListeners, Initialize state & class properties
  constructor() {
    super();
    this.state = { active: false };
    this.handleWrapperClick = this.handleWrapperClick.bind(this);
    this.closePortal = this.closePortal.bind(this);
    this.handleOutsideMouseClick = this.handleOutsideMouseClick.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
    this.portal = null;
    this.node = null;
  }

  // Add event listeners when DOM is available
  componentDidMount() {
    // Add escape key to close modal is closeOnEsc is set. We want this on and
    // so remove the condition
    if (this.props.closeOnEsc) {
      document.addEventListener('keydown', this.handleKeydown);
    }
    // close on outside click, we want this on always so delete condition
    if (this.props.closeOnOutsideClick) {
      document.addEventListener('mouseup', this.handleOutsideMouseClick);
      document.addEventListener('touchstart', this.handleOutsideMouseClick);
    }

    // Is is openProp is truthy open the portal with openPortal method
    if (this.props.isOpen) {
      this.openPortal();
    }
  }

  componentWillReceiveProps(newProps) {
    // CAVEAT: find difference between renderPortal() and openPortal()
    // portal's 'is open' state is handled through the prop isOpen
    if (typeof newProps.isOpen !== 'undefined') {
      // if isOpen is true check if active is set
      if (newProps.isOpen) {
        // if active is true render portal
        // else open the portal
        if (this.state.active) {
          this.renderPortal(newProps);
        } else {
          this.openPortal(newProps);
        }
      }
      // if isOpen is false and active is true close the portal
      if (!newProps.isOpen && this.state.active) {
        this.closePortal();
      }
    }

    // portal handles its own 'is open' state
    if (typeof newProps.isOpen === 'undefined' && this.state.active) {
      this.renderPortal(newProps);
    }
  }

  // Remove eventListeners when component is unmounting and close the portal
  componentWillUnmount() {
    if (this.props.closeOnEsc) {
      document.removeEventListener('keydown', this.handleKeydown);
    }

    if (this.props.closeOnOutsideClick) {
      document.removeEventListener('mouseup', this.handleOutsideMouseClick);
      document.removeEventListener('touchstart', this.handleOutsideMouseClick);
    }

    this.closePortal(true);
  }

  //
  closePortal(isUnmounted = false) {
    // resetPortal to initial state
    const resetPortalState = () => {
      if (this.node) {
        unmountComponentAtNode(this.node);
        document.body.removeChild(this.node);
      }
      this.portal = null;
      this.node = null;
      if (isUnmounted !== true) {
        this.setState({ active: false });
      }
    };
    // if active is set handle doing stuff beforeCloseing() and resetPortalState()
    // else if beforeClose prop not set resetPortalState()
    // Then call onClose handler
    if (this.state.active) {
      if (this.props.beforeClose) {
        this.props.beforeClose(this.node, resetPortalState);
      } else {
        resetPortalState();
      }

      this.props.onClose();
    }
  }

  handleOutsideMouseClick(e) {
    // if state isn't active don't do anything
    if (!this.state.active) {
      return;
    }
    // find the root
    const root = findDOMNode(this.portal);
    //check if the root contains the target of if button on the event is there and not empty
    if (root.contains(e.target) || e.button && e.button !== 0) {
      return;
    }
    // stopPopagation and close the portal
    e.stopPropagation();
    this.closePortal();
  }

  // handle escape key press to close the portal when portal is active
  handleKeydown(e) {
    if (e.keyCode === KEYCODES.ESCAPE && this.state.active) {
      this.closePortal();
    }
  }

  // IMPORTANCE: figure out why this is needed
  handleWrapperClick(e) {
    e.preventDefault();
    e.stopPropagation();
    if (this.state.active) {
      return;
    }
    this.openPortal();
  }

  // sets active and calls renderPortal with props and true
  openPortal(props = this.props) {
    this.setState({ active: true });
    this.renderPortal(props, true);
  }

  renderPortal(props, isOpening) {
    // if node is not set, create div element and append it to the document body
    if (!this.node) {
      this.node = document.createElement('div');
      document.body.appendChild(this.node);
    }

    // if the portal is being opened not just set then call onOpen handler
    if (isOpening) {
      this.props.onOpen(this.node);
    }

    // copy children props
    let children = props.children;
    // clone children and add closePortal props
    if (typeof props.children.type === 'function') {
      children = React.cloneElement(props.children, {
        closePortal: this.closePortal
      });
    }
    // render the children into subtree
    this.portal = unstable_renderSubtreeIntoContainer(
      this,
      children,
      this.node,
      this.props.onUpdate
    );
  }

  render() {
    if (this.props.openByClickOn) {
      return React.cloneElement(this.props.openByClickOn, {
        onClick: this.handleWrapperClick
      });
    }
    return null;
  }
}
export type ModalProps = {
  className?: string,
  width?: string | number,
  height?: string | number,
  openModal: Function,
  closeModal: Function,
  isOpen: boolean,
  children: any
};

export class Modal extends Component {
  props: ModalProps;
  escToggle: Function;

  componentDidMount(): void {
    window.addEventListener('keydown', this.escToggle.bind(this));
  }

  componentWillUnmount(): void {
    window.removeEventListener('keydown', this.escToggle.bind(this));
  }

  escToggle(e: any): void {
    if (e.keyCode == 27 && this.props.isOpen) {
      this.props.closeModal();
    }
  }

  render() {
    const styles = {
      container: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1500
      },
      modalCover: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        position: 'fixed',
        zIndex: 10001
      },
      modal: {
        display: 'flex',
        flexDirection: 'column',
        width: this.props.width || 520,
        height: this.props.height || 460,
        backgroundColor: '#fff',
        border: `1px solid rgb(136, 136, 136)`,
        zIndex: 15000,
        padding: 30
      },
      close: {
        alignSelf: 'flex-end',
        fontSize: 28,
        fontWeight: 100,
        color: '#b0b0b0',
        margin: 0
      }
    };
    if (this.props.isOpen) {
      return (
        <div style={styles.container} className={this.props.className || ''}>
          <div
            onClick={() => this.props.closeModal()}
            style={styles.modalCover}
          />
          <div style={styles.modal}>
            <p onClick={() => this.props.closeModal()} style={styles.close}>
              ×
            </p>
            {this.props.children}
          </div>
        </div>
      );
    }
    return null;
  }
}
