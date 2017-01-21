import React from 'react';
import { NavbarControlled } from './examples/controlled/Navbar.js';
import { NavbarSelfContained } from './examples/selfContained/Navbar.js';
// import {
//   // Navbar, Navbrand, NavItemsRight, NavItemsLeft,
//   Card, CardMedia, CardHeader,
//   // Tab, Tabs,
//   // Modal,
//   // Notification,
//   Popover
//   // Step, Stepper
//   // NavDrawer
// } from './../../dist/radfuckingcomponents.js';

// const Menu = (props) => <div><p style={{margin: 0,}}>Menu</p></div>
// // const Opener = (props) => <button>OpenMe</button>;
//
// class Test extends React.Component {
//   constructor (props) {
//     super(props);
//     this.state = {
//       active: 2,
//     }
//   }
//
//   showStep(key) {
//     this.setState((prevState, currProps) => ({active: key}));
//   }
//
//   render () {
//     return (
//       <div style={{display: 'flex', flexDirection: 'column', margin: 0, padding: 20, width: '100vw', height: '100vh', alignItems: 'center', justifyContent: 'center',}}>
//         <Card>
//           <CardHeader avatar="https://avatars2.githubusercontent.com/u/8888991?v=3&s=400"
//                       title="Kennet Postigo"
//                       subtitle="Developer @Koalesce"/>
//           <CardMedia media="https://9to5mac.files.wordpress.com/2013/09/rolling-waves.jpg"
//                      overlay={{title:"Flowing In", subtitle: "We Here"}}/>
//           <div style={{margin: 10}}>
//             <h3 style={{margin: 4}}>Hello Guys</h3>
//             <p style={{margin: 2}}>
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.
//             </p>
//           </div>
//         </Card>
//       </div>
//     );
//   }
// }

function Test (props) {
  return (
    <div>
      <NavbarControlled />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <NavbarSelfContained />
    </div>
  );
}

export default Test;


//{
  /*      <Navbar>
        <a to="/">
          <Navbrand title="SomeApp"/>
        </a>
        <NavItemsLeft>
          <a>itemLeft1</a>
          <a>itemLeft2</a>
          <a>itemLeft3</a>
        </NavItemsLeft>
        <NavItemsRight>
          <a>itemRight1</a>
          <a>itemRight2</a>
          <a>itemRight3</a>
        </NavItemsRight>
      </Navbar>

      <Navbar height={80} shadow='none' backgroundColor="violet">
        <a to="/">
          <Navbrand title="SomeApp"/>
        </a>
        <NavItemsLeft>
          <a>itemLeft1</a>
          <a>itemLeft2</a>
          <a>itemLeft3</a>
        </NavItemsLeft>
        <NavItemsRight>
          <a>itemRight1</a>
          <a>itemRight2</a>
          <a>itemRight3</a>
        </NavItemsRight>
      </Navbar>

      <Card>
        <CardHeader avatar="https://avatars2.githubusercontent.com/u/8888991?v=3&s=400"
                    title="Kennet Postigo"
                    subtitle="Developer @Koalesce"/>
        <CardMedia media="https://9to5mac.files.wordpress.com/2013/09/rolling-waves.jpg"
                   overlay={{title:"Flowing In", subtitle: "We Here"}}/>
        <div style={{margin: 10}}>
          <h3 style={{margin: 4}}>Hello Guys</h3>
          <p style={{margin: 2}}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.
          </p>
        </div>
      </Card>

      <Tabs>
        <Tab label="RAD">
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <h3>Some RAD Content 1 </h3>
          </div>
        </Tab>
        <Tab label="Awesome">
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <h3>Some Awesome Content 2 </h3>
          </div>
        </Tab>

        <Tab label="Interesting">
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <h3>Some Interesting Content 3 </h3>
          </div>
        </Tab>
      </Tabs>

      <Notification showNotification={true} notiPlacement="bottomLeft" borderHighlight="#FF9EF8">
        <div>
          <h3 style={{margin: 2}}>Rad Notification Here!</h3>
          <p style={{margin: 2}}>This is a sample Notification.</p>
        </div>
      </Notification>

      <Popover menu={Menu} isOpen={this.state.open} toggle={() => this.toggle()}>
        <p style={{margin: 0}}>Item 1</p>
        <p style={{margin: 0}}>Item 2</p>
        <p style={{margin: 0}}>Item 3</p>
        <p style={{margin: 0}}>Item 4</p>
      </Popover>

      <Stepper>
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
      */
//}
