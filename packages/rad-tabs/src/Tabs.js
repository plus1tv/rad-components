// @flow
import React, { Component } from 'react';

export type TabsProps = {
  className?: string,
  width?: string | number,
  height?: string | number,
  backgroundColor?: string,
  shadow?: string,
  tabColor?: string,
  tabHeight?: number,
  onTabClick?: Function,
  activeTab?: number,
  showTab?: Function,
  styles?: { tabs?: Object, tabsList?: Object, tabItem?: Object },
  children: any
};

export type State = { activeTab: number };

export class Tabs extends Component {
  props: TabsProps;
  state: State;
  constructor(props: TabsProps) {
    super(props);
    if (!typeof(props.activeTab) !== 'number' || !props.showTab) {
      this.state = { activeTab: 0 };
    }
  }

  makeTabActive(tab: number) {
    this.setState((prevState: TabsProps, currProps: TabsProps) => ({
      activeTab: tab
    }));
  }

  render() {
    const styles = {
      tabs: {
        display: 'flex',
        flexDirection: 'column',
        width: this.props.width || 400,
        height: this.props.height || 300,
        backgroundColor: this.props.backGroundColor || '#fff',
        boxShadow: this.props.shadow ||
          `0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)`,
        ...(this.props.styles && this.props.styles.tabs
          ? this.props.styles.tabs
          : {})
      },
      tabsList: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'space-around',
        width: '100%',
        height: this.props.tabHeight || 70,
        margin: 0,
        padding: 0,
        listStyle: 'none',
        backgroundColor: '#fff',
        boxShadow: this.props.shadow ||
          `0 1px 2px rgba(0,0,0,0.12), 0 1px 1px rgba(0,0,0,0.14)`,
        ...(this.props.styles && this.props.styles.tabsList
          ? this.props.styles.tabsList
          : {})
      },
      tabItem: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        margin: 0,
        padding: 0,
        height: this.props.tabHeight || 70,
        ...(this.props.styles && this.props.styles.tabItem
          ? this.props.styles.tabItem
          : {})
      }
    };

    let children = [];
    if (this.props.children) {
      if (Array.isArray(this.props.children)) children = this.props.children;
      else children = [ this.props.children ];
    }

    return (
      <div style={styles.tabs} className={this.props.className || 'tabs'}>
        <ul style={styles.tabsList}>
          {children.map((child, key) => (
              <li
                onClick={
                  () =>
                    this.props.showTab
                      ? this.props.showTab(key)
                      : this.makeTabActive(key)
                }
                key={key}
                style={styles.tabItem}
              >
                <h4>{child.props.label}</h4>
              </li>
            ))}
        </ul>
        <div>
          {
            this.props.activeTab != undefined
              ? children[this.props.activeTab]
              : children[this.state.activeTab]
          }
        </div>
      </div>
    );
  }
}

export type TabProps = { className?: string, label: string, children: any };

export function Tab(props: TabProps) {
  return (
    <div className={props.className ? props.className : 'tab'}>
      {props.children}
    </div>
  );
}
