import React from 'react';

import { NavbarSelfContained, NavbarSelfContainedSource, NavbarProps } from './examples/selfContained/Navbar.js';
import { ModalSelfContained, ModalSelfContainedSource, ModalProps } from './examples/selfContained/Modal.js';
import { NavDrawerSelfContained, NavDrawerSelfContainedSource, NavDrawerProps } from './examples/selfContained/NavDrawer.js';
import { CardSelfContained, CardSelfContainedSource, CardProps } from './examples/selfContained/Card.js';
import { CodeHighlighterSelfContained, CodeHighlighterSelfContainedSource, CodeHighlighterProps } from './examples/selfContained/CodeHighlighter.js';
import { TabsSelfContained, TabsSelfContainedSource, TabsProps } from './examples/selfContained/Tabs.js';
import { StepperSelfContained, StepperSelfContainedSource, StepperProps } from './examples/selfContained/Stepper.js';
import { NotificationSelfContained, NotificationSelfContainedSource, NotificationProps } from './examples/selfContained/Notification.js';
import { PopoverSelfContained, PopoverSelfContainedSource, PopoverProps } from './examples/selfContained/Popover.js';

import { NavbarControlled, NavbarControlledSource } from './examples/controlled/Navbar.js';
import { NavDrawerControlled, NavDrawerControlledSource } from './examples/controlled/NavDrawer.js';
import { TabsControlled, TabsControlledSource } from './examples/controlled/Tabs.js';
import { StepperControlled, StepperControlledSource } from './examples/controlled/Stepper.js';
import { ModalControlled, ModalControlledSource } from './examples/controlled/Modal.js';
import { NotificationControlled, NotificationControlledSource } from './examples/controlled/Notification.js';
import { PopoverControlled, PopoverControlledSource } from './examples/controlled/Popover.js';

import { NavbarAnimated, NavbarAnimatedSource } from './examples/animated/Navbar.js';
import { ModalAnimated, ModalAnimatedSource } from './examples/animated/Modal.js';
import { NavDrawerAnimated, NavDrawerAnimatedSource } from './examples/animated/NavDrawer.js';
import { CardAnimated, CardAnimatedSource } from './examples/animated/Card.js';
import { TabsAnimated, TabsAnimatedSource } from './examples/animated/Tabs.js';
import { StepperAnimated, StepperAnimatedSource } from './examples/animated/Stepper.js';
import { NotificationAnimated, NotificationAnimatedSource } from './examples/animated/Notification.js';
import { PopoverAnimated, PopoverAnimatedSource } from './examples/animated/Popover.js';

export function getTitle (pathname) {
  let activeTitle,
      activeSource = [],
      activeProps = '',
      activeComponents = [];
  switch (pathname) {
    case '/docs/navbar':
      activeTitle = 'Navbar';
      activeSource = [
        NavbarSelfContainedSource,
        NavbarControlledSource,
        NavbarAnimatedSource
      ]
      activeProps = NavbarProps;
      activeComponents = [
        <NavbarSelfContained />,
        <NavbarControlled />,
        <NavbarAnimated />
      ];
      break;
    case '/docs/navdrawer':
      activeTitle = 'NavDrawer';
      activeSource = [
        NavDrawerSelfContainedSource,
        NavDrawerControlledSource,
        NavDrawerAnimatedSource
      ]
      activeProps = NavDrawerProps;
      activeComponents = [
        <NavDrawerSelfContained />,
        <NavDrawerControlled />,
        <NavDrawerAnimated />
      ];
      break;
    case '/docs/card':
      activeTitle = 'Card';
      activeSource = [
        CardSelfContainedSource,
        '',
        CardAnimatedSource
      ]
      activeProps = CardProps;
      activeComponents = [
        <CardSelfContained />,
        '',
        <CardAnimated />
      ];
      break;
    case '/docs/codehighlighter':
      activeTitle = 'CodeHighlighter';
      activeSource = [
        CodeHighlighterSelfContainedSource
      ];
      activeProps = CodeHighlighterProps;
      activeComponents = [
        <CodeHighlighterSelfContained />
      ];
      break;
    case '/docs/tabs':
      activeTitle = 'Tabs';
      activeSource = [
        TabsSelfContainedSource,
        TabsControlledSource,
        TabsAnimatedSource
      ]
      activeProps = TabsProps;
      activeComponents = [
        <TabsSelfContained />,
        <TabsControlled />,
        <TabsAnimated />
      ];
      break;
    case '/docs/stepper':
      activeTitle = 'Stepper';
      activeSource = [
        StepperSelfContainedSource,
        StepperControlledSource,
        StepperAnimatedSource
      ]
      activeProps = StepperProps;
      activeComponents = [
        <StepperSelfContained />,
        <StepperControlled />,
        <StepperAnimated />
      ];
      break;
    case '/docs/modal':
      activeTitle = 'Modal';
      activeSource = [
        ModalSelfContainedSource,
        ModalControlledSource,
        ModalAnimatedSource
      ]
      activeProps = ModalProps;
      activeComponents = [
        null,
        // <ModalSelfContained />,
        <ModalControlled />,
        null,
        // <ModalAnimated />
      ];
      break;
    case '/docs/notification':
      activeTitle = 'Notification';
      activeSource = [
        NotificationSelfContainedSource,
        NotificationControlledSource,
        NotificationAnimatedSource
      ]
      activeProps = NotificationProps;
      activeComponents = [
        <NotificationSelfContained />,
        <NotificationControlled />,
        <NotificationAnimated />
      ];
      break;
    case '/docs/popover':
      activeTitle = 'Popover';
      activeSource = [
        PopoverSelfContainedSource,
        PopoverControlledSource,
        PopoverAnimatedSource
      ]
      activeProps = PopoverProps;
      activeComponents = [
        <PopoverSelfContained />,
        <PopoverControlled />,
        <PopoverAnimated />
      ];
      break;
      default:
      break;
  }

  return {activeTitle, activeSource, activeProps, activeComponents};
}
