import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TabBarProps } from './PropsType';
import TabBarItem from './TabBarItem.native';
import TabBarStyle, { ITabBarStyle } from './style/index.native';

export interface ITabBarNativeProps extends TabBarProps {
  styles?: ITabBarStyle;
}

const TabBarStyles = StyleSheet.create<any>(TabBarStyle);

class TabBar extends React.Component <ITabBarNativeProps, any> {
  static defaultProps = {
    barTintColor: 'white',
    tintColor: '#108ee9',
    unselectedTintColor: '#888',
    styles: TabBarStyles,
  };

  static Item: any;

  getPanes(content) {
    const { tintColor, unselectedTintColor, children } = this.props;
    const styles = this.props.styles!;
    // ios 规则： selected 为多个则只选中最后一个， selected 为 0 个则选中第一个;
    let selectedIndex = 0;
    children.forEach((child, idx) => {
      if (child.props.selected) {
        selectedIndex = idx;
      }
    });
    const newChildren: any[] = [];
    React.Children.forEach(children, (child: any, idx) => {
      if (content) {
        newChildren.push(
          <View
            key={idx}
            style={[ styles.contentItem, idx === selectedIndex ? styles.contentItemSelected : undefined ]}
          >
            {child.props.children}
          </View>,
        );
      } else {
        newChildren.push(React.cloneElement(child, {
          key: idx,
          tintColor,
          unselectedTintColor,
          styles,
        }));
      }
    });

    return newChildren;
  }

  render() {
    const styles = this.props.styles!;
    return (
      <View style={styles.tabbar}>
        <View style={styles.content}>
          {this.getPanes(true)}
        </View>
        <View style={[styles.tabs, { backgroundColor: this.props.barTintColor }]}>
          {this.getPanes(false)}
        </View>
      </View>
    );
  }
}

TabBar.Item = TabBarItem;

export default TabBar;
