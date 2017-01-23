<p align="center">
  <img align="center" src="./../../assets/RAD.png" height="250"/>
</p>
<h1 align="center">Rad Modal</h1>

A simple Modal component that is small and easily extendable.


The rad-modal module exposes 1 component:
```js
import { Codehighlighter } from 'rad-codehighlighter';
```
### `<Modal />` Props

#### `className?: string`
A css class you want to place on the component. If not passed it will
default to `modal`.
#### `width?: string | number`
The width you want to set the Modal to.

#### `height?: string | number`
The height you want to set the Modal to.

#### `openModal: Function`
Function that will open the modal.

#### `closeModal: Function`
Function that will close the modal.

### Sample Usage of Modal:
```js
class ModalControlled extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }
  openModal() {
    alert('Do something when you open the <Modal />');
    this.setState((prevState, currProps) => ({ isOpen: true }));
  }

  closeModal() {
    alert('Do something when you close the <Modal />');
    this.setState((prevState, currProps) => ({ isOpen: false }));
  }

  render() {
    return (
      <div>
        <button
          onClick={
            this.state.isOpen
              ? this.closeModal.bind(this)
              : this.openModal.bind(this)
          }
        >
          I am controlled
        </button>
        <Modal
          openModal={() => this.openModal()}
          closeModal={() => this.closeModal()}
          isOpen={this.state.isOpen}
        >
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
            <button style={{ width: 120, height: 30, borderRadius: 0 }}>
              Do Something
            </button>
            <button style={{ width: 120, height: 30, borderRadius: 0 }}>
              Do Something Else
            </button>
          </div>
        </Modal>
      </div>
    );
  }
}
```
